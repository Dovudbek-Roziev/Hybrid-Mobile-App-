import assert from 'node:assert/strict';
import { registerHooks } from 'node:module';
import { DatabaseSync } from 'node:sqlite';
import test from 'node:test';
import { migrations, backupTables } from '../src/database/schema.ts';

const hooks = registerHooks({
  resolve(specifier, context, nextResolve) {
    if (specifier === 'expo-sqlite') {
      return {
        url: 'data:text/javascript,export const openDatabaseAsync = () => globalThis.backupTestDatabase',
        shortCircuit: true,
      };
    }
    try {
      return nextResolve(specifier, context);
    } catch (error) {
      if (error.code !== 'ERR_MODULE_NOT_FOUND' || !specifier.startsWith('.'))
        throw error;
      return nextResolve(specifier + '.ts', context);
    }
  },
});
const { exportBackup, restoreBackup, validateBackup } = await import(
  '../src/database/backup.ts'
);
const { saveExam, examHistory } = await import('../src/exams/storage.ts');
const { defaults, loadPreferences, savePreferences } = await import(
  '../src/features/preferences.ts'
);
hooks.deregister();

const day = '2026-11-28';
const timestamp = day + 'T08:00:00.000Z';
const question = {
  id: 'js-001:0',
  question: 'Choose a variable.',
  choices: ['let', 'if'],
  correct: 0,
  explanation: 'Use let.',
};

function snapshot() {
  return {
    format: 'personal-engineering-academy',
    version: 1,
    createdAt: timestamp,
    tables: {
      settings: [
        {
          key: 'profile',
          value: JSON.stringify({
            firstName: 'Ali',
            lastName: 'Valiyev',
            codingLevel: 'junior',
            englishLevel: 'a2',
            goal: 'software',
          }),
        },
        {
          key: 'preferences',
          value: JSON.stringify({
            theme: 'dark',
            language: 'uz',
            fontSize: 1,
            minutes: { programming: 25, practice: 15, english: 15, review: 5 },
            rest: [],
            reminder: null,
            pass: 70,
          }),
        },
      ],
      progress: [{ lesson_id: 'js-001', completed_at: timestamp }],
      english_progress: [{ exercise_id: 'en-a1-01', completed_at: timestamp }],
      quiz_attempts: [
        {
          id: 3,
          quiz_id: 'js-week-1',
          score: 2,
          total: 5,
          created_at: timestamp,
        },
      ],
      daily_tasks: [{ day, task: 'review', completed: 1 }],
      challenge_progress: [
        { id: 'challenge-1', draft: 'return a+b;', completed_at: null },
      ],
      vocabulary_reviews: [
        {
          id: 'word-1',
          due: '2026-11-29',
          interval_days: 1,
          reviewed_at: timestamp,
        },
      ],
      project_progress: [
        { id: 'project-1', milestone: 'm1', completed_at: timestamp },
      ],
      study_sessions: [
        {
          id: 'session-1',
          task: 'review',
          seconds: 300,
          day,
          created_at: timestamp,
        },
      ],
      exam_attempts: [
        {
          id: 'attempt-1',
          exam: 'weekly:1',
          score: 0,
          pass: 70,
          created_at: timestamp,
        },
      ],
      exam_answers: [
        {
          attempt_id: 'attempt-1',
          question: JSON.stringify(question),
          selected: null,
          correct: 0,
        },
      ],
    },
  };
}

test('rejects invalid dates, invalid settings, orphan answers and duplicate rows before restore', () => {
  const cases = [
    [
      (data) => {
        data.createdAt = 'yesterday';
      },
      /Unsupported backup/,
    ],
    [
      (data) => {
        data.tables.progress[0].completed_at = '2026-02-30T00:00:00.000Z';
      },
      /Invalid date/,
    ],
    [
      (data) => {
        data.tables.vocabulary_reviews[0].due = '2026-11-31';
      },
      /Invalid date/,
    ],
    [
      (data) => {
        data.tables.daily_tasks[0].day = '11/28/2026';
      },
      /Invalid date/,
    ],
    [
      (data) => {
        data.tables.exam_answers[0].attempt_id = 'missing';
      },
      /no matching attempt/,
    ],
    [
      (data) => {
        data.tables.daily_tasks.push({
          ...data.tables.daily_tasks[0],
          completed: 0,
        });
      },
      /Duplicate row/,
    ],
    [
      (data) => {
        data.tables.exam_answers.push({
          ...data.tables.exam_answers[0],
          question: JSON.stringify({ ...question, explanation: 'Alternate' }),
        });
      },
      /Duplicate question/,
    ],
    [
      (data) => {
        const settings = JSON.parse(data.tables.settings[1].value);
        settings.minutes.extra = 'bad value';
        data.tables.settings[1].value = JSON.stringify(settings);
      },
      /Invalid preferences/,
    ],
  ];
  for (const [mutate, expected] of cases) {
    const data = snapshot();
    mutate(data);
    assert.throws(() => validateBackup(JSON.stringify(data)), expected);
  }
});

test('version 1 backup round-trips every table and a failed import rolls back', async () => {
  // Expo opens a separate connection for exclusive transactions. Match that scope here.
  const database = new DatabaseSync(':memory:', {
    enableForeignKeyConstraints: false,
  });
  const connection = {
    async execAsync(sql) {
      database.exec(sql);
    },
    async runAsync(sql, ...args) {
      return database.prepare(sql).run(...args);
    },
    async getAllAsync(sql, ...args) {
      return database.prepare(sql).all(...args);
    },
    async getFirstAsync(sql) {
      return database.prepare(sql).get() ?? null;
    },
  };
  globalThis.backupTestDatabase = {
    ...connection,
    async closeAsync() {},
    async withExclusiveTransactionAsync(work) {
      database.exec('PRAGMA foreign_keys = OFF; BEGIN');
      try {
        await work(connection);
        database.exec('COMMIT');
      } catch (error) {
        database.exec('ROLLBACK');
        throw error;
      }
    },
  };
  try {
    const valid = snapshot();
    await restoreBackup(JSON.stringify(valid));
    const exported = await exportBackup();
    assert.deepEqual(validateBackup(exported), valid.tables);
    database.exec(
      "INSERT INTO progress VALUES ('extra', '2026-11-28T08:00:00.000Z')",
    );
    await restoreBackup(exported);
    assert.deepEqual(validateBackup(await exportBackup()), valid.tables);

    const orphan = snapshot();
    orphan.tables.exam_answers[0].attempt_id = 'missing';
    await assert.rejects(
      restoreBackup(JSON.stringify(orphan)),
      /no matching attempt/,
    );
    assert.deepEqual(validateBackup(await exportBackup()), valid.tables);

    database.exec(`CREATE TRIGGER test_broken_reference AFTER INSERT ON exam_answers
      BEGIN UPDATE exam_answers SET attempt_id = 'missing'
      WHERE attempt_id = NEW.attempt_id AND question = NEW.question; END`);
    await assert.rejects(
      restoreBackup(exported),
      /inconsistent database references/,
    );
    assert.deepEqual(validateBackup(await exportBackup()), valid.tables);
    assert.equal(database.prepare('PRAGMA foreign_key_check').all().length, 0);
    assert.equal(
      database
        .prepare('SELECT version FROM schema_migrations ORDER BY version')
        .all().length,
      migrations.length,
    );
    assert.equal(
      Object.keys(valid.tables).length,
      Object.keys(backupTables).length,
    );

    database.exec('DROP TRIGGER test_broken_reference');
    await savePreferences({ ...defaults, pass: 45 });
    const questions = [
      { ...question, lessonId: 'js-001' },
      { ...question, id: 'js-002:0', lessonId: 'js-002' },
    ];
    const answers = { [question.id]: question.correct };
    const first = await saveExam(
      'lower-pass',
      'weekly',
      '1',
      questions,
      answers,
      (await loadPreferences()).pass,
    );
    await savePreferences({ ...defaults, pass: 51 });
    const second = await saveExam(
      'higher-pass',
      'weekly',
      '1',
      questions,
      answers,
      (await loadPreferences()).pass,
    );
    assert.deepEqual(
      [first.score, first.passed, second.score, second.passed],
      [50, true, 50, false],
    );
    const recorded = new Map(
      (await examHistory()).map((attempt) => [attempt.id, attempt.pass]),
    );
    assert.deepEqual(
      [recorded.get('lower-pass'), recorded.get('higher-pass')],
      [45, 51],
    );

    await restoreBackup(await exportBackup());
    assert.equal((await loadPreferences()).pass, 51);
    assert.equal(
      (await examHistory()).find((attempt) => attempt.id === 'lower-pass').pass,
      45,
    );
  } finally {
    database.close();
    delete globalThis.backupTestDatabase;
  }
});

import { db } from './connection';
import { isPreferences } from '../features/preferences';
import { isProfile } from './storage';
import { backupTables } from './schema';
type Cell = string | number | null;
type Row = Record<string, Cell>;
const names = Object.keys(backupTables) as (keyof typeof backupTables)[];
export const maxBackupSize = 20_000_000;

const primaryKeys = {
  settings: ['key'],
  progress: ['lesson_id'],
  english_progress: ['exercise_id'],
  quiz_attempts: ['id'],
  daily_tasks: ['day', 'task'],
  challenge_progress: ['id'],
  vocabulary_reviews: ['id'],
  project_progress: ['id', 'milestone'],
  study_sessions: ['id'],
  exam_attempts: ['id'],
  exam_answers: ['attempt_id', 'question'],
} satisfies {
  [Name in keyof typeof backupTables]: readonly (typeof backupTables)[Name][number][];
};

const timestamps = new Set(['created_at', 'completed_at', 'reviewed_at']);
const calendarDays = new Set(['day', 'due']);
const numeric = new Set([
  'quiz_attempts.id',
  'quiz_attempts.score',
  'quiz_attempts.total',
  'daily_tasks.completed',
  'vocabulary_reviews.interval_days',
  'study_sessions.seconds',
  'exam_attempts.score',
  'exam_attempts.pass',
  'exam_answers.selected',
  'exam_answers.correct',
]);

function isTimestamp(value: unknown): value is string {
  if (typeof value !== 'string') return false;
  const date = new Date(value);
  return Number.isFinite(date.getTime()) && date.toISOString() === value;
}

function isCalendarDay(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    isTimestamp(value + 'T00:00:00.000Z')
  );
}

export async function exportBackup() {
  const database = await db();
  const tables: Record<string, Row[]> = {};
  await database.withExclusiveTransactionAsync(async (tx) => {
    for (const name of names) {
      const columns = backupTables[name].join(', ');
      tables[name] = await tx.getAllAsync<Row>(
        `SELECT ${columns} FROM ${name}`,
      );
    }
  });
  return JSON.stringify({
    format: 'personal-engineering-academy',
    version: 1,
    createdAt: new Date().toISOString(),
    tables,
  });
}
export function validateBackup(raw: string) {
  if (raw.length > maxBackupSize) throw new Error('Backup too large');
  const data = JSON.parse(raw);
  if (
    !data ||
    data.format !== 'personal-engineering-academy' ||
    data.version !== 1 ||
    !isTimestamp(data.createdAt) ||
    !data.tables ||
    Array.isArray(data.tables) ||
    typeof data.tables !== 'object'
  )
    throw new Error('Unsupported backup');
  const result: Record<string, Row[]> = {};
  const attemptQuestions = new Map<string, Set<string>>();
  for (const name of names) {
    const rows = data.tables[name];
    const columns = backupTables[name];
    if (!Array.isArray(rows) || rows.length > 100000)
      throw new Error('Invalid table: ' + name);
    const keys = new Set<string>();
    result[name] = rows.map((row: unknown) => {
      if (
        !row ||
        typeof row !== 'object' ||
        Array.isArray(row) ||
        Object.keys(row).length !== columns.length
      )
        throw new Error('Invalid row: ' + name);
      const source = row as Record<string, unknown>;
      const clean: Row = {};
      for (const col of columns) {
        if (!Object.hasOwn(source, col))
          throw new Error('Missing field: ' + col);
        const value = source[col];
        const key = name + '.' + col;
        const nullable =
          key === 'challenge_progress.completed_at' ||
          key === 'exam_answers.selected';
        if (value === null && nullable) {
          clean[col] = null;
          continue;
        }
        if (
          numeric.has(key)
            ? typeof value !== 'number' || !Number.isSafeInteger(value)
            : typeof value !== 'string'
        )
          throw new Error('Invalid field: ' + key);
        if (
          (timestamps.has(col) && !isTimestamp(value)) ||
          (calendarDays.has(col) && !isCalendarDay(value))
        ) {
          throw new Error('Invalid date: ' + key);
        }
        clean[col] = value as Cell;
      }
      const keyValues = primaryKeys[name].map((col) => clean[col]);
      if (keyValues.some((value) => typeof value === 'string' && !value.trim()))
        throw new Error('Empty identifier: ' + name);
      const primaryKey = JSON.stringify(keyValues);
      if (keys.has(primaryKey)) throw new Error('Duplicate row: ' + name);
      keys.add(primaryKey);
      if (name === 'settings') {
        const value = JSON.parse(clean.value as string);
        if (clean.key === 'profile' && !isProfile(value))
          throw new Error('Invalid profile');
        if (clean.key === 'preferences' && !isPreferences(value))
          throw new Error('Invalid preferences');
      }
      if (
        (name === 'daily_tasks' || name === 'study_sessions') &&
        !['programming', 'practice', 'english', 'review'].includes(
          String(clean.task),
        )
      )
        throw new Error('Invalid task');
      if (
        name === 'daily_tasks' &&
        clean.completed !== 0 &&
        clean.completed !== 1
      )
        throw new Error('Invalid completion');
      if (name === 'study_sessions' && Number(clean.seconds) <= 0)
        throw new Error('Invalid duration');
      if (
        name === 'vocabulary_reviews' &&
        (Number(clean.interval_days) < 0 || Number(clean.interval_days) > 90)
      )
        throw new Error('Invalid review interval');
      if (
        name === 'quiz_attempts' &&
        (Number(clean.total) <= 0 ||
          Number(clean.score) < 0 ||
          Number(clean.score) > Number(clean.total))
      )
        throw new Error('Invalid quiz score');
      if (
        name === 'exam_attempts' &&
        (Number(clean.score) < 0 ||
          Number(clean.score) > 100 ||
          Number(clean.pass) < 1 ||
          Number(clean.pass) > 100)
      )
        throw new Error('Invalid exam score');
      if (name === 'exam_attempts') {
        attemptQuestions.set(String(clean.id), new Set());
      }
      if (name === 'exam_answers') {
        const q = JSON.parse(clean.question as string);
        if (
          !q ||
          !Array.isArray(q.choices) ||
          typeof q.id !== 'string' ||
          !q.id.trim() ||
          typeof q.question !== 'string' ||
          typeof q.explanation !== 'string' ||
          !Number.isInteger(q.correct) ||
          q.correct !== clean.correct ||
          q.correct < 0 ||
          q.correct >= q.choices.length ||
          !q.choices.every((x: unknown) => typeof x === 'string') ||
          (clean.selected !== null &&
            (Number(clean.selected) < 0 ||
              Number(clean.selected) >= q.choices.length))
        )
          throw new Error('Invalid exam answer');
        const questions = attemptQuestions.get(String(clean.attempt_id));
        if (!questions) throw new Error('Exam answer has no matching attempt');
        if (questions.has(q.id))
          throw new Error('Duplicate question in exam attempt');
        questions.add(q.id);
      }
      return clean;
    });
  }
  return result;
}
export async function restoreBackup(raw: string) {
  const tables = validateBackup(raw);
  const database = await db();
  await database.withExclusiveTransactionAsync(async (tx) => {
    for (const name of [...names].reverse())
      await tx.runAsync('DELETE FROM ' + name);
    for (const name of names) {
      const columns = backupTables[name];
      const sql =
        'INSERT INTO ' +
        name +
        ' (' +
        columns.join(',') +
        ') VALUES (' +
        columns.map(() => '?').join(',') +
        ')';
      for (const row of tables[name])
        await tx.runAsync(sql, ...columns.map((c) => row[c]));
    }
    if (await tx.getFirstAsync('PRAGMA foreign_key_check')) {
      throw new Error('Backup contains inconsistent database references');
    }
  });
}

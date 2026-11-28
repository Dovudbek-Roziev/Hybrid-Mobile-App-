import { db } from './connection';
import { isPreferences } from '../features/preferences';
import { isProfile } from './storage';
import { backupTables } from './schema';
type Cell = string | number | null;
type Row = Record<string, Cell>;
const names = Object.keys(backupTables) as (keyof typeof backupTables)[];
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
export async function exportBackup() {
  const database = await db();
  const tables: Record<string, Row[]> = {};
  await database.withExclusiveTransactionAsync(async (tx) => {
    for (const name of names)
      tables[name] = await tx.getAllAsync<Row>('SELECT * FROM ' + name);
  });
  return JSON.stringify({
    format: 'personal-engineering-academy',
    version: 1,
    createdAt: new Date().toISOString(),
    tables,
  });
}
export function validateBackup(raw: string) {
  if (raw.length > 20_000_000) throw new Error('Backup too large');
  const data = JSON.parse(raw);
  if (
    !data ||
    data.format !== 'personal-engineering-academy' ||
    data.version !== 1 ||
    !data.tables ||
    typeof data.tables !== 'object'
  )
    throw new Error('Unsupported backup');
  const result: Record<string, Row[]> = {};
  for (const name of names) {
    const rows = data.tables[name];
    const columns = backupTables[name];
    if (!Array.isArray(rows) || rows.length > 100000)
      throw new Error('Invalid table: ' + name);
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
        clean[col] = value as Cell;
      }
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
      if (name === 'exam_answers') {
        const q = JSON.parse(clean.question as string);
        if (
          !q ||
          !Array.isArray(q.choices) ||
          typeof q.id !== 'string' ||
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
  });
}

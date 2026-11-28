import { db } from './connection';
import type { backupTables } from './schema';

const progressTables = [
  'exam_answers',
  'exam_attempts',
  'quiz_attempts',
  'study_sessions',
  'daily_tasks',
  'project_progress',
  'vocabulary_reviews',
  'english_progress',
  'challenge_progress',
  'progress',
] as const satisfies readonly Exclude<keyof typeof backupTables, 'settings'>[];

export async function resetLearningProgress() {
  const database = await db();
  await database.withExclusiveTransactionAsync(async (transaction) => {
    for (const table of progressTables) {
      await transaction.runAsync(`DELETE FROM ${table}`);
    }
  });
}

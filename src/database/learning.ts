import { db } from './connection';
import { localDay, shiftDay } from '../utils/calendar';
import type { DailyTask } from '../storage';

const now = () => new Date().toISOString();

export async function challengeEntries() {
  return (await db()).getAllAsync<{id: string; draft: string; completed_at: string | null}>('SELECT * FROM challenge_progress');
}
export async function saveChallenge(id: string, draft: string, complete: boolean) {
  await (await db()).runAsync(`INSERT INTO challenge_progress (id, draft, completed_at) VALUES (?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET draft = excluded.draft, completed_at = COALESCE(challenge_progress.completed_at, excluded.completed_at)`, id, draft, complete ? now() : null);
}

export async function projectEntries() {
  return (await db()).getAllAsync<{id: string; milestone: string}>('SELECT id, milestone FROM project_progress');
}
export async function setMilestone(id: string, milestone: string, complete: boolean) {
  const database = await db();
  if (complete) await database.runAsync('INSERT OR IGNORE INTO project_progress VALUES (?, ?, ?)', id, milestone, now());
  else await database.runAsync('DELETE FROM project_progress WHERE id = ? AND milestone = ?', id, milestone);
}

export async function vocabularyEntries() {
  return (await db()).getAllAsync<{id: string; due: string; interval_days: number}>('SELECT id, due, interval_days FROM vocabulary_reviews');
}
export async function rateWord(id: string, recalled: boolean) {
  const database = await db();
  await database.withExclusiveTransactionAsync(async tx => {
    const previous = await tx.getFirstAsync<{interval_days: number}>('SELECT interval_days FROM vocabulary_reviews WHERE id = ?', id);
    const interval = recalled ? Math.min(90, Math.max(1, (previous?.interval_days ?? 0) * 2)) : 0;
    await tx.runAsync(`INSERT INTO vocabulary_reviews VALUES (?, ?, ?, ?) ON CONFLICT(id)
      DO UPDATE SET due = excluded.due, interval_days = excluded.interval_days, reviewed_at = excluded.reviewed_at`,
      id, shiftDay(localDay(), interval), interval, now());
  });
}

export async function addSession(id: string, day: string, task: DailyTask, seconds: number) {
  if (seconds > 0) await (await db()).runAsync('INSERT OR IGNORE INTO study_sessions VALUES (?, ?, ?, ?, ?)', id, task, seconds, day, now());
}

export async function studyData() {
  const database = await db();
  const [days, tasks] = await Promise.all([
    database.getAllAsync<{day: string; seconds: number}>('SELECT day, SUM(seconds) AS seconds FROM study_sessions GROUP BY day ORDER BY day DESC'),
    database.getAllAsync<{day: string; count: number}>('SELECT day, COUNT(*) AS count FROM daily_tasks WHERE completed = 1 GROUP BY day'),
  ]);
  return {days, tasks};
}

export async function activityDays() {
  const rows = await (await db()).getAllAsync<{stamp: string}>(`
    SELECT completed_at AS stamp FROM progress UNION SELECT completed_at FROM english_progress
    UNION SELECT completed_at FROM challenge_progress WHERE completed_at IS NOT NULL
    UNION SELECT created_at FROM exam_attempts UNION SELECT created_at FROM quiz_attempts
    UNION SELECT completed_at FROM project_progress UNION SELECT reviewed_at FROM vocabulary_reviews`);
  return rows.map(row => localDay(new Date(row.stamp)));
}

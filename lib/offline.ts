import * as SQLite from 'expo-sqlite';

let connection: Promise<SQLite.SQLiteDatabase> | null = null;

export async function offlineDb() {
  if (!connection) {
    connection = (async () => {
      const db = await SQLite.openDatabaseAsync('hybrid-roadmap.db');
      await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS lesson_progress (
          lesson_id TEXT PRIMARY KEY NOT NULL,
          completed_at TEXT NOT NULL,
          synced INTEGER NOT NULL DEFAULT 0
        );
      `);
      return db;
    })().catch(error => { connection = null; throw error; });
  }
  return connection;
}

export async function completeLessonOffline(lessonId: string) {
  const db = await offlineDb();
  await db.runAsync(
    'INSERT INTO lesson_progress (lesson_id, completed_at, synced) VALUES (?, ?, 0) ON CONFLICT(lesson_id) DO UPDATE SET completed_at=excluded.completed_at, synced=0',
    lessonId, new Date().toISOString(),
  );
}

export async function listOfflineProgress(): Promise<string[]> {
  const db = await offlineDb();
  const rows = await db.getAllAsync<{ lesson_id: string }>('SELECT lesson_id FROM lesson_progress ORDER BY completed_at DESC');
  return rows.map(row => row.lesson_id);
}

export async function unsyncedProgress(): Promise<string[]> {
  const db = await offlineDb();
  const rows = await db.getAllAsync<{ lesson_id: string }>('SELECT lesson_id FROM lesson_progress WHERE synced = 0');
  return rows.map(row => row.lesson_id);
}

export async function markProgressSynced(lessonId: string) {
  const db = await offlineDb();
  await db.runAsync('UPDATE lesson_progress SET synced = 1 WHERE lesson_id = ?', lessonId);
}

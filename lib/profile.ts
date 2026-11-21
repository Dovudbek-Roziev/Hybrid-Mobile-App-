import * as SQLite from 'expo-sqlite';

export type Profile = {
  firstName: string;
  lastName: string;
  codingLevel: 'beginner' | 'junior' | 'intermediate' | 'advanced';
  englishLevel: 'a1' | 'a2' | 'b1' | 'b2';
  goal: 'fullstack' | 'mobile' | 'software';
};

let dbPromise: Promise<SQLite.SQLiteDatabase> | undefined;
async function database() {
  if (!dbPromise) dbPromise = (async () => {
    const db = await SQLite.openDatabaseAsync('hybrid-roadmap.db');
    await db.execAsync('CREATE TABLE IF NOT EXISTS local_profile (id INTEGER PRIMARY KEY CHECK (id = 1), data TEXT NOT NULL)');
    return db;
  })().catch(error => { dbPromise = undefined; throw error; });
  return dbPromise;
}

export async function getProfile(): Promise<Profile | null> {
  const db = await database();
  const row = await db.getFirstAsync<{ data: string }>('SELECT data FROM local_profile WHERE id = 1');
  return row ? JSON.parse(row.data) as Profile : null;
}

export async function saveProfile(profile: Profile): Promise<void> {
  const db = await database();
  await db.runAsync('INSERT INTO local_profile (id, data) VALUES (1, ?) ON CONFLICT(id) DO UPDATE SET data=excluded.data', JSON.stringify(profile));
}

import { openDatabaseAsync, type SQLiteDatabase } from 'expo-sqlite';
import { migrations } from './schema';

let pending: Promise<SQLiteDatabase> | undefined;

export function db() {
  pending ??= initialize().catch(error => {
    pending = undefined;
    throw error;
  });
  return pending;
}

async function initialize() {
  const database = await openDatabaseAsync('academy.db');
  try {
    await database.execAsync('PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON; CREATE TABLE IF NOT EXISTS schema_migrations (version INTEGER PRIMARY KEY NOT NULL);');
    await database.withExclusiveTransactionAsync(async tx => {
      const applied = await tx.getAllAsync<{ version: number }>('SELECT version FROM schema_migrations');
      const versions = new Set(applied.map(row => row.version));
      for (const [index, sql] of migrations.entries()) {
        const version = index + 1;
        if (versions.has(version)) continue;
        await tx.execAsync(sql);
        await tx.runAsync('INSERT INTO schema_migrations (version) VALUES (?)', version);
      }
    });
    return database;
  } catch (error) {
    await database.closeAsync();
    throw error;
  }
}

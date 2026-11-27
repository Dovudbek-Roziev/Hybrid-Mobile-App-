import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import test from 'node:test';
import { migrations } from '../src/database/schema.ts';

function migrate(db) {
  db.exec('CREATE TABLE IF NOT EXISTS schema_migrations (version INTEGER PRIMARY KEY NOT NULL)');
  db.exec('BEGIN');
  try {
    for (const [index, sql] of migrations.entries()) {
      const version = index + 1;
      if (db.prepare('SELECT version FROM schema_migrations WHERE version = ?').get(version)) continue;
      db.exec(sql);
      db.prepare('INSERT INTO schema_migrations VALUES (?)').run(version);
    }
    db.exec('COMMIT');
  } catch (error) {
    db.exec('ROLLBACK');
    throw error;
  }
}

test('upgrading an existing SQLite file preserves every legacy data category', () => {
  const db = new DatabaseSync(':memory:');
  try {
    db.exec(migrations[0]);
    db.exec(`INSERT INTO settings VALUES ('profile', '{"firstName":"Ali"}');
      INSERT INTO progress VALUES ('js-001', '2026-11-27T12:00:00.000Z');
      INSERT INTO english_progress VALUES ('en-a1-01', '2026-11-27T12:00:00.000Z');
      INSERT INTO quiz_attempts VALUES (8, 'js-week-1', 4, 5, '2026-11-27T12:00:00.000Z');
      INSERT INTO daily_tasks VALUES ('2026-11-27', 'review', 1);`);
    migrate(db);
    migrate(db);
    assert.equal(db.prepare('SELECT value FROM settings').get().value, '{"firstName":"Ali"}');
    assert.equal(db.prepare('SELECT lesson_id FROM progress').get().lesson_id, 'js-001');
    assert.equal(db.prepare('SELECT exercise_id FROM english_progress').get().exercise_id, 'en-a1-01');
    assert.equal(db.prepare('SELECT id FROM quiz_attempts').get().id, 8);
    assert.equal(db.prepare('SELECT completed FROM daily_tasks').get().completed, 1);
    assert.equal(db.prepare('SELECT COUNT(*) AS count FROM schema_migrations').get().count, migrations.length);
  } finally {
    db.close();
  }
});

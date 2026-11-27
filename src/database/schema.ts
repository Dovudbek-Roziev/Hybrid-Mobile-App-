export const migrations = [
  `CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS progress (lesson_id TEXT PRIMARY KEY NOT NULL, completed_at TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS english_progress (exercise_id TEXT PRIMARY KEY NOT NULL, completed_at TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS quiz_attempts (id INTEGER PRIMARY KEY AUTOINCREMENT, quiz_id TEXT NOT NULL, score INTEGER NOT NULL, total INTEGER NOT NULL, created_at TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS daily_tasks (day TEXT NOT NULL, task TEXT NOT NULL, completed INTEGER NOT NULL, PRIMARY KEY (day, task));`,
  `CREATE TABLE IF NOT EXISTS challenge_progress (id TEXT PRIMARY KEY NOT NULL, draft TEXT NOT NULL, completed_at TEXT);
   CREATE TABLE IF NOT EXISTS vocabulary_reviews (id TEXT PRIMARY KEY NOT NULL, due TEXT NOT NULL, interval_days INTEGER NOT NULL, reviewed_at TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS project_progress (id TEXT NOT NULL, milestone TEXT NOT NULL, completed_at TEXT NOT NULL, PRIMARY KEY (id, milestone));
   CREATE TABLE IF NOT EXISTS study_sessions (id TEXT PRIMARY KEY NOT NULL, task TEXT NOT NULL, seconds INTEGER NOT NULL CHECK(seconds > 0), day TEXT NOT NULL, created_at TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS exam_attempts (id TEXT PRIMARY KEY NOT NULL, exam TEXT NOT NULL, score INTEGER NOT NULL CHECK(score BETWEEN 0 AND 100), pass INTEGER NOT NULL CHECK(pass BETWEEN 0 AND 100), created_at TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS exam_answers (attempt_id TEXT NOT NULL REFERENCES exam_attempts(id) ON DELETE CASCADE, question TEXT NOT NULL, selected INTEGER, correct INTEGER NOT NULL, PRIMARY KEY (attempt_id, question));`,
];

export const backupTables = {
  settings: ['key', 'value'],
  progress: ['lesson_id', 'completed_at'],
  english_progress: ['exercise_id', 'completed_at'],
  quiz_attempts: ['id', 'quiz_id', 'score', 'total', 'created_at'],
  daily_tasks: ['day', 'task', 'completed'],
  challenge_progress: ['id', 'draft', 'completed_at'],
  vocabulary_reviews: ['id', 'due', 'interval_days', 'reviewed_at'],
  project_progress: ['id', 'milestone', 'completed_at'],
  study_sessions: ['id', 'task', 'seconds', 'day', 'created_at'],
  exam_attempts: ['id', 'exam', 'score', 'pass', 'created_at'],
  exam_answers: ['attempt_id', 'question', 'selected', 'correct'],
} as const;

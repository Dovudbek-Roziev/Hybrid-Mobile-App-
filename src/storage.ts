import * as SQLite from 'expo-sqlite';
export type Profile={firstName:string;lastName:string;codingLevel:'beginner'|'junior'|'intermediate'|'advanced';englishLevel:'a1'|'a2'|'b1'|'b2';goal:'software'|'fullstack'|'mobile'};
export type QuizAttempt={id:number;quizId:string;score:number;total:number;createdAt:string};
let pending:Promise<SQLite.SQLiteDatabase>|undefined;
async function db(){if(!pending)pending=(async()=>{const database=await SQLite.openDatabaseAsync('academy.db');await database.execAsync(`PRAGMA journal_mode=WAL;
CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS progress (lesson_id TEXT PRIMARY KEY NOT NULL, completed_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS english_progress (exercise_id TEXT PRIMARY KEY NOT NULL, completed_at TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS quiz_attempts (id INTEGER PRIMARY KEY AUTOINCREMENT, quiz_id TEXT NOT NULL, score INTEGER NOT NULL, total INTEGER NOT NULL, created_at TEXT NOT NULL);`);return database})().catch(e=>{pending=undefined;throw e});return pending}
export async function loadProfile():Promise<Profile|null>{const row=await(await db()).getFirstAsync<{value:string}>("SELECT value FROM settings WHERE key='profile'");return row?JSON.parse(row.value) as Profile:null}
export async function saveProfile(p:Profile){await(await db()).runAsync("INSERT INTO settings(key,value) VALUES('profile',?) ON CONFLICT(key) DO UPDATE SET value=excluded.value",JSON.stringify(p))}
export async function completeLesson(id:string){await(await db()).runAsync('INSERT INTO progress(lesson_id,completed_at) VALUES(?,?) ON CONFLICT(lesson_id) DO NOTHING',id,new Date().toISOString())}
export async function completedLessons(){const rows=await(await db()).getAllAsync<{lesson_id:string}>('SELECT lesson_id FROM progress');return rows.map(x=>x.lesson_id)}
export async function completeEnglish(id:string){await(await db()).runAsync('INSERT INTO english_progress(exercise_id,completed_at) VALUES(?,?) ON CONFLICT(exercise_id) DO NOTHING',id,new Date().toISOString())}
export async function completedEnglish(){const rows=await(await db()).getAllAsync<{exercise_id:string}>('SELECT exercise_id FROM english_progress');return rows.map(x=>x.exercise_id)}
export async function saveQuizAttempt(quizId:string,score:number,total:number){await(await db()).runAsync('INSERT INTO quiz_attempts(quiz_id,score,total,created_at) VALUES(?,?,?,?)',quizId,score,total,new Date().toISOString())}
export async function quizAttempts():Promise<QuizAttempt[]>{const rows=await(await db()).getAllAsync<{id:number;quiz_id:string;score:number;total:number;created_at:string}>('SELECT * FROM quiz_attempts ORDER BY id DESC');return rows.map(r=>({id:r.id,quizId:r.quiz_id,score:r.score,total:r.total,createdAt:r.created_at}))}

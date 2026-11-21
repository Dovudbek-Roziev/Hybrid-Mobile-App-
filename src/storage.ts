import * as SQLite from 'expo-sqlite';
export type Profile={firstName:string;lastName:string;codingLevel:'beginner'|'junior'|'intermediate'|'advanced';englishLevel:'a1'|'a2'|'b1'|'b2';goal:'software'|'fullstack'|'mobile'};
let pending:Promise<SQLite.SQLiteDatabase>|undefined;
async function db(){if(!pending)pending=(async()=>{const database=await SQLite.openDatabaseAsync('academy.db');await database.execAsync('PRAGMA journal_mode=WAL; CREATE TABLE IF NOT EXISTS settings (key TEXT PRIMARY KEY NOT NULL, value TEXT NOT NULL); CREATE TABLE IF NOT EXISTS progress (lesson_id TEXT PRIMARY KEY NOT NULL, completed_at TEXT NOT NULL);');return database})().catch(e=>{pending=undefined;throw e});return pending}
export async function loadProfile():Promise<Profile|null>{const row=await(await db()).getFirstAsync<{value:string}>("SELECT value FROM settings WHERE key='profile'");return row?JSON.parse(row.value) as Profile:null}
export async function saveProfile(p:Profile){await(await db()).runAsync("INSERT INTO settings(key,value) VALUES('profile',?) ON CONFLICT(key) DO UPDATE SET value=excluded.value",JSON.stringify(p))}
export async function completeLesson(id:string){await(await db()).runAsync('INSERT INTO progress(lesson_id,completed_at) VALUES(?,?) ON CONFLICT(lesson_id) DO NOTHING',id,new Date().toISOString())}
export async function completedLessons(){const rows=await(await db()).getAllAsync<{lesson_id:string}>('SELECT lesson_id FROM progress');return rows.map(x=>x.lesson_id)}

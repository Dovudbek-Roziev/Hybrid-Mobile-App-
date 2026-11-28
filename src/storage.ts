import { db } from './database/connection';
export type Profile={firstName:string;lastName:string;codingLevel:'beginner'|'junior'|'intermediate'|'advanced';englishLevel:'a1'|'a2'|'b1'|'b2';goal:'software'|'fullstack'|'mobile'};
export function isProfile(input:unknown):input is Profile {
 if(!input||typeof input!=='object')return false;
 const p=input as Profile;
 return typeof p.firstName==='string'&&!!p.firstName.trim()&&typeof p.lastName==='string'&&!!p.lastName.trim()&&['beginner','junior','intermediate','advanced'].includes(p.codingLevel)&&['a1','a2','b1','b2'].includes(p.englishLevel)&&['software','fullstack','mobile'].includes(p.goal);
}
export type QuizAttempt={id:number;quizId:string;score:number;total:number;createdAt:string};
export async function loadProfile():Promise<Profile|null>{const row=await(await db()).getFirstAsync<{value:string}>("SELECT value FROM settings WHERE key='profile'");if(!row)return null;try{const p:unknown=JSON.parse(row.value);return isProfile(p)?p:null}catch{return null}}
export async function saveProfile(p:Profile){await(await db()).runAsync("INSERT INTO settings(key,value) VALUES('profile',?) ON CONFLICT(key) DO UPDATE SET value=excluded.value",JSON.stringify(p))}
export async function completeLesson(id:string){await(await db()).runAsync('INSERT INTO progress(lesson_id,completed_at) VALUES(?,?) ON CONFLICT(lesson_id) DO NOTHING',id,new Date().toISOString())}
export async function completedLessons(){const rows=await(await db()).getAllAsync<{lesson_id:string}>('SELECT lesson_id FROM progress');return rows.map(x=>x.lesson_id)}
export async function completeEnglish(id:string){await(await db()).runAsync('INSERT INTO english_progress(exercise_id,completed_at) VALUES(?,?) ON CONFLICT(exercise_id) DO NOTHING',id,new Date().toISOString())}
export async function completedEnglish(){const rows=await(await db()).getAllAsync<{exercise_id:string}>('SELECT exercise_id FROM english_progress');return rows.map(x=>x.exercise_id)}
export async function saveQuizAttempt(quizId:string,score:number,total:number){await(await db()).runAsync('INSERT INTO quiz_attempts(quiz_id,score,total,created_at) VALUES(?,?,?,?)',quizId,score,total,new Date().toISOString())}
export async function quizAttempts():Promise<QuizAttempt[]>{const rows=await(await db()).getAllAsync<{id:number;quiz_id:string;score:number;total:number;created_at:string}>('SELECT * FROM quiz_attempts ORDER BY id DESC');return rows.map(r=>({id:r.id,quizId:r.quiz_id,score:r.score,total:r.total,createdAt:r.created_at}))}

export type DailyTask='programming'|'practice'|'english'|'review';
export async function setDailyTask(day:string,task:DailyTask,completed:boolean){
 const database=await db();
 await database.runAsync('INSERT INTO daily_tasks(day,task,completed) VALUES(?,?,?) ON CONFLICT(day,task) DO UPDATE SET completed=excluded.completed',day,task,completed?1:0);
}
export async function getDailyTasks(day:string):Promise<DailyTask[]>{
 const database=await db();
 const rows=await database.getAllAsync<{task:DailyTask}>('SELECT task FROM daily_tasks WHERE day=? AND completed=1',day);
 return rows.map(r=>r.task);
}

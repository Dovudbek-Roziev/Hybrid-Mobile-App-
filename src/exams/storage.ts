import { db } from '../database/connection';
import { gradeExam, type ExamKind, type ExamQuestion } from './engine';

export async function saveExam(id: string, kind: ExamKind, scope: string, questions: readonly ExamQuestion[], answers: Readonly<Record<string,number>>) {
 if (!questions.length) throw new Error('Empty exam');
 const result=gradeExam(questions,answers);
 const database=await db();
 await database.withExclusiveTransactionAsync(async tx=>{
  await tx.runAsync('INSERT INTO exam_attempts (id,exam,score,pass,created_at) VALUES (?,?,?,?,?)',id,kind+':'+scope,result.score,70,new Date().toISOString());
  for(const q of questions){
   const selected=answers[q.id];
   await tx.runAsync('INSERT INTO exam_answers (attempt_id,question,selected,correct) VALUES (?,?,?,?)',id,JSON.stringify(q),Number.isInteger(selected)&&selected>=0&&selected<q.choices.length?selected:null,q.correct);
  }
 });
 return result;
}
export async function examHistory(){
 return (await db()).getAllAsync<{id:string;exam:string;score:number;pass:number;created_at:string}>('SELECT * FROM exam_attempts ORDER BY created_at DESC');
}
export async function examReview(id:string){
 const rows=await (await db()).getAllAsync<{question:string;selected:number|null;correct:number}>('SELECT question,selected,correct FROM exam_answers WHERE attempt_id=? ORDER BY rowid',id);
 return rows.map(row=>({question:JSON.parse(row.question) as ExamQuestion,selected:row.selected,correct:row.correct}));
}

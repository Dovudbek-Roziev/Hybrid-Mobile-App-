import { lessons } from '../curriculum';
import { lessonQuestions, type LessonQuestion } from '../curriculum/model';

export type ExamKind = 'lesson' | 'weekly' | 'monthly' | 'quarterly' | 'final';
export type ExamQuestion = LessonQuestion & { id: string; lessonId: string };
export const examRules = {
 lesson: {count:5,minutes:5}, weekly:{count:10,minutes:15},
 monthly:{count:20,minutes:30}, quarterly:{count:30,minutes:45}, final:{count:50,minutes:60},
} as const;
export function shuffle<T>(values: readonly T[], random = Math.random): T[] {
 const result = [...values];
 for(let i=result.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[result[i],result[j]]=[result[j],result[i]];}
 return result;
}
export function buildExam(kind: ExamKind, scope: string, random = Math.random): ExamQuestion[] {
 const n=Number(scope);
 const selected=lessons.filter(l=>kind==='final'||(kind==='lesson'?l.id===scope:kind==='weekly'?l.week===n:kind==='monthly'?l.month===n:Math.ceil(l.month/3)===n));
 const pool=selected.flatMap(l=>lessonQuestions(l).map((q,i)=>({...q,id:l.id+':'+i,lessonId:l.id})));
 return shuffle(pool,random).slice(0,examRules[kind].count).map(q=>{
 const options=shuffle(q.choices.map((choice,index)=>({choice,index})),random);
 return {...q,choices:options.map(o=>o.choice),correct:options.findIndex(o=>o.index===q.correct)};
 });
}
export function gradeExam(questions: readonly ExamQuestion[], answers: Readonly<Record<string,number>>) {
 const correct=questions.filter(q=>answers[q.id]===q.correct).length;
 const score=questions.length?Math.round(correct*100/questions.length):0;
 return {correct,total:questions.length,score,passed:questions.length>0&&score>=70};
}

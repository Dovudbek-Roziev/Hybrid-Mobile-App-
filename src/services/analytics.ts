import { completedLessons, completedEnglish, quizAttempts } from '../storage';
import { challengeEntries, vocabularyEntries, projectEntries, studyData, activityDays } from '../database/learning';
import { examHistory } from '../exams/storage';
import { lessons } from '../curriculum';
import { exercises } from '../english';
import { grammar } from '../english/grammar';
import { readings as reading } from '../english/reading';
import { vocabulary } from '../english/vocabulary';
import { challenges } from '../challenges/catalog';
import { projects } from '../projects/catalog';
import { localDay, shiftDay, streaks } from '../utils/calendar';

export async function loadAnalytics(){
 const [l,e,c,v,p,study,days,exams,quizzes]=await Promise.all([completedLessons(),completedEnglish(),challengeEntries(),vocabularyEntries(),projectEntries(),studyData(),activityDays(),examHistory(),quizAttempts()]);
 const lessonIds=new Set(l),englishIds=new Set(e),challengeIds=new Set(c.filter(x=>x.completed_at).map(x=>x.id)),wordIds=new Set(v.map(x=>x.id)),milestoneIds=new Set(p.map(x=>x.id+':'+x.milestone));
 const today=localDay();
 const week=Array.from({length:7},(_,i)=>{const day=shiftDay(today,i-6);return {day,seconds:study.days.find(x=>x.day===day)?.seconds??0,tasks:study.tasks.find(x=>x.day===day)?.count??0};});
 const scores=[...exams.map(x=>x.score),...quizzes.filter(x=>x.total>0).map(x=>Math.round(x.score*100/x.total))];
 return {
 lessons:{done:lessons.filter(x=>lessonIds.has(x.id)).length,total:lessons.length},
 exercises:{done:exercises.filter(x=>englishIds.has(x.id)).length,total:exercises.length},
 grammar:{done:grammar.filter(x=>englishIds.has(x.id)).length,total:grammar.length},
 reading:{done:reading.filter(x=>englishIds.has(x.id)).length,total:reading.length},
 vocabulary:{done:vocabulary.filter(x=>wordIds.has(x.id)).length,total:vocabulary.length},
 challenges:{done:challenges.filter(x=>challengeIds.has(x.id)).length,total:challenges.length},
 projects:{done:projects.filter(x=>x.milestones.every(m=>milestoneIds.has(x.id+':'+m.id))).length,total:projects.length},
 week,streak:streaks([...days,...study.days.map(x=>x.day),...study.tasks.filter(x=>x.count>0).map(x=>x.day)],today),
 totalSeconds:study.days.reduce((sum,x)=>sum+x.seconds,0),
 exams:{count:scores.length,best:scores.length?Math.max(...scores):null,average:scores.length?Math.round(scores.reduce((a,b)=>a+b,0)/scores.length):null},
 };
}

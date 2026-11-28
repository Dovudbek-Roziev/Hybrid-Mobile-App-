import { useState } from 'react';
import { Button, Card, Label, Screen, LoadState } from '../src/components/ui';
import { useTheme } from '../src/theme';
import { useLocalData } from '../src/hooks/useLocalData';
import { examHistory, examReview } from '../src/exams/storage';

export default function ExamHistory(){
 const {t}=useTheme();
 const history=useLocalData(examHistory);
 const [review,setReview]=useState<Awaited<ReturnType<typeof examReview>>|null>(null);
 const [error,setError]=useState('');
 const [busy,setBusy]=useState(false);
 const [page,setPage]=useState(0);
 const rows=history.data??[];
 async function open(id:string){
  setBusy(true);setError('');
  try{setReview(await examReview(id));}catch(e){setError(String(e));}finally{setBusy(false);}
 }
 return <Screen title={t('Exam history','Imtihonlar tarixi')} back>
 <LoadState {...history}/>
 {!!error&&<Label>{error}</Label>}
 {review!==null?<><Button onPress={()=>setReview(null)}>{t('Back to history','Tarixga qaytish')}</Button>
 {review.map(r=><Card key={r.question.id}><Label kind="heading">{r.question.question}</Label><Label>{r.selected===r.correct?t('Correct','To‘g‘ri'):t('Incorrect or unanswered','Xato yoki javobsiz')}</Label><Label>{t('Your answer','Javobingiz')}: {r.selected===null?'—':r.question.choices[r.selected]}</Label><Label>{t('Correct answer','To‘g‘ri javob')}: {r.question.choices[r.correct]}</Label><Label>{r.question.explanation}</Label></Card>)}</>:<>
 {!history.loading&&!rows.length&&<Label>{t('No attempts yet','Hali imtihon topshirilmagan')}</Label>}
 {rows.slice(page*10,page*10+10).map(r=><Card key={r.id}><Label kind="heading">{r.exam} · {r.score}/100</Label><Label>{new Date(r.created_at).toLocaleString()}</Label><Label>{r.score>=r.pass?t('Passed','O‘tdingiz'):t('Not passed','O‘tmadingiz')}</Label><Button disabled={busy} onPress={()=>void open(r.id)}>{t('Review answers','Javoblarni ko‘rish')}</Button></Card>)}
 <Button disabled={page===0} onPress={()=>setPage(p=>p-1)}>{t('Previous','Oldingi')}</Button><Button disabled={(page+1)*10>=rows.length} onPress={()=>setPage(p=>p+1)}>{t('Next','Keyingi')}</Button></>}
 </Screen>;
}

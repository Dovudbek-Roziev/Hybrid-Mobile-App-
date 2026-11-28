import { useState } from 'react';
import { Button, Card, Label, Meter, Screen, LoadState } from '../src/components/ui';
import { grammar, type Grammar } from '../src/english/grammar';
import { completedEnglish, completeEnglish } from '../src/storage';
import { useLocalData } from '../src/hooks/useLocalData';
import { useTheme } from '../src/theme';

export default function GrammarScreen(){
 const {t}=useTheme();
 const [level,setLevel]=useState<Grammar['level']>('a1');
 const [selected,setSelected]=useState<string|null>(null);
 const [choice,setChoice]=useState<number|null>(null);
 const [busy,setBusy]=useState(false);
 const [message,setMessage]=useState('');
 const progress=useLocalData(completedEnglish);
 const list=grammar.filter(g=>g.level===level);
 const item=list.find(g=>g.id===selected);
 const done=new Set(progress.data??[]);
 async function answer(i:number){
  if(!item||busy)return;
  setChoice(i);setMessage('');
  if(i!==item.answer)return;
  setBusy(true);
  try{await completeEnglish(item.id);setMessage(t('Correct! Saved offline.','To‘g‘ri! Qurilmada saqlandi.'));progress.retry();}
  catch{setMessage(t('Save failed. Try again.','Saqlashda xato. Qayta urining.'));}
  finally{setBusy(false);}
 }
 return <Screen title={t('Grammar','Grammatika')} back>
 <LoadState {...progress}/>
 <Card><Label>{list.filter(g=>done.has(g.id)).length} / {list.length}</Label><Meter value={list.filter(g=>done.has(g.id)).length} total={list.length}/></Card>
 {(['a1','a2','b1','b2'] as const).map(l=><Button key={l} disabled={busy} chosen={l===level} onPress={()=>{setLevel(l);setSelected(null);setChoice(null);setMessage('')}}>{l.toUpperCase()}</Button>)}
 {item?<Card><Label kind="heading">{item.title}</Label><Label>{item.theory}</Label><Label kind="accent">{item.example}</Label><Label kind="heading">{item.question}</Label>
 {item.options.map((o,i)=><Button key={i} disabled={busy} chosen={choice===i} onPress={()=>void answer(i)}>{o}</Button>)}
 {choice!==null&&choice!==item.answer&&<Label>{t('Try again','Qayta urinib ko‘ring')}</Label>}
 {!!message&&<Label>{message}</Label>}
 <Button disabled={busy} onPress={()=>{setSelected(null);setChoice(null);setMessage('')}}>{t('Lesson list','Darslar ro‘yxati')}</Button></Card>:list.map(g=><Card key={g.id}><Label kind="heading">{g.title}</Label><Label>{done.has(g.id)?t('Completed','Bajarildi'):t('Not completed','Bajarilmagan')}</Label><Button onPress={()=>{setSelected(g.id);setChoice(null);setMessage('')}}>{t('Open lesson','Darsni ochish')}</Button></Card>)}
 </Screen>;
}

import { useState } from 'react';
import { Button, Card, Label, Meter, Screen, LoadState } from '../src/components/ui';
import { vocabulary, type Word } from '../src/english/vocabulary';
import { vocabularyEntries, rateWord } from '../src/database/learning';
import { useLocalData } from '../src/hooks/useLocalData';
import { localDay } from '../src/utils/calendar';
import { useTheme } from '../src/theme';

export default function Vocabulary(){
 const {t}=useTheme();
 const [level,setLevel]=useState<Word['level']>('a1');
 const [revealed,setRevealed]=useState(false);
 const [busy,setBusy]=useState(false);
 const [error,setError]=useState('');
 const [seen,setSeen]=useState<string[]>([]);
 const progress=useLocalData(vocabularyEntries);
 const words=vocabulary.filter(w=>w.level===level);
 const reviews=new Map(progress.data?.map(r=>[r.id,r]));
 const due=words.filter(w=>!reviews.has(w.id)||reviews.get(w.id)!.due<=localDay());
 const current=due.find(w=>!seen.includes(w.id));
 async function rate(recalled:boolean){
  if(!current||busy||!revealed)return;
  setBusy(true);setError('');
  try{await rateWord(current.id,recalled);setSeen(s=>[...s,current.id]);setRevealed(false);progress.retry();}
  catch{setError(t('Could not save review','Takrorlash natijasi saqlanmadi'));}
  finally{setBusy(false);}
 }
 return <Screen title={t('Vocabulary','Lug‘at')} back>
  <Card><Label kind="heading">{t('Spaced repetition','Oraliqli takrorlash')}</Label><Label>{t('Review words when they are due.','So‘zlarni belgilangan vaqtda takrorlang.')}</Label></Card>
  {(['a1','a2','b1','b2'] as const).map(l=><Button key={l} disabled={busy} chosen={level===l} onPress={()=>{setLevel(l);setSeen([]);setRevealed(false);setError('')}}>{l.toUpperCase()}</Button>)}
  <LoadState {...progress}/>
  {progress.data&&!progress.error&&<>
   <Card><Label>{t('Reviewed at least once','Kamida bir marta takrorlangan')}: {words.filter(w=>reviews.has(w.id)).length} / {words.length}</Label><Meter value={words.filter(w=>reviews.has(w.id)).length} total={words.length}/><Label>{t('Due in this session','Ushbu mashg‘ulotda qolgan')}: {due.filter(w=>!seen.includes(w.id)).length}</Label></Card>
   {current?<Card><Label kind="accent">{level.toUpperCase()}</Label><Label kind="title">{current.word}</Label>{revealed&&<Label kind="heading">{current.translation}</Label>}
   <Button disabled={busy} onPress={()=>setRevealed(v=>!v)}>{revealed?t('Hide translation','Tarjimani yashirish'):t('Reveal translation','Tarjimani ko‘rish')}</Button>
   {revealed&&<><Button disabled={busy} onPress={()=>void rate(false)}>{t('Again','Yana takrorlash')}</Button><Button chosen disabled={busy} onPress={()=>void rate(true)}>{t('Remembered','Esladim')}</Button></>}
   </Card>:<Card><Label kind="heading">{t('Session complete','Mashg‘ulot tugadi')}</Label><Button onPress={()=>{setSeen([]);setRevealed(false);progress.retry()}}>{t('Check due words again','Takrorlashni tekshirish')}</Button></Card>}
  </>}
  {!!error&&<Label>{error}</Label>}
 </Screen>;
}

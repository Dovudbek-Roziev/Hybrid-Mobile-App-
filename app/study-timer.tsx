import { useEffect, useRef, useState } from 'react';
import { Button, Card, Label, Screen, Meter } from '../src/components/ui';
import { useTheme } from '../src/theme';
import { addSession } from '../src/database/learning';
import { getDailyTasks, setDailyTask, type DailyTask } from '../src/storage';
import { localDay } from '../src/utils/calendar';

const plan = [{id:'programming',minutes:25},{id:'practice',minutes:15},{id:'english',minutes:15},{id:'review',minutes:5}] as const;
export default function StudyTimer(){
 const {t}=useTheme();
 const names={programming:t('Programming','Dasturlash'),practice:t('Practice','Mashqlar'),english:t('English','Ingliz tili'),review:t('Review','Takrorlash')};
 const [task,setTask]=useState<DailyTask>('programming');
 const [done,setDone]=useState<DailyTask[]>([]);
 const [day,setDay]=useState(localDay);
 const [elapsed,setElapsed]=useState(0);
 const [started,setStarted]=useState<number|null>(null);
 const [now,setNow]=useState(Date.now);
 const [busy,setBusy]=useState(false);
 const [error,setError]=useState('');
 const lock=useRef(false);
 const session=useRef('');
 const target=plan.find(p=>p.id===task)!.minutes*60;
 const seconds=Math.min(target,elapsed+(started===null?0:Math.max(0,Math.floor((now-started)/1000))));
 useEffect(()=>{let live=true;getDailyTasks(day).then(x=>{if(live)setDone(x)}).catch(e=>{if(live)setError(String(e))});return()=>{live=false}},[day]);
 useEffect(()=>{const timer=setInterval(()=>{setNow(Date.now());if(!session.current)setDay(localDay());},500);return()=>clearInterval(timer)},[]);
 useEffect(()=>{if(started!==null&&seconds>=target){setElapsed(target);setStarted(null);}},[seconds,started,target]);
 function start(){if(!session.current)session.current=Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);const n=Date.now();setNow(n);setStarted(n);}
 function pause(){if(started!==null)setElapsed(Math.min(target,elapsed+Math.max(0,Math.floor((Date.now()-started)/1000))));setStarted(null);}
 async function save(){
 if(lock.current||!session.current||seconds<=0)return;
 lock.current=true;setBusy(true);setError('');
 try{await addSession(session.current,day,task,seconds);if(seconds>=target){await setDailyTask(day,task,true);setDone(d=>d.includes(task)?d:[...d,task]);}session.current='';setElapsed(0);setStarted(null);setDay(localDay());}
 catch(e){setError(String(e));}finally{lock.current=false;setBusy(false);}
 }
 const remaining=target-seconds;
 return <Screen title={t('Study timer','O‘qish taymeri')} back>
 <Card><Label kind="heading">{day} · {done.length}/4</Label><Meter value={done.length} total={4}/>
 {plan.map(p=><Button key={p.id} chosen={task===p.id} disabled={!!session.current||busy} onPress={()=>setTask(p.id)}>{done.includes(p.id)?'✓ ':''}{names[p.id]} · {p.minutes} min</Button>)}</Card>
 <Card><Label kind="heading">{names[task]}</Label><Label kind="title">{Math.floor(remaining/60)}:{String(remaining%60).padStart(2,'0')}</Label><Meter value={seconds} total={target}/>
 {started===null?<Button disabled={busy||remaining===0} onPress={start}>{seconds?t('Resume','Davom etish'):t('Start','Boshlash')}</Button>:<Button onPress={pause}>{t('Pause','Pauza')}</Button>}
 <Button disabled={busy||started!==null||seconds===0} onPress={()=>void save()}>{t('Save session','Vaqtni saqlash')}</Button>
 <Label>{t('Pause and save before leaving this screen. Unsaved time is not retained.','Chiqishdan oldin pauza qiling va saqlang. Saqlanmagan vaqt yo‘qoladi.')}</Label></Card>
 {!!error&&<Label>{error}</Label>}
 </Screen>;
}

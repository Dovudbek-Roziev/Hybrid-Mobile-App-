import { useState, useRef } from 'react';
import { Button, Card, Label, Screen, Meter, LoadState } from '../src/components/ui';
import { useTheme } from '../src/theme';
import { projects } from '../src/projects/catalog';
import { projectEntries, setMilestone } from '../src/database/learning';
import { useLocalData } from '../src/hooks/useLocalData';

export default function Projects(){
 const {t}=useTheme();
 const progress=useLocalData(projectEntries);
 const [selected,setSelected]=useState<string|null>(null);
 const [busy,setBusy]=useState(false);
 const [error,setError]=useState('');
 const lock=useRef(false);
 const done=new Set((progress.data??[]).map(r=>r.id+':'+r.milestone));
 const count=(p:typeof projects[number])=>p.milestones.filter(m=>done.has(p.id+':'+m.id)).length;
 const project=projects.find(p=>p.id===selected);
 async function toggle(id:string,milestone:string){
  if(lock.current)return;
  lock.current=true;setBusy(true);setError('');
  try{await setMilestone(id,milestone,!done.has(id+':'+milestone));progress.retry();}
  catch(e){setError(String(e));}
  finally{lock.current=false;setBusy(false);}
 }
 return <Screen title={t('Guided Projects','Amaliy loyihalar')} back>
 <LoadState {...progress}/>
 {!!error&&<Label>{error}</Label>}
 {project?<><Button onPress={()=>setSelected(null)}>{t('All projects','Barcha loyihalar')}</Button>
 <Card><Label kind="title">{project.title}</Label><Label>{project.stack}</Label><Label>{project.brief}</Label><Label kind="heading">{t('Architecture','Arxitektura')}</Label><Label>{project.architecture}</Label><Meter value={count(project)} total={project.milestones.length}/><Label>{Math.round(count(project)*100/project.milestones.length)}%</Label></Card>
 <Card><Label kind="heading">{t('Requirements','Talablar')}</Label>{project.requirements.map((r,i)=><Label key={i}>{i+1}. {r}</Label>)}</Card>
 <Card><Label kind="heading">{t('Acceptance criteria','Qabul mezonlari')}</Label>{project.acceptance.map((r,i)=><Label key={i}>{i+1}. {r}</Label>)}</Card>
 <Card><Label kind="heading">{t('Milestones','Vazifalar')}</Label>{project.milestones.map(m=><Button key={m.id} disabled={busy||progress.loading||!!progress.error} chosen={done.has(project.id+':'+m.id)} onPress={()=>void toggle(project.id,m.id)}>{done.has(project.id+':'+m.id)?'✓ ':'○ '}{m.title}</Button>)}</Card>
 <Card><Label kind="heading">{t('Review criteria','Baholash mezonlari')}</Label>{project.rubric.map((r,i)=><Label key={i}>{i+1}. {r}</Label>)}<Label>{t('Self-assessment: checklist completion does not verify code quality.','Mustaqil baholash: vazifalarni belgilash kod sifatini tasdiqlamaydi.')}</Label></Card></>:<>
 <Card><Label kind="heading">{t('Completed projects','Tugallangan loyihalar')}</Label><Label>{projects.filter(p=>count(p)===p.milestones.length).length} / {projects.length}</Label><Meter value={projects.reduce((n,p)=>n+count(p),0)} total={projects.reduce((n,p)=>n+p.milestones.length,0)}/></Card>
 {projects.map(p=><Card key={p.id}><Label kind="heading">{p.month}. {p.title}</Label><Label>{p.stack}</Label><Label>{count(p)} / {p.milestones.length}</Label><Meter value={count(p)} total={p.milestones.length}/><Button onPress={()=>setSelected(p.id)}>{t('Open project','Loyihani ochish')}</Button></Card>)}</>}
 </Screen>;
}

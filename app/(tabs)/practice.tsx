import { useState } from 'react';
import { router } from 'expo-router';
import { Button, Card, Label, Screen, Field, Meter, LoadState } from '../../src/components/ui';
import { useTheme } from '../../src/theme';
import { challenges, type Difficulty } from '../../src/challenges/catalog';
import { challengeEntries } from '../../src/database/learning';
import { useLocalData } from '../../src/hooks/useLocalData';

export default function Practice() {
  const {t} = useTheme();
  const [query,setQuery] = useState('');
  const [level,setLevel] = useState<Difficulty | 'all'>('all');
  const progress = useLocalData(challengeEntries);
  const done = new Set(progress.data?.filter(x=>x.completed_at).map(x=>x.id));
  const visible = challenges.filter(x=>(level==='all'||x.difficulty===level)&& (x.title+' '+x.task).toLowerCase().includes(query.trim().toLowerCase()));
  const labels = {all:t('All','Barchasi'),easy:t('Easy','Oson'),medium:t('Medium','O‘rta'),hard:t('Hard','Qiyin')};
  return <Screen title={t('Practice','Amaliyot')}>
    <Card><Label kind="heading">Coding Challenges</Label><Label>{done.size} / {challenges.length}</Label><Meter value={done.size} total={challenges.length}/></Card>
    <LoadState {...progress}/>
    <Field value={query} onChangeText={setQuery} placeholder={t('Search challenges','Mashq qidirish')}/>
    {(['all','easy','medium','hard'] as const).map(x=><Button key={x} chosen={level===x} onPress={()=>setLevel(x)}>{labels[x]}</Button>)}
    {visible.length===0 && <Label>{t('No matches','Mashq topilmadi')}</Label>}
    {visible.map(x=><Card key={x.id}><Label kind="heading">{x.title}</Label><Label>{labels[x.difficulty]} · {done.has(x.id)?t('Completed','Bajarildi'):t('Not completed','Bajarilmagan')}</Label><Label>{x.task}</Label><Button onPress={()=>router.push({pathname:'/challenge',params:{id:x.id}})}>{t('Open challenge','Mashqni ochish')}</Button></Card>)}
    <Button onPress={()=>router.push('/quiz')}>{t('Weekly quiz','Haftalik test')}</Button>
    <Button onPress={()=>router.push('/catalog')}>{t('Choose a lesson','Dars tanlash')}</Button>
  </Screen>;
}

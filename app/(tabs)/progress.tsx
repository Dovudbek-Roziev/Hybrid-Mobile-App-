import { router } from 'expo-router';
import { Button, Card, Label, Screen, Meter, LoadState } from '../../src/components/ui';
import { useTheme } from '../../src/theme';
import { useLocalData } from '../../src/hooks/useLocalData';
import { loadAnalytics } from '../../src/services/analytics';

export default function Progress(){
 const {t}=useTheme();
 const state=useLocalData(loadAnalytics);
 const a=state.data;
 return <Screen title={t('Progress','Natijalar')}>
 <Button onPress={()=>router.push('/study-timer')}>{t('Study timer','O‘qish taymeri')}</Button>
 <LoadState {...state}/>
 {a&&<>
 <Card><Label kind="heading">{t('Study time','O‘qish vaqti')}</Label><Label kind="title">{Math.floor(a.totalSeconds/3600)}h {Math.floor(a.totalSeconds%3600/60)}m</Label><Label>{t('Current streak','Joriy ketma-ketlik')}: {a.streak.current}</Label><Label>{t('Longest streak','Eng uzun ketma-ketlik')}: {a.streak.longest}</Label></Card>
 <Card><Label kind="heading">{t('Last seven days','Oxirgi yetti kun')}</Label>{a.week.map(d=><Card key={d.day}><Label>{d.day} · {Math.floor(d.seconds/60)} min · {d.tasks}/4</Label><Meter value={Math.min(d.seconds,3600)} total={3600}/></Card>)}</Card>
 {([[t('Lessons','Darslar'),a.lessons],[t('Challenges','Mashqlar'),a.challenges],[t('English exercises','Ingliz tili mashqlari'),a.exercises],[t('Grammar','Grammatika'),a.grammar],[t('Reading','O‘qish'),a.reading],[t('Words reviewed','Takrorlangan so‘zlar'),a.vocabulary],[t('Projects','Loyihalar'),a.projects]] as const).map(([name,p])=><Card key={name}><Label kind="heading">{name}</Label><Label>{p.done}/{p.total}</Label><Meter value={p.done} total={p.total}/></Card>)}
 <Card><Label kind="heading">{t('Exam statistics','Imtihon statistikasi')}</Label><Label>{t('Attempts','Urinishlar')}: {a.exams.count}</Label><Label>{t('Best','Eng yuqori')}: {a.exams.best??'—'}</Label><Label>{t('Average','O‘rtacha')}: {a.exams.average??'—'}</Label><Button onPress={()=>router.push('/exam-history')}>{t('Exam history','Imtihonlar tarixi')}</Button></Card>
 </>}
 </Screen>;
}

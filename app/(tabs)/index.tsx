import { Redirect, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';
import { Button, Card, Label, LoadState, Meter, Screen } from '../../src/components/ui';
import { lessons, months } from '../../src/curriculum';
import { exercises } from '../../src/english';
import { dashboardData } from '../../src/features/dashboard';
import { useLocalData } from '../../src/hooks/useLocalData';
import { useTheme } from '../../src/theme';
import { taskNames } from '../../src/features/tasks';

export default function Home() {
  const state = useLocalData(dashboardData);
  const { data } = state;
  const { t, preferences, colors } = useTheme();
  if (!data || state.error) return <Screen title="Personal Engineering Academy"><LoadState {...state}/></Screen>;
  if (!data.profile) return <Redirect href="/onboarding"/>;
  const { next } = data;
  const goal = Object.values(preferences.minutes).reduce((sum, minutes) => sum + minutes, 0);
  return <Screen title={t('Hello', 'Salom') + ', ' + data.profile.firstName}>
    <Card>
      <View style={{flexDirection:'row',alignItems:'center',gap:10}}><Ionicons name="school-outline" size={28} color={colors.primary}/><Label kind="heading">Personal Engineering Academy</Label></View>
      <Label kind="accent">{next ? t('Month ', '') + next.month + t(' / 12', '-oy / 12') + ' · ' + t('Week', 'Hafta') + ' ' + next.week : t('Roadmap complete', 'O‘quv rejasi yakunlandi')}</Label>
      <Label kind="heading">{next ? months[next.month - 1] : t('Review your lessons', 'Darslaringizni takrorlang')}</Label>
      {next && <Label>{next.title} · {next.minutes} {t('min', 'daq')}</Label>}
      <Button chosen onPress={() => next ? router.push({pathname: '/lesson', params: {id: next.id}}) : router.push('/catalog')}>
        {next ? t('Continue learning', 'O‘qishni davom ettirish') : t('Open academy', 'Akademiyani ochish')}
      </Button>
    </Card>
    <Card>
      <Label kind="heading">{t('Today', 'Bugun')} · {goal} {t('min', 'daq')}</Label>
      {taskNames.map(task => <Label key={task.id}>
        {data.tasks.includes(task.id) ? '✓' : '○'} {t(task.en, task.uz)} · {preferences.minutes[task.id]} {t('min', 'daq')}
      </Label>)}
      <Meter value={data.tasks.reduce((sum, task) => sum + (preferences.minutes[task] ?? 0), 0)} total={goal}/>
      <Button onPress={() => router.push('/daily')}>{t('Open daily plan', 'Kunlik rejani ochish')}</Button>
    </Card>
    <View style={{flexDirection:'row', gap:10, flexWrap:'wrap'}}>
      <View style={{flexGrow:1}}><Card><Label kind="heading">{data.studyMinutes}</Label><Label>{t('Study minutes', 'O‘qilgan daqiqalar')}</Label></Card></View>
      <View style={{flexGrow:1}}><Card><Label kind="heading">{data.streak.current}</Label><Label>{t('Day streak', 'Ketma-ket o‘qilgan kun')}</Label></Card></View>
    </View>
    <Card>
      <Label>{t('Programming', 'Dasturlash')} · {data.lessonCount}/{lessons.length}</Label>
      <Meter value={data.lessonCount} total={lessons.length}/>
      <Label>{t('English', 'Ingliz tili')} · {data.englishCount}/{exercises.length}</Label>
      <Meter value={data.englishCount} total={exercises.length}/>
    </Card>
    <Card><Label kind="heading">{t('Quick access','Tezkor kirish')}</Label>
      <Button onPress={()=>router.push('/study-timer')}>{t('Study timer','O‘qish taymeri')}</Button>
      <Button onPress={()=>router.push('/projects')}>{t('Guided projects','Amaliy loyihalar')}</Button>
      <Button onPress={()=>router.push('/exam')}>{t('Exams','Imtihonlar')}</Button>
      <Button onPress={()=>router.push('/exam-history')}>{t('Exam history','Imtihonlar tarixi')}</Button>
    </Card>
    <Button onPress={() => router.push('/quiz')}>{data.quizTaken ? t('Retake weekly quiz', 'Haftalik testni qayta topshirish') : t('Take weekly quiz', 'Haftalik testni boshlash')}</Button>
    <Button onPress={() => router.push('/settings')}>{t('Settings', 'Sozlamalar')}</Button>
  </Screen>;
}

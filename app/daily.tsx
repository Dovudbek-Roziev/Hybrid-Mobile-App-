import { useState } from 'react';
import { router } from 'expo-router';
import { Button, Card, Label, LoadState, Meter, Screen } from '../src/components/ui';
import { lessons } from '../src/curriculum/catalog';
import { taskNames } from '../src/features/tasks';
import { useLocalData } from '../src/hooks/useLocalData';
import { completedLessons, getDailyTasks, setDailyTask, type DailyTask } from '../src/database/storage';
import { useTheme } from '../src/theme';
import { localDay } from '../src/utils/calendar';

async function loadPlan() {
  const day = localDay();
  const [tasks, completed] = await Promise.all([getDailyTasks(day), completedLessons()]);
  const done = new Set(completed);
  return {day, tasks, next: lessons.find(lesson => !done.has(lesson.id))};
}

export default function DailyPlan() {
  const {preferences, t} = useTheme();
  const state = useLocalData(loadPlan);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  async function toggle(task: DailyTask, complete: boolean) {
    if (busy) return;
    setBusy(true);
    setError(false);
    try {
      await setDailyTask(localDay(), task, complete);
      state.retry();
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }
  const plan = state.data;
  const next = plan?.next;
  const rest = preferences.rest.includes(new Date().getDay());
  const total = Object.values(preferences.minutes).reduce((sum, minutes) => sum + minutes, 0);
  const done = plan?.tasks.reduce((sum, task) => sum + (preferences.minutes[task] ?? 0), 0) ?? 0;
  return <Screen title={t('Daily plan', 'Kunlik reja')} back>
    <LoadState {...state}/>
    {plan && !state.error && <>
      <Card>
        <Label kind="accent">{plan.day}</Label>
        <Label kind="heading">{rest ? t('Rest day', 'Dam olish kuni') : done + ' / ' + total + ' ' + t('min planned', 'daq rejalashtirilgan')}</Label>
        <Meter value={done} total={total}/>
        {taskNames.map(task => <Button key={task.id} disabled={busy} chosen={plan.tasks.includes(task.id)} onPress={() => toggle(task.id, !plan.tasks.includes(task.id))}>
          {plan.tasks.includes(task.id) ? '✓ ' : '○ '}{t(task.en, task.uz)} · {preferences.minutes[task.id]} {t('min', 'daq')}
        </Button>)}
        {error && <Label>{t('Could not save. Try again.', 'Saqlab bo‘lmadi. Qayta urinib ko‘ring.')}</Label>}
      </Card>
      <Button chosen onPress={() => next ? router.push({pathname:'/lesson', params:{id:next.id}}) : router.push('/catalog')}>{t('Continue programming', 'Dasturlashni davom ettirish')}</Button>
      <Button onPress={() => router.push('/practice')}>{t('Open practice', 'Amaliyotni ochish')}</Button>
      <Button onPress={() => router.push('/english')}>{t('Open English Academy', 'Ingliz tili akademiyasini ochish')}</Button>
    </>}
  </Screen>;
}

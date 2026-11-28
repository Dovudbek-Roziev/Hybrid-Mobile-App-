import { useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { Button, Card, Label, Meter, Screen } from '../src/components/ui';
import { CodeBlock } from '../src/components/CodeBlock';
import { lessons } from '../src/curriculum';
import { lessonQuestions, type Lesson } from '../src/curriculum/model';
import { completeLesson, completedLessons } from '../src/storage';
import { useLocalData } from '../src/hooks/useLocalData';
import { useTheme } from '../src/theme';

function LessonContent({lesson, next, position}: {lesson: Lesson; next?: Lesson; position: number}) {
  const {t, preferences} = useTheme();
  const completion = useLocalData(completedLessons);
  const [selected, setSelected] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const quiz = lessonQuestions(lesson);
  const alreadyDone = saved || completion.data?.includes(lesson.id);
  const allSelected = quiz.every((_, index) => selected[index] !== undefined);
  async function finish() {
    if (!allSelected || busy) return;
    setChecked(true);
    if (!quiz.every((question, index) => question.correct === selected[index])) return;
    setBusy(true);
    setError(false);
    try { await completeLesson(lesson.id); setSaved(true); }
    catch { setError(true); }
    finally { setBusy(false); }
  }
  const level = {easy: t('Easy', 'Oson'), medium: t('Medium', 'O‘rta'), hard: t('Hard', 'Qiyin')}[lesson.difficulty];
  return <Screen title={lesson.title} back>
    <Label kind="accent">
      {t('Month', 'Oy')} {lesson.month} · {t('Week', 'Hafta')} {lesson.week} · {level} · {lesson.minutes} {t('min', 'daq')}
    </Label>
    <Meter value={position} total={lessons.length}/>
    {lesson.goal && <Card><Label kind="heading">{t('Learning objective', 'Dars maqsadi')}</Label><Label>{lesson.goal}</Label></Card>}
    <Label kind="heading">{t('Theory', 'Nazariya')}</Label><Label>{preferences.language === 'en' ? lesson.englishBody ?? lesson.body : lesson.body}</Label>
    {lesson.plain && <Card><Label kind="heading">{t('In simple terms', 'Sodda tushuntirish')}</Label><Label>{lesson.plain}</Label></Card>}
    {lesson.example && <Card><Label kind="heading">{t('In practice', 'Hayotiy misol')}</Label><Label>{lesson.example}</Label></Card>}
    <CodeBlock code={lesson.code}/>
    {lesson.mistake && <Card><Label kind="heading">{t('Common mistake', 'Ko‘p uchraydigan xato')}</Label><Label>{lesson.mistake}</Label></Card>}
    <Card>
      <Label kind="heading">{t('Practice task', 'Amaliy vazifa')}</Label>
      <Label>{lesson.practice ?? t('Change one input in the example. Predict the result and explain which line caused the change.', 'Kod misolida bitta kirish qiymatini o‘zgartiring. Natijani taxmin qiling va qaysi qator ta’sir qilganini tushuntiring.')}</Label>
    </Card>
    <Label kind="heading">{t('Knowledge check', 'Bilimni tekshirish')}</Label>
    {quiz.map((question, index) => <Card key={index}>
      <Label kind="heading">{question.question}</Label>
      {question.choices.map((option, i) => <Button key={i} disabled={busy} chosen={selected[index] === i} onPress={() => {setSelected(old => ({...old, [index]: i})); setChecked(false);}}>{option}</Button>)}
      {checked && <>
        <Label kind="accent">{question.correct === selected[index] ? t('Correct', 'To‘g‘ri') : t('Correct answer', 'To‘g‘ri javob') + ' · ' + question.choices[question.correct]}</Label>
        <Label>{question.explanation}</Label>
      </>}
    </Card>)}
    {lesson.reflection && <Card><Label kind="heading">{t('Summary', 'Xulosa')}</Label><Label>{lesson.reflection}</Label></Card>}
    {alreadyDone && <Label kind="accent">{t('Completed and saved offline', 'Bajarildi va qurilmada saqlandi')}</Label>}
    {error && <Label>{t('Could not save. Try again.', 'Saqlab bo‘lmadi. Qayta urinib ko‘ring.')}</Label>}
    <Button chosen disabled={!allSelected || busy} onPress={finish}>{busy ? t('Saving…', 'Saqlanmoqda…') : alreadyDone ? t('Check answers', 'Javoblarni tekshirish') : t('Complete lesson', 'Darsni yakunlash')}</Button>
    {alreadyDone && <Button onPress={() => next ? router.replace({pathname: '/lesson', params: {id: next.id}}) : router.replace('/catalog')}>
      {next ? t('Next lesson', 'Keyingi dars') : t('Back to academy', 'Akademiyaga qaytish')}
    </Button>}
  </Screen>;
}

export default function LessonRoute() {
  const {id} = useLocalSearchParams<{id: string}>();
  const {t} = useTheme();
  const index = lessons.findIndex(lesson => lesson.id === id);
  const lesson = lessons[index];
  return lesson ? <LessonContent key={lesson.id} lesson={lesson} next={lessons[index + 1]} position={index + 1}/> :
    <Screen title={t('Lesson unavailable', 'Dars topilmadi')} back><Button onPress={() => router.replace('/catalog')}>{t('Open academy', 'Akademiyani ochish')}</Button></Screen>;
}

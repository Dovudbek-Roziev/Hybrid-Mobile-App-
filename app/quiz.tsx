import { useRef, useState } from 'react';
import { router } from 'expo-router';
import { Button, Card, Label, Screen } from '../src/components/ui';
import { saveQuizAttempt } from '../src/database/storage';
import { weeklyQuiz } from '../src/exams/weekly-quiz';
import { useTheme } from '../src/theme';

export default function Quiz() {
  const { t, preferences } = useTheme();
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [score, setScore] = useState<number | null>(null);
  const [busy, setBusy] = useState(false);
  const [failed, setFailed] = useState(false);
  const locked = useRef(false);
  const ready = weeklyQuiz.every(
    (question) => answers[question.id] !== undefined,
  );
  const submitted = score !== null;

  async function submit() {
    if (!ready || locked.current || submitted) return;
    locked.current = true;
    setBusy(true);
    setFailed(false);
    try {
      const correct = weeklyQuiz.filter(
        (question) => answers[question.id] === question.answer,
      ).length;
      await saveQuizAttempt('js-week-1', correct, weeklyQuiz.length);
      setScore(correct);
    } catch {
      setFailed(true);
    } finally {
      setBusy(false);
      locked.current = false;
    }
  }

  return (
    <Screen title={t('Weekly quiz', 'Haftalik test')} back>
      <Label kind="accent">{t('Week 1', '1-hafta')} · JavaScript</Label>
      <Label>
        {weeklyQuiz.length} {t('questions', 'ta savol')}
      </Label>
      {submitted && (
        <Card>
          <Label kind="heading">
            {t('Score', 'Natija')} {score}/{weeklyQuiz.length}
          </Label>
          <Label>
            {t(
              'Your attempt was saved on this device.',
              'Natijangiz qurilmada saqlandi.',
            )}
          </Label>
        </Card>
      )}
      {weeklyQuiz.map((question, index) => {
        const options =
          preferences.language === 'uz'
            ? (question.optionsUz ?? question.options)
            : question.options;
        return (
          <Card key={question.id}>
            <Label kind="heading">
              {index + 1}. {t(question.question, question.questionUz)}
            </Label>
            {options.map((option, choice) => (
              <Button
                key={choice}
                disabled={busy || submitted}
                chosen={
                  submitted
                    ? choice === question.answer
                    : answers[question.id] === choice
                }
                onPress={() =>
                  setAnswers((old) => ({ ...old, [question.id]: choice }))
                }
              >
                {option}
              </Button>
            ))}
            {submitted && (
              <>
                <Label kind="accent">
                  {answers[question.id] === question.answer
                    ? t('Correct', 'To‘g‘ri')
                    : t('Incorrect', 'Xato')}
                </Label>
                <Label>
                  {t('Your answer', 'Javobingiz')} ·{' '}
                  {options[answers[question.id]]}
                </Label>
                <Label>
                  {t('Correct answer', 'To‘g‘ri javob')} ·{' '}
                  {options[question.answer]}
                </Label>
                <Label>{t(question.explanation, question.explanationUz)}</Label>
              </>
            )}
          </Card>
        );
      })}
      {failed && (
        <Label>
          {t(
            'Could not save the result. Try again.',
            'Natijani saqlab bo‘lmadi. Qayta urinib ko‘ring.',
          )}
        </Label>
      )}
      {submitted ? (
        <Button onPress={() => router.replace('/progress')}>
          {t('View my progress', 'Natijalarimni ko‘rish')}
        </Button>
      ) : (
        <Button disabled={!ready || busy} onPress={() => void submit()}>
          {busy
            ? t('Saving…', 'Saqlanmoqda…')
            : t('Submit answers', 'Javoblarni topshirish')}
        </Button>
      )}
    </Screen>
  );
}

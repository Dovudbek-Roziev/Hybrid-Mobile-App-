import { router } from 'expo-router';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Button, Card, Label, Screen, Meter } from '../src/components/ui';
import { useTheme } from '../src/theme';
import { lessons } from '../src/curriculum/catalog';
import {
  buildExam,
  gradeExam,
  examRules,
  type ExamKind,
  type ExamQuestion,
} from '../src/exams/engine';
import { saveExam } from '../src/exams/storage';
import { examDeadline, examSecondsRemaining } from '../src/exams/options';

export default function Exam() {
  const { t, preferences } = useTheme();
  const [kind, setKind] = useState<ExamKind>('weekly');
  const [scope, setScope] = useState('1');
  const [questions, setQuestions] = useState<ExamQuestion[]>([]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [index, setIndex] = useState(0);
  const [timed, setTimed] = useState(true);
  const [passScore, setPassScore] = useState(preferences.pass);
  const [deadline, setDeadline] = useState<number | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [busy, setBusy] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState('');
  const attempt = useRef('');
  const saving = useRef(false);
  const result = gradeExam(questions, answers, passScore);
  const persist = useCallback(async () => {
    if (saving.current || !questions.length || saved) return;
    saving.current = true;
    setBusy(true);
    setError('');
    try {
      await saveExam(
        attempt.current,
        kind,
        scope,
        questions,
        answers,
        passScore,
      );
      setSaved(true);
    } catch {
      setError(
        t(
          'Could not save the result. Try again.',
          'Natijani saqlab bo‘lmadi. Qayta urinib ko‘ring.',
        ),
      );
    } finally {
      saving.current = false;
      setBusy(false);
    }
  }, [kind, scope, questions, answers, passScore, saved, t]);
  useEffect(() => {
    if (deadline === null || finished) return;
    const tick = () => {
      const seconds = examSecondsRemaining(deadline);
      setRemaining(seconds);
      if (seconds === 0) setFinished(true);
    };
    tick();
    const timer = setInterval(tick, 250);
    return () => clearInterval(timer);
  }, [deadline, finished]);
  useEffect(() => {
    if (finished && !saved) void persist();
  }, [finished, persist, saved]);
  const kinds: ExamKind[] = [
    'lesson',
    'weekly',
    'monthly',
    'quarterly',
    'final',
  ];
  const names = {
    lesson: t('Lesson', 'Dars'),
    weekly: t('Weekly', 'Haftalik'),
    monthly: t('Monthly', 'Oylik'),
    quarterly: t('Quarterly', 'Choraklik'),
    final: t('Final', 'Yakuniy'),
  };
  function start() {
    const q = buildExam(kind, scope);
    if (!q.length) {
      setError(t('No questions', 'Savollar topilmadi'));
      return;
    }
    attempt.current =
      Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
    setQuestions(q);
    setAnswers({});
    setIndex(0);
    setSaved(false);
    setFinished(false);
    setError('');
    setPassScore(preferences.pass);
    const now = Date.now();
    const end = examDeadline(examRules[kind].minutes, timed, now);
    setRemaining(examSecondsRemaining(end, now));
    setDeadline(end);
  }
  const q = questions[index];
  return (
    <Screen title={t('Exams', 'Imtihonlar')} back>
      {!questions.length ? (
        <Card>
          <Label kind="heading">{t('Choose exam', 'Imtihonni tanlang')}</Label>
          <Button onPress={() => router.push('/exam-history')}>
            {t('Exam history', 'Imtihonlar tarixi')}
          </Button>
          {kinds.map((k) => (
            <Button
              key={k}
              chosen={kind === k}
              onPress={() => {
                setKind(k);
                setScope(k === 'lesson' ? lessons[0].id : '1');
              }}
            >
              {names[k]}
            </Button>
          ))}
          {kind !== 'final' && (
            <>
              <Label>
                {t('Scope', 'Bo‘lim')}: {scope}
              </Label>
              {kind === 'lesson' ? (
                <>
                  <Button
                    onPress={() =>
                      setScope(
                        lessons[
                          Math.max(
                            0,
                            lessons.findIndex((l) => l.id === scope) - 1,
                          )
                        ].id,
                      )
                    }
                  >
                    {t('Previous lesson', 'Oldingi dars')}
                  </Button>
                  <Label>{lessons.find((l) => l.id === scope)?.title}</Label>
                  <Button
                    onPress={() =>
                      setScope(
                        lessons[
                          Math.min(
                            lessons.length - 1,
                            lessons.findIndex((l) => l.id === scope) + 1,
                          )
                        ].id,
                      )
                    }
                  >
                    {t('Next lesson', 'Keyingi dars')}
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    onPress={() =>
                      setScope(String(Math.max(1, Number(scope) - 1)))
                    }
                  >
                    −
                  </Button>
                  <Button
                    onPress={() =>
                      setScope(
                        String(
                          Math.min(
                            kind === 'weekly'
                              ? 52
                              : kind === 'monthly'
                                ? 12
                                : 4,
                            Number(scope) + 1,
                          ),
                        ),
                      )
                    }
                  >
                    +
                  </Button>
                </>
              )}
            </>
          )}
          <Label>
            {t('Pass score', 'O‘tish bali')} {preferences.pass}/100 ·{' '}
            {t('Up to', 'Ko‘pi bilan')} {examRules[kind].count}{' '}
            {t('questions', 'savol')}
          </Label>
          <Button chosen={timed} onPress={() => setTimed((value) => !value)}>
            {timed
              ? t('Timer on', 'Taymer yoqilgan') +
                ' · ' +
                examRules[kind].minutes +
                ' ' +
                t('min', 'daq')
              : t('Timer off', 'Taymer o‘chirilgan')}
          </Button>
          <Button onPress={start}>{t('Start', 'Boshlash')}</Button>
        </Card>
      ) : finished ? (
        <Card>
          <Label kind="title">{result.score}/100</Label>
          <Label>
            {t('Pass score', 'O‘tish bali')} {passScore}/100
          </Label>
          <Label>
            {result.correct}/{result.total} ·{' '}
            {result.passed
              ? t('Passed', 'O‘tdingiz')
              : t('Not passed', 'O‘tmadingiz')}
          </Label>
          <Label>
            {saved
              ? t('Saved', 'Saqlandi')
              : busy
                ? t('Saving', 'Saqlanmoqda')
                : t('Not saved', 'Saqlanmadi')}
          </Label>
          {!saved && !busy && (
            <Button onPress={() => void persist()}>
              {t('Retry save', 'Qayta saqlash')}
            </Button>
          )}
          {questions.map((item) => (
            <Card key={item.id}>
              <Label>{item.question}</Label>
              <Label>
                {t('Your answer', 'Javobingiz')}:{' '}
                {item.choices[answers[item.id]] ?? '—'}
              </Label>
              <Label>
                {t('Correct', 'To‘g‘ri')}: {item.choices[item.correct]}
              </Label>
              <Label>{item.explanation}</Label>
            </Card>
          ))}
          <Button
            disabled={!saved || busy}
            onPress={() => {
              setQuestions([]);
              setDeadline(null);
              setRemaining(null);
              setFinished(false);
            }}
          >
            {t('New exam', 'Yangi imtihon')}
          </Button>
        </Card>
      ) : (
        q && (
          <Card>
            {remaining !== null && (
              <Label kind="heading">
                {Math.floor(remaining / 60)}:
                {String(remaining % 60).padStart(2, '0')}
              </Label>
            )}
            <Meter
              value={Object.keys(answers).length}
              total={questions.length}
            />
            <Label>
              {index + 1}/{questions.length}
            </Label>
            <Label kind="heading">{q.question}</Label>
            {q.choices.map((choice, i) => (
              <Button
                key={i}
                chosen={answers[q.id] === i}
                onPress={() => {
                  if (examSecondsRemaining(deadline) === 0) {
                    setFinished(true);
                    return;
                  }
                  setAnswers((a) => ({ ...a, [q.id]: i }));
                }}
              >
                {choice}
              </Button>
            ))}
            <Button
              disabled={index === 0}
              onPress={() => setIndex((i) => i - 1)}
            >
              {t('Previous', 'Oldingi')}
            </Button>
            <Button
              disabled={index === questions.length - 1}
              onPress={() => setIndex((i) => i + 1)}
            >
              {t('Next', 'Keyingi')}
            </Button>
            <Button onPress={() => setFinished(true)}>
              {t('Submit', 'Yakunlash')}
            </Button>
          </Card>
        )
      )}
      {!!error && <Label>{error}</Label>}
    </Screen>
  );
}

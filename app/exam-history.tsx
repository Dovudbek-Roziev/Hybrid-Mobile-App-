import { useState } from 'react';
import { Button, Card, Label, Screen, LoadState } from '../src/components/ui';
import { useTheme } from '../src/theme';
import { useLocalData } from '../src/hooks/useLocalData';
import { examHistory, examReview, examTopics } from '../src/exams/storage';
import { TopicBreakdown } from '../src/exams/TopicBreakdown';

function AllTopics() {
  const state = useLocalData(examTopics);
  return (
    <>
      <LoadState {...state} />
      {state.data && !state.error && <TopicBreakdown topics={state.data} />}
    </>
  );
}

export default function ExamHistory() {
  const { t } = useTheme();
  const history = useLocalData(examHistory);
  const [review, setReview] = useState<{
    answers: Awaited<ReturnType<typeof examReview>>;
    topics: Awaited<ReturnType<typeof examTopics>>;
  } | null>(null);
  const [showTopics, setShowTopics] = useState(false);
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  const [page, setPage] = useState(0);
  const rows = history.data ?? [];
  async function open(id: string) {
    setBusy(true);
    setError('');
    try {
      const [answers, topics] = await Promise.all([
        examReview(id),
        examTopics(id),
      ]);
      setReview({ answers, topics });
    } catch {
      setError(
        t(
          'Could not open this attempt. Try again.',
          'Imtihon urinishini ochib bo‘lmadi. Qayta urinib ko‘ring.',
        ),
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <Screen title={t('Exam history', 'Imtihonlar tarixi')} back>
      {!!error && <Label>{error}</Label>}
      {review !== null ? (
        <>
          <Button onPress={() => setReview(null)}>
            {t('Back to history', 'Tarixga qaytish')}
          </Button>
          <Label kind="heading">
            {t('Topics in this attempt', 'Shu urinishdagi mavzular')}
          </Label>
          <TopicBreakdown topics={review.topics} />
          <Label kind="heading">{t('Answers', 'Javoblar')}</Label>
          {review.answers.map((r) => (
            <Card key={r.question.id}>
              <Label kind="heading">{r.question.question}</Label>
              <Label>
                {r.selected === null
                  ? t('Unanswered', 'Javobsiz')
                  : r.selected === r.correct
                    ? t('Correct', 'To‘g‘ri')
                    : t('Incorrect', 'Xato')}
              </Label>
              <Label>
                {t('Your answer', 'Javobingiz')}:{' '}
                {r.selected === null ? '—' : r.question.choices[r.selected]}
              </Label>
              <Label>
                {t('Correct answer', 'To‘g‘ri javob')}:{' '}
                {r.question.choices[r.correct]}
              </Label>
              <Label>{r.question.explanation}</Label>
            </Card>
          ))}
        </>
      ) : showTopics ? (
        <>
          <Button onPress={() => setShowTopics(false)}>
            {t('Back to history', 'Tarixga qaytish')}
          </Button>
          <Label kind="heading">
            {t('Topics across all attempts', 'Barcha urinishlardagi mavzular')}
          </Label>
          <AllTopics />
        </>
      ) : (
        <>
          <Button
            disabled={busy}
            onPress={() => {
              setShowTopics(true);
              setError('');
            }}
          >
            {t('Results by topic', 'Mavzular bo‘yicha natijalar')}
          </Button>
          <LoadState {...history} />
          {!history.loading && !history.error && !rows.length && (
            <Label>{t('No attempts yet', 'Hali imtihon topshirilmagan')}</Label>
          )}
          {rows.slice(page * 10, page * 10 + 10).map((r) => (
            <Card key={r.id}>
              <Label kind="heading">
                {r.exam} · {r.score}/100
              </Label>
              <Label>{new Date(r.created_at).toLocaleString()}</Label>
              <Label>
                {r.score >= r.pass
                  ? t('Passed', 'O‘tdingiz')
                  : t('Not passed', 'O‘tmadingiz')}
                {' · '}
                {t('Pass score', 'O‘tish bali')} {r.pass}/100
              </Label>
              <Button disabled={busy} onPress={() => void open(r.id)}>
                {t('Review answers', 'Javoblarni ko‘rish')}
              </Button>
            </Card>
          ))}
          <Button disabled={page === 0} onPress={() => setPage((p) => p - 1)}>
            {t('Previous', 'Oldingi')}
          </Button>
          <Button
            disabled={(page + 1) * 10 >= rows.length}
            onPress={() => setPage((p) => p + 1)}
          >
            {t('Next', 'Keyingi')}
          </Button>
        </>
      )}
    </Screen>
  );
}

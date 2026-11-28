import { useState } from 'react';
import { router } from 'expo-router';
import { Button, Card, Label, Meter } from '../components/ui';
import { useTheme } from '../theme';
import type { AnswerCounts, ExamTopic } from './topics';

function AnswerSummary({ correct, incorrect, unanswered }: AnswerCounts) {
  const { t } = useTheme();
  const total = correct + incorrect + unanswered;
  return (
    <>
      <Label>
        {correct} {t('correct', 'to‘g‘ri')} · {incorrect}{' '}
        {t('incorrect', 'xato')} · {unanswered} {t('unanswered', 'javobsiz')}
      </Label>
      <Meter value={correct} total={total} />
    </>
  );
}

export function TopicBreakdown({ topics }: { topics: readonly ExamTopic[] }) {
  const { t } = useTheme();
  const [openMonth, setOpenMonth] = useState<number | null>(null);
  if (!topics.length) {
    return (
      <Label>
        {t(
          'No saved answers to analyze yet.',
          'Tahlil qilish uchun hali saqlangan javoblar yo‘q.',
        )}
      </Label>
    );
  }

  return (
    <>
      {topics.map((topic) => {
        const month = topic.month;
        const expanded = month !== null && openMonth === month;
        return (
          <Card key={month ?? 'uncategorized'}>
            <Label kind="heading">
              {topic.title ??
                t('Unknown topic', 'Mavzusi aniqlanmagan savollar')}
            </Label>
            <AnswerSummary {...topic} />
            {month !== null && (
              <Button
                chosen={expanded}
                onPress={() => setOpenMonth(expanded ? null : month)}
              >
                {expanded
                  ? t('Hide lessons', 'Darslarni yashirish')
                  : t('Show lesson results', 'Dars natijalarini ko‘rish')}
              </Button>
            )}
            {expanded &&
              topic.lessons.map((lesson) => (
                <Card key={lesson.id}>
                  <Label kind="heading">{lesson.title}</Label>
                  <AnswerSummary {...lesson} />
                  <Button
                    onPress={() =>
                      router.push({
                        pathname: '/lesson',
                        params: { id: lesson.id },
                      })
                    }
                  >
                    {t('Review lesson', 'Darsni takrorlash')}
                  </Button>
                </Card>
              ))}
          </Card>
        );
      })}
    </>
  );
}

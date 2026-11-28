import { lessons, months } from '../curriculum/catalog';

export type AnswerCounts = {
  correct: number;
  incorrect: number;
  unanswered: number;
};
export type LessonAnswerCounts = AnswerCounts & { lessonId: string | null };
export type LessonTopic = AnswerCounts & { id: string; title: string };
export type ExamTopic = AnswerCounts & {
  month: number | null;
  title: string | null;
  lessons: LessonTopic[];
};

const lessonsById = new Map(lessons.map((lesson) => [lesson.id, lesson]));

export function summarizeExamTopics(
  rows: readonly LessonAnswerCounts[],
): ExamTopic[] {
  const topics = new Map<number | null, ExamTopic>();
  for (const row of rows) {
    const lesson = row.lessonId ? lessonsById.get(row.lessonId) : undefined;
    const month = lesson?.month ?? null;
    let topic = topics.get(month);
    if (!topic) {
      topic = {
        month,
        title: month === null ? null : months[month - 1],
        correct: 0,
        incorrect: 0,
        unanswered: 0,
        lessons: [],
      };
      topics.set(month, topic);
    }
    topic.correct += row.correct;
    topic.incorrect += row.incorrect;
    topic.unanswered += row.unanswered;
    if (lesson) {
      topic.lessons.push({
        id: lesson.id,
        title: lesson.title,
        correct: row.correct,
        incorrect: row.incorrect,
        unanswered: row.unanswered,
      });
    }
  }
  return [...topics.values()].sort(
    (a, b) =>
      (a.month ?? Number.MAX_SAFE_INTEGER) -
      (b.month ?? Number.MAX_SAFE_INTEGER),
  );
}

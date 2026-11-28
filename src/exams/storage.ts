import { db } from '../database/connection';
import { gradeExam, type ExamKind, type ExamQuestion } from './engine';
import { summarizeExamTopics, type LessonAnswerCounts } from './topics';

export async function saveExam(
  id: string,
  kind: ExamKind,
  scope: string,
  questions: readonly ExamQuestion[],
  answers: Readonly<Record<string, number>>,
  passScore: number,
) {
  if (!questions.length) throw new Error('Empty exam');
  const result = gradeExam(questions, answers, passScore);
  const database = await db();
  await database.withExclusiveTransactionAsync(async (tx) => {
    await tx.runAsync(
      'INSERT INTO exam_attempts (id,exam,score,pass,created_at) VALUES (?,?,?,?,?)',
      id,
      kind + ':' + scope,
      result.score,
      passScore,
      new Date().toISOString(),
    );
    for (const q of questions) {
      const selected = answers[q.id];
      await tx.runAsync(
        'INSERT INTO exam_answers (attempt_id,question,selected,correct) VALUES (?,?,?,?)',
        id,
        JSON.stringify(q),
        Number.isInteger(selected) &&
          selected >= 0 &&
          selected < q.choices.length
          ? selected
          : null,
        q.correct,
      );
    }
  });
  return result;
}
export async function examHistory() {
  return (await db()).getAllAsync<{
    id: string;
    exam: string;
    score: number;
    pass: number;
    created_at: string;
  }>('SELECT * FROM exam_attempts ORDER BY created_at DESC');
}

export async function examTopics(attemptId: string | null = null) {
  const database = await db();
  const rows = await database.getAllAsync<LessonAnswerCounts>(
    `
    WITH answers AS (
      SELECT
        CASE WHEN json_valid(a.question) THEN json_extract(a.question, '$.lessonId') END AS lesson_id,
        CASE WHEN json_valid(a.question) THEN json_extract(a.question, '$.id') END AS question_id,
        a.selected, a.correct
      FROM exam_answers a
      JOIN exam_attempts e ON e.id = a.attempt_id
      ${attemptId === null ? '' : 'WHERE a.attempt_id = ?'}
    ), lesson_answers AS (
      SELECT COALESCE(NULLIF(lesson_id, ''), CASE WHEN instr(question_id, ':') > 0
        THEN substr(question_id, 1, instr(question_id, ':') - 1) END) AS lessonId,
        selected, correct
      FROM answers
    )
    SELECT lessonId,
      SUM(CASE WHEN selected = correct THEN 1 ELSE 0 END) AS correct,
      SUM(CASE WHEN selected <> correct THEN 1 ELSE 0 END) AS incorrect,
      SUM(CASE WHEN selected IS NULL THEN 1 ELSE 0 END) AS unanswered
    FROM lesson_answers
    GROUP BY lessonId
    ORDER BY lessonId
  `,
    ...(attemptId === null ? [] : [attemptId]),
  );
  return summarizeExamTopics(rows);
}
export async function examReview(id: string) {
  const rows = await (
    await db()
  ).getAllAsync<{ question: string; selected: number | null; correct: number }>(
    'SELECT question,selected,correct FROM exam_answers WHERE attempt_id=? ORDER BY rowid',
    id,
  );
  return rows.map((row) => ({
    question: JSON.parse(row.question) as ExamQuestion,
    selected: row.selected,
    correct: row.correct,
  }));
}

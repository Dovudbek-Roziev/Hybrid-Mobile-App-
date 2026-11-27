export type Difficulty = 'easy' | 'medium' | 'hard';

export type LessonQuestion = {
  question: string;
  choices: readonly string[];
  correct: number;
  explanation: string;
};

export type LessonSource = {
  id: string;
  month: number;
  title: string;
  minutes: number;
  body: string;
  code: string;
  question: string;
  choices: readonly string[];
  correct: number;
  goal?: string;
  plain?: string;
  example?: string;
  mistake?: string;
  practice?: string;
  reflection?: string;
  explanation?: string;
  quiz?: readonly LessonQuestion[];
};

export type Lesson = LessonSource & { week: number; difficulty: Difficulty };

export const weeksPerMonth = [4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5];

export function scheduleLessons(source: readonly LessonSource[]): Lesson[] {
  let firstWeek = 1;
  return weeksPerMonth.flatMap((weeks, index) => {
    const month = index + 1;
    const entries = source.filter(lesson => lesson.month === month);
    const baseWeek = firstWeek;
    firstWeek += weeks;
    const difficulty: Difficulty = month < 4 ? 'easy' : month < 9 ? 'medium' : 'hard';
    return entries.map((lesson, rank) => ({
      ...lesson, week: baseWeek + Math.floor(rank * weeks / entries.length), difficulty,
    }));
  });
}

export function lessonQuestions(lesson: LessonSource): readonly LessonQuestion[] {
  return lesson.quiz ?? [{
    question: lesson.question, choices: lesson.choices, correct: lesson.correct, explanation: lesson.explanation ?? lesson.body,
  }];
}

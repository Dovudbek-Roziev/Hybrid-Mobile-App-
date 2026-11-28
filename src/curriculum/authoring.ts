import type { LessonNotes, LessonSource } from './model';

type Topic = {
  title: string;
  theory: string;
  example: string;
  code: string;
  mistake: string;
  task: string;
  question: string;
  answer: string;
  alternatives: readonly [string, string];
};

export function buildMonth(month: number, topics: readonly Topic[]): (LessonSource & LessonNotes)[] {
  return topics.map((topic, index) => {
    const correct = index % 3;
    const choices = [...topic.alternatives];
    choices.splice(correct, 0, topic.answer);
    const number = String(index + 1).padStart(2, '0');
    return {
      id: 'pea-' + month + '-' + number, month, title: topic.title, minutes: index % 6 === 5 ? 30 : 25,
      body: topic.theory, code: topic.code, example: topic.example, mistake: topic.mistake, practice: topic.task,
      question: topic.question, choices, correct, explanation: topic.theory,
    };
  });
}

import { vocabulary } from './vocabulary';
import { sentenceExercises } from './sentence-exercises';
export type EnglishExercise = {
  id: string;
  level: 'a1' | 'a2' | 'b1' | 'b2';
  topic: string;
  topicUz: string;
  word: string;
  translation: string;
  example: string;
  question: string;
  questionUz: string;
  options: readonly string[];
  answer: number;
};
const originalExercises: EnglishExercise[] = [
  {
    id: 'en-a1-01',
    level: 'a1',
    topic: 'Introductions',
    topicUz: 'Tanishuv',
    word: 'Hello',
    translation: 'Salom',
    example: 'Hello, I am a developer.',
    question: 'How do you say “Salom” in English?',
    questionUz: '“Salom” ingliz tilida qanday aytiladi?',
    options: ['Goodbye', 'Hello', 'Thanks'],
    answer: 1,
  },
  {
    id: 'en-a1-02',
    level: 'a1',
    topic: 'Daily words',
    topicUz: 'Kundalik so‘zlar',
    word: 'Learn',
    translation: 'O‘rganmoq',
    example: 'I learn JavaScript every day.',
    question: 'What does “learn” mean?',
    questionUz: '“Learn” so‘zining tarjimasi qaysi?',
    options: ['O‘rganmoq', 'Yugurmoq', 'Uxlamoq'],
    answer: 0,
  },
  {
    id: 'en-a1-03',
    level: 'a1',
    topic: 'Grammar',
    topicUz: 'Grammatika',
    word: 'I am',
    translation: 'Men ...man',
    example: 'I am a student.',
    question: 'Choose the correct sentence.',
    questionUz: 'To‘g‘ri gapni tanlang.',
    options: ['I is a student', 'I am a student', 'I are student'],
    answer: 1,
  },
  {
    id: 'en-a2-01',
    level: 'a2',
    topic: 'Past simple',
    topicUz: 'Oddiy o‘tgan zamon',
    word: 'Built',
    translation: 'Qurdi yoki yaratdi',
    example: 'I built an app yesterday.',
    question: 'Which is the past form of “build”?',
    questionUz: '“Build” fe’lining o‘tgan zamon shakli qaysi?',
    options: ['Builded', 'Building', 'Built'],
    answer: 2,
  },
  {
    id: 'en-a2-02',
    level: 'a2',
    topic: 'Technical English',
    topicUz: 'Texnik ingliz tili',
    word: 'Bug',
    translation: 'Dasturdagi xato',
    example: 'I fixed a bug in my code.',
    question: 'A “bug” in software is...',
    questionUz: 'Dasturlashda “bug” nimani anglatadi?',
    options: ['A feature', 'An error', 'A database'],
    answer: 1,
  },
  {
    id: 'en-b1-01',
    level: 'b1',
    topic: 'Conditionals',
    topicUz: 'Shart gaplar',
    word: 'Unless',
    translation: '...masa yoki agar ... bo‘lmasa',
    example: 'The app works unless the battery is empty.',
    question: 'Which word means “if not”?',
    questionUz: 'Qaysi so‘z “if not” bilan bir xil ma’noni anglatadi?',
    options: ['Unless', 'Although', 'Because'],
    answer: 0,
  },
  {
    id: 'en-b1-02',
    level: 'b1',
    topic: 'Development',
    topicUz: 'Dastur yaratish',
    word: 'Deploy',
    translation: 'Ishga tushirmoq',
    example: 'We deploy the website on Friday.',
    question: 'To deploy an app means to...',
    questionUz: 'Ilovani “deploy” qilish nimani anglatadi?',
    options: ['Delete it', 'Release it', 'Translate it'],
    answer: 1,
  },
  {
    id: 'en-b2-01',
    level: 'b2',
    topic: 'Architecture',
    topicUz: 'Dastur arxitekturasi',
    word: 'Scalability',
    translation: 'Kengayish imkoniyati',
    example: 'Scalability matters as traffic grows.',
    question: 'Scalability is the ability to...',
    questionUz: '“Scalability” qanday qobiliyatni bildiradi?',
    options: ['Handle growth', 'Remove tests', 'Avoid updates'],
    answer: 0,
  },
  {
    id: 'en-b2-02',
    level: 'b2',
    topic: 'Engineering',
    topicUz: 'Muhandislik',
    word: 'Trade-off',
    translation: 'Bir afzallik uchun boshqasidan voz kechish',
    example: 'There is a trade-off between speed and accuracy.',
    question: 'A trade-off is...',
    questionUz: '“Trade-off” nimani anglatadi?',
    options: ['A syntax error', 'A compromise', 'A backup'],
    answer: 1,
  },
];

const generated: EnglishExercise[] = vocabulary
  .slice(0, 191)
  .map((w, index) => {
    const alternatives = vocabulary.filter(
      (v) =>
        v.level === w.level && v.id !== w.id && v.translation !== w.translation,
    );
    const first = alternatives[index % alternatives.length];
    const distinct = alternatives.filter(
      (v) => v.id !== first.id && v.translation !== first.translation,
    );
    const second = distinct[(index * 17 + 11) % distinct.length];
    const answer =
      [...w.id].reduce(
        (hash, ch) => (Math.imul(hash, 31) + ch.charCodeAt(0)) >>> 0,
        2166136261,
      ) % 3;
    const options = [first.word, second.word];
    options.splice(answer, 0, w.word);
    return {
      id: 'exercise-' + w.id,
      level: w.level,
      topic: 'Vocabulary',
      topicUz: 'Lug‘at',
      word: '',
      translation: '',
      example: '',
      question: 'Choose the English word for “' + w.translation + '”.',
      questionUz:
        '“' + w.translation + '” so‘ziga mos inglizcha so‘zni tanlang.',
      options,
      answer,
    };
  });
export const choiceExercises: readonly EnglishExercise[] = [
  ...originalExercises,
  ...generated,
];

export const exercises = [
  ...choiceExercises.map((exercise) => ({
    ...exercise,
    kind: 'choice' as const,
  })),
  ...sentenceExercises,
];

import type {
  SentenceExercise,
  TranslationExercise,
} from './sentence-exercises';

function normalize(text: string) {
  return text
    .normalize('NFKC')
    .trim()
    .toLowerCase()
    .replace(/[‘’ʼ]/g, "'")
    .replace(/[.!?]+$/g, '')
    .replace(/,/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function checkTranslation(exercise: TranslationExercise, input: string) {
  const answer = normalize(input);
  return (
    !!answer && exercise.answers.some((option) => normalize(option) === answer)
  );
}

export function checkSentence(
  exercise: SentenceExercise,
  order: readonly number[],
) {
  if (
    order.length !== exercise.words.length ||
    new Set(order).size !== order.length ||
    order.some(
      (index) =>
        !Number.isInteger(index) || index < 0 || index >= exercise.words.length,
    )
  )
    return false;
  return (
    normalize(order.map((index) => exercise.words[index]).join(' ')) ===
    normalize(exercise.answer)
  );
}

import type { Word } from '../vocabulary';
import { a1Examples } from './a1';
import { a2Examples } from './a2';
import { b1Examples } from './b1';
import { b2Examples } from './b2';
import type { VocabularyExample } from './types';

export const vocabularyExamples: Record<
  Word['level'],
  Readonly<Record<string, VocabularyExample>>
> = {
  a1: a1Examples,
  a2: a2Examples,
  b1: b1Examples,
  b2: b2Examples,
};

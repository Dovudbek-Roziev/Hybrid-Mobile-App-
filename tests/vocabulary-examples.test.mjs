import assert from 'node:assert/strict';
import { registerHooks } from 'node:module';
import test from 'node:test';

const hooks = registerHooks({
  resolve(specifier, context, nextResolve) {
    try {
      return nextResolve(specifier, context);
    } catch (error) {
      if (error.code !== 'ERR_MODULE_NOT_FOUND' || !specifier.startsWith('.'))
        throw error;
      return nextResolve(specifier + '.ts', context);
    }
  },
});
const { vocabulary } = await import('../src/english/vocabulary.ts');
const { vocabularyExamples } = await import('../src/english/examples/index.ts');
hooks.deregister();

test('every vocabulary word has a distinct English sentence and Uzbek Latin translation', () => {
  const sentences = new Set();
  for (const [level, examples] of Object.entries(vocabularyExamples)) {
    const words = vocabulary.filter((word) => word.level === level);
    assert.equal(words.length, 250, level);
    assert.deepEqual(
      Object.keys(examples).sort(),
      words.map((word) => word.word).sort(),
      level,
    );
    for (const word of words) {
      const [sentence, translation] = examples[word.word];
      const headword = word.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      assert.match(
        sentence,
        new RegExp('\\b' + headword + '\\b', 'i'),
        word.id,
      );
      assert.match(sentence, /[.?!]$/, word.id);
      assert.match(translation, /[.?!]$/, word.id);
      assert.doesNotMatch(translation, /\p{Script=Cyrillic}/u, word.id);
      assert.notEqual(
        sentence.toLowerCase(),
        translation.toLowerCase(),
        word.id,
      );
      assert.ok(!sentences.has(sentence), word.id);
      sentences.add(sentence);
    }
  }
  assert.equal(sentences.size, vocabulary.length);
});

import assert from 'node:assert/strict';
import test from 'node:test';
import { registerHooks } from 'node:module';
const hooks = registerHooks({
  resolve(specifier, context, nextResolve) {
    try {
      return nextResolve(specifier, context);
    } catch (e) {
      if (e.code !== 'ERR_MODULE_NOT_FOUND' || !specifier.startsWith('.'))
        throw e;
      return nextResolve(specifier + '.ts', context);
    }
  },
});
const { challenges } = await import('../src/challenges/catalog.ts');
const { challengeTopics } = await import('../src/challenges/topics.ts');
const { filterChallenges } = await import('../src/challenges/filter.ts');
const { vocabulary } = await import('../src/english/vocabulary.ts');
const { choiceExercises, exercises } = await import(
  '../src/english/exercises.ts'
);
const { checkSentence, checkTranslation } = await import(
  '../src/english/answer-check.ts'
);
const { weeklyQuiz } = await import('../src/exams/weekly-quiz.ts');
const { grammar } = await import('../src/english/grammar.ts');
const { readings } = await import('../src/english/reading.ts');
const { projects } = await import('../src/projects/catalog.ts');
hooks.deregister();
test('catalog sizes and unique identifiers', () => {
  for (const [items, count] of [
    [challenges, 100],
    [vocabulary, 1000],
    [choiceExercises, 200],
    [exercises, 224],
    [grammar, 40],
    [readings, 20],
    [projects, 12],
  ]) {
    assert.equal(items.length, count);
    assert.equal(new Set(items.map((x) => x.id)).size, count);
  }
  for (const level of ['a1', 'a2', 'b1', 'b2'])
    assert.equal(vocabulary.filter((w) => w.level === level).length, 250);
});
test('English questions have valid and distinct choices', () => {
  for (const q of [...choiceExercises, ...grammar, ...readings]) {
    assert.ok(q.question.trim(), q.id);
    assert.ok(Number.isInteger(q.answer) && q.options[q.answer]?.trim(), q.id);
    assert.equal(new Set(q.options).size, q.options.length, q.id);
  }
});

test('English instructions and the weekly quiz support Uzbek Latin without changing saved IDs or answer positions', () => {
  const cyrillic = /\p{Script=Cyrillic}/u;
  const originalAnswers = {
    'en-a1-01': 1,
    'en-a1-02': 0,
    'en-a1-03': 1,
    'en-a2-01': 2,
    'en-a2-02': 1,
    'en-b1-01': 0,
    'en-b1-02': 1,
    'en-b2-01': 0,
    'en-b2-02': 1,
  };
  for (const [id, answer] of Object.entries(originalAnswers)) {
    assert.equal(
      choiceExercises.find((item) => item.id === id)?.answer,
      answer,
      id,
    );
  }
  for (const exercise of choiceExercises) {
    assert.ok(
      exercise.topicUz.trim() && exercise.questionUz.trim(),
      exercise.id,
    );
    assert.ok(
      !cyrillic.test(
        [
          exercise.translation,
          exercise.question,
          exercise.questionUz,
          ...exercise.options,
        ].join(' '),
      ),
      exercise.id,
    );
  }
  assert.deepEqual(
    weeklyQuiz.map((item) => item.id),
    ['q1', 'q2', 'q3', 'q4', 'q5'],
  );
  assert.deepEqual(
    weeklyQuiz.map((item) => item.answer),
    [1, 2, 1, 0, 1],
  );
  for (const item of weeklyQuiz) {
    const options = item.optionsUz ?? item.options;
    assert.ok(
      item.questionUz.trim() &&
        item.explanationUz.trim() &&
        options[item.answer],
      item.id,
    );
    assert.equal(options.length, item.options.length, item.id);
    assert.ok(
      !cyrillic.test(
        [item.questionUz, item.explanationUz, ...options].join(' '),
      ),
      item.id,
    );
  }
});

test('all levels have authored translation and sentence-building exercises with valid answers', () => {
  for (const level of ['a1', 'a2', 'b1', 'b2']) {
    const translations = exercises.filter(
      (item) => item.kind === 'translation' && item.level === level,
    );
    const sentences = exercises.filter(
      (item) => item.kind === 'sentence' && item.level === level,
    );
    assert.equal(translations.length, 3);
    assert.equal(sentences.length, 3);
    for (const exercise of translations) {
      assert.ok(exercise.prompt.trim() && exercise.answers.length, exercise.id);
      for (const answer of exercise.answers)
        assert.ok(checkTranslation(exercise, answer), exercise.id);
      assert.equal(checkTranslation(exercise, '  '), false, exercise.id);
    }
    for (const exercise of sentences) {
      assert.ok(exercise.prompt.trim(), exercise.id);
      const order = exercise.answer.split(' ').map((word, position, words) => {
        const used = words
          .slice(0, position)
          .filter((previous) => previous === word).length;
        return exercise.words
          .map((token, index) => (token === word ? index : -1))
          .filter((index) => index >= 0)[used];
      });
      assert.ok(checkSentence(exercise, order), exercise.id);
      assert.equal(
        checkSentence(
          exercise,
          exercise.words.map((_, index) => index),
        ),
        false,
        exercise.id,
      );
      assert.equal(checkSentence(exercise, order.slice(1)), false, exercise.id);
      assert.equal(
        checkSentence(exercise, [order[1], ...order.slice(1)]),
        false,
        exercise.id,
      );
      assert.equal(
        checkSentence(exercise, [exercise.words.length, ...order.slice(1)]),
        false,
        exercise.id,
      );
    }
  }
});

test('translation checking accepts authored variants and normal punctuation but preserves negation', () => {
  const where = exercises.find((item) => item.id === 'en-translate-a1-02');
  assert.ok(checkTranslation(where, "   WHERE'S   the document?  "));
  assert.equal(checkTranslation(where, 'Where is a document?'), false);
  const offline = exercises.find((item) => item.id === 'en-translate-a2-03');
  assert.ok(checkTranslation(offline, 'The app doesn’t work offline.'));
  assert.equal(checkTranslation(offline, 'The app works offline.'), false);
});
test('challenges and projects contain required learning material', () => {
  for (const c of challenges)
    for (const field of ['title', 'task', 'starter', 'hint', 'solution'])
      assert.ok(c[field].trim(), c.id + ' ' + field);
  for (const p of projects) {
    assert.ok(
      p.requirements.length && p.acceptance.length && p.rubric.length,
      p.id,
    );
    assert.equal(
      new Set(p.milestones.map((m) => m.id)).size,
      p.milestones.length,
    );
  }
});

test('all 100 existing challenge IDs are searchable and topic, difficulty and query filters compose', () => {
  const all = filterChallenges('', 'all', 'all');
  assert.deepEqual(
    all.map((item) => item.id),
    Array.from({ length: 100 }, (_, index) => 'challenge-' + (index + 1)),
  );
  for (const topic of Object.keys(challengeTopics)) {
    const results = filterChallenges('', 'all', topic);
    assert.ok(results.length > 0, topic);
    assert.ok(
      results.every((item) => item.topic === topic),
      topic,
    );
  }
  assert.equal(
    Object.keys(challengeTopics).reduce(
      (count, topic) => count + filterChallenges('', 'all', topic).length,
      0,
    ),
    all.length,
  );
  assert.deepEqual(
    filterChallenges('  BINARY    SEARCH  ', 'hard', 'algorithms').map(
      (item) => item.id,
    ),
    ['challenge-12'],
  );
  assert.deepEqual(filterChallenges('binary search', 'easy', 'algorithms'), []);
  assert.deepEqual(filterChallenges('binary search', 'hard', 'react'), []);
  assert.deepEqual(
    filterChallenges("MA'LUMOTLAR BAZASI", 'all', 'all'),
    filterChallenges('', 'all', 'databases'),
  );
  assert.deepEqual(filterChallenges('missing-text-xyz', 'all', 'all'), []);
});

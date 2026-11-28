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
const { vocabulary } = await import('../src/english/vocabulary.ts');
const { exercises } = await import('../src/english/exercises.ts');
const { weeklyQuiz } = await import('../src/exams/weekly-quiz.ts');
const { grammar } = await import('../src/english/grammar.ts');
const { readings } = await import('../src/english/reading.ts');
const { projects } = await import('../src/projects/catalog.ts');
hooks.deregister();
test('catalog sizes and unique identifiers', () => {
  for (const [items, count] of [
    [challenges, 100],
    [vocabulary, 1000],
    [exercises, 200],
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
  for (const q of [...exercises, ...grammar, ...readings]) {
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
    assert.equal(exercises.find((item) => item.id === id)?.answer, answer, id);
  }
  for (const exercise of exercises) {
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

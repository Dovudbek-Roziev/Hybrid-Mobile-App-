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
const { buildExam, gradeExam, examRules, shuffle } = await import(
  '../src/exams/engine.ts'
);
const { lessons } = await import('../src/curriculum/catalog.ts');
const { lessonQuestions } = await import('../src/curriculum/model.ts');
hooks.deregister();
const random = () => 0.42;
test('every exam scope has valid unique questions within its limit', () => {
  const scopes = [
    ['lesson', lessons.map((l) => l.id)],
    ['weekly', Array.from({ length: 52 }, (_, i) => String(i + 1))],
    ['monthly', Array.from({ length: 12 }, (_, i) => String(i + 1))],
    ['quarterly', ['1', '2', '3', '4']],
    ['final', ['1']],
  ];
  for (const [kind, ids] of scopes)
    for (const scope of ids) {
      const questions = buildExam(kind, scope, random);
      assert.ok(
        questions.length > 0 && questions.length <= examRules[kind].count,
      );
      assert.equal(new Set(questions.map((q) => q.id)).size, questions.length);
      for (const q of questions) {
        const lesson = lessons.find((l) => l.id === q.lessonId);
        assert.ok(lesson);
        assert.ok(
          kind === 'final' ||
            (kind === 'lesson'
              ? lesson.id === scope
              : kind === 'weekly'
                ? lesson.week === Number(scope)
                : kind === 'monthly'
                  ? lesson.month === Number(scope)
                  : Math.ceil(lesson.month / 3) === Number(scope)),
        );
        const original =
          lessonQuestions(lesson)[Number(q.id.split(':').at(-1))];
        assert.equal(q.choices[q.correct], original.choices[original.correct]);
        assert.deepEqual([...q.choices].sort(), [...original.choices].sort());
      }
    }
});
test('scores perfect, empty, incorrect and partial answers correctly', () => {
  const q = buildExam('final', '1', random);
  assert.equal(
    gradeExam(q, Object.fromEntries(q.map((x) => [x.id, x.correct]))).score,
    100,
  );
  assert.equal(gradeExam(q, {}).score, 0);
  assert.equal(
    gradeExam(
      q,
      Object.fromEntries(
        q.map((x) => [x.id, (x.correct + 1) % x.choices.length]),
      ),
    ).score,
    0,
  );
  assert.equal(
    gradeExam(
      q,
      Object.fromEntries(q.slice(0, 35).map((x) => [x.id, x.correct])),
    ).passed,
    true,
  );
  assert.equal(
    gradeExam(
      q,
      Object.fromEntries(q.slice(0, 34).map((x) => [x.id, x.correct])),
    ).passed,
    false,
  );
  assert.equal(gradeExam([], {}).passed, false);
});
test('shuffle preserves input and invalid scopes return no questions', () => {
  const original = [1, 2, 3, 4];
  assert.deepEqual(shuffle(original, () => 0).sort(), original);
  assert.deepEqual(original, [1, 2, 3, 4]);
  assert.deepEqual(buildExam('weekly', '53'), []);
});

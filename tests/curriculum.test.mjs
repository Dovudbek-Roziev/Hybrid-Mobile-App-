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
const { lessons } = await import('../src/curriculum/catalog.ts');
const { lessonQuestions } = await import('../src/curriculum/model.ts');
const { foundationsGuides } = await import(
  '../src/curriculum/guides/foundations.ts'
);
const { webGuides } = await import('../src/curriculum/guides/web.ts');
const { csGuides } = await import('../src/curriculum/guides/cs.ts');
const { engineeringGuides } = await import(
  '../src/curriculum/guides/engineering.ts'
);
hooks.deregister();

test('the curriculum contains 260 unique lessons across 12 months and 52 consecutive weeks', () => {
  assert.equal(lessons.length, 260);
  assert.equal(
    new Set(lessons.map((lesson) => lesson.id)).size,
    lessons.length,
  );
  assert.deepEqual(
    [...new Set(lessons.map((lesson) => lesson.month))],
    Array.from({ length: 12 }, (_, i) => i + 1),
  );
  assert.deepEqual(
    [...new Set(lessons.map((lesson) => lesson.week))],
    Array.from({ length: 52 }, (_, i) => i + 1),
  );
  for (const [prefix, count] of Object.entries({
    js: 37,
    ts: 16,
    react: 16,
    next: 16,
    backend: 20,
    db: 20,
  })) {
    for (let i = 1; i <= count; i++) {
      const id = prefix + '-' + String(i).padStart(3, '0');
      const lesson = lessons.find((candidate) => candidate.id === id);
      assert.ok(
        lesson?.englishBody && lesson.practice,
        id + ' contains original text and Uzbek enrichment',
      );
    }
  }
});

test('all lessons have practical work, code and a well-formed knowledge check', () => {
  for (const lesson of lessons) {
    assert.ok(
      lesson.body.trim() && lesson.code.trim() && lesson.practice?.trim(),
      lesson.id,
    );
    assert.ok(lesson.example?.trim() && lesson.mistake?.trim(), lesson.id);
    const questions = lessonQuestions(lesson);
    assert.ok(questions.length, lesson.id);
    for (const { question, choices, correct, explanation } of questions) {
      assert.ok(question.trim() && explanation.trim(), lesson.id);
      assert.ok(
        Number.isInteger(correct) && choices[correct]?.trim(),
        lesson.id,
      );
      assert.equal(new Set(choices).size, choices.length, lesson.id);
    }
  }
});

test('all 260 lessons have authored objectives, plain explanations and summaries', () => {
  const allGuideIds = [
    foundationsGuides,
    webGuides,
    csGuides,
    engineeringGuides,
  ].flatMap(Object.keys);
  assert.deepEqual(
    allGuideIds.sort(),
    lessons.map((lesson) => lesson.id).sort(),
  );
  const fields = ['goal', 'plain', 'reflection'];
  for (const field of fields) {
    const values = lessons.map((lesson) => lesson[field]);
    assert.equal(new Set(values).size, lessons.length, field);
  }
  for (const lesson of lessons) {
    const texts = fields.map((field) => lesson[field].trim());
    assert.ok(
      texts.every((text) => text.length > 20),
      lesson.id,
    );
    assert.doesNotMatch(texts.join(' '), /\p{Script=Cyrillic}/u, lesson.id);
    assert.equal(new Set([...texts, lesson.body.trim()]).size, 4, lesson.id);
  }
});

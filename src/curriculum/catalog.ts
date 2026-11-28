import { tsUz } from './uz/ts';
import { reactUz } from './uz/react';
import { nextUz } from './uz/next';
import { backendUz } from './uz/backend';
import { dbUz } from './uz/db';
import { month8 } from './month8';
import { month9 } from './month9';
import { month10 } from './month10';
import { month11 } from './month11';
import { month12 } from './month12';
import { jsUz } from './uz/js';
import { scheduleLessons, type LessonGuide } from './model';
import { originalLessons } from './original-lessons';
import { foundationsGuides } from './guides/foundations';
import { webGuides } from './guides/web';
import { csGuides } from './guides/cs';
import { engineeringGuides } from './guides/engineering';
export const months = [
  'JavaScript Fundamentals',
  'Advanced JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Backend Engineering',
  'MongoDB & Databases',
  'Computer Science',
  'Algorithms',
  'Software Engineering',
  'DevOps & Cloud',
  'Final SaaS Project',
];

const localized: Record<string, { theory: string; practice: string }> = {
  ...jsUz,
  ...tsUz,
  ...reactUz,
  ...nextUz,
  ...backendUz,
  ...dbUz,
};
const existing = originalLessons.map((lesson) => {
  const uz = localized[lesson.id];
  return uz
    ? {
        ...lesson,
        body: uz.theory,
        englishBody: lesson.body,
        practice: uz.practice,
      }
    : lesson;
});

const guides: Readonly<Partial<Record<string, LessonGuide>>> = {
  ...foundationsGuides,
  ...webGuides,
  ...csGuides,
  ...engineeringGuides,
};

export const lessons = scheduleLessons(
  [...existing, ...month8, ...month9, ...month10, ...month11, ...month12].map(
    (lesson) => {
      const guide = guides[lesson.id];
      if (!guide) throw new Error('Missing lesson guide for ' + lesson.id);
      return { ...lesson, ...guide };
    },
  ),
);

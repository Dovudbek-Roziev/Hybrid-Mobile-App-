export const modules = [
  'JavaScript Fundamentals', 'Advanced JavaScript', 'TypeScript',
  'Advanced React', 'Next.js', 'Backend Engineering',
  'Database Engineering', 'Computer Science', 'Data Structures & Algorithms',
  'Software Engineering Practices', 'DevOps & Cloud', 'Final Capstone Project',
].map((title, index) => ({ id: index + 1, title, month: index + 1 }));

export const lessons = [
  { id: 'js-001', moduleId: 1, title: 'Variables', description: 'Learn const and let', minutes: 25 },
  { id: 'js-002', moduleId: 1, title: 'Data Types', description: 'Strings, numbers, booleans and null', minutes: 25 },
  { id: 'js-003', moduleId: 1, title: 'Operators', description: 'Arithmetic and comparison operators', minutes: 25 },
];

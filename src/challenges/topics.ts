export const challengeTopics = {
  javascript: { en: 'JavaScript', uz: 'JavaScript' },
  typescript: { en: 'TypeScript', uz: 'TypeScript' },
  react: { en: 'React', uz: 'React' },
  backend: { en: 'Backend', uz: 'Backend' },
  databases: { en: 'Databases', uz: 'Ma’lumotlar bazasi' },
  algorithms: { en: 'Algorithms', uz: 'Algoritmlar' },
  'problem-solving': { en: 'Problem solving', uz: 'Masala yechish' },
  'computer-science': { en: 'Computer science', uz: 'Kompyuter fanlari' },
  'system-design': { en: 'System design', uz: 'Tizim dizayni' },
  devops: { en: 'DevOps', uz: 'DevOps' },
  testing: { en: 'Testing', uz: 'Testlash' },
} as const;

export type ChallengeTopic = keyof typeof challengeTopics;

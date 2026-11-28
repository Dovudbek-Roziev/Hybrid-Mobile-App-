import type { Word } from './vocabulary';

type SentencePrompt = { id: string; level: Word['level']; prompt: string };

export type TranslationExercise = SentencePrompt & {
  kind: 'translation';
  answers: readonly string[];
};

export type SentenceExercise = SentencePrompt & {
  kind: 'sentence';
  words: readonly string[];
  answer: string;
};

const translations: readonly TranslationExercise[] = [
  {
    id: 'en-translate-a1-01',
    level: 'a1',
    kind: 'translation',
    prompt: 'Men har kuni kod yozaman.',
    answers: [
      'I write code every day',
      'I code every day',
      'Every day I write code',
    ],
  },
  {
    id: 'en-translate-a1-02',
    level: 'a1',
    kind: 'translation',
    prompt: 'Hujjat qayerda?',
    answers: ['Where is the document', 'Where’s the document'],
  },
  {
    id: 'en-translate-a1-03',
    level: 'a1',
    kind: 'translation',
    prompt: 'Menga yangi parol kerak.',
    answers: ['I need a new password'],
  },
  {
    id: 'en-translate-a2-01',
    level: 'a2',
    kind: 'translation',
    prompt: 'Men kecha xatoni tuzatdim.',
    answers: [
      'I fixed the bug yesterday',
      'I fixed the error yesterday',
      'Yesterday I fixed the bug',
      'Yesterday I fixed the error',
    ],
  },
  {
    id: 'en-translate-a2-02',
    level: 'a2',
    kind: 'translation',
    prompt: 'Iltimos, faylni menga yubora olasizmi?',
    answers: [
      'Could you send me the file, please',
      'Could you please send me the file',
      'Can you send me the file, please',
      'Can you please send me the file',
      'Please could you send me the file',
      'Could you send the file to me, please',
    ],
  },
  {
    id: 'en-translate-a2-03',
    level: 'a2',
    kind: 'translation',
    prompt: 'Ilova internetsiz ishlamaydi.',
    answers: [
      'The app does not work without internet access',
      "The app doesn't work without internet access",
      'The app does not work without the internet',
      "The app doesn't work without the internet",
      'The app does not work offline',
      "The app doesn't work offline",
    ],
  },
  {
    id: 'en-translate-b1-01',
    level: 'b1',
    kind: 'translation',
    prompt: 'Yuklash tugagach, sizga xabar beraman.',
    answers: [
      'I will let you know when the upload finishes',
      "I'll let you know when the upload finishes",
      'I will let you know once the upload is complete',
      "I'll let you know once the upload is complete",
      'I will let you know when the upload is finished',
    ],
  },
  {
    id: 'en-translate-b1-02',
    level: 'b1',
    kind: 'translation',
    prompt: 'Testlar o‘tmasa, o‘zgarishlarni chiqarmaymiz.',
    answers: [
      'If the tests fail, we will not release the changes',
      "If the tests fail, we won't release the changes",
      'We will not release the changes unless the tests pass',
      "We won't release the changes unless the tests pass",
    ],
  },
  {
    id: 'en-translate-b1-03',
    level: 'b1',
    kind: 'translation',
    prompt: 'Biz bu muammoni ikki kundan beri tekshiryapmiz.',
    answers: [
      'We have been investigating this issue for two days',
      "We've been investigating this issue for two days",
      'We have been investigating this problem for two days',
      "We've been looking into this issue for two days",
    ],
  },
  {
    id: 'en-translate-b2-01',
    level: 'b2',
    kind: 'translation',
    prompt:
      'Keshlash javob vaqtini qisqartirishi mumkin, biroq eskirgan ma’lumotni qaytarish xavfini oshiradi.',
    answers: [
      'Caching can reduce response time, but it increases the risk of returning stale data',
      'Caching may reduce response time, but it increases the risk of returning stale data',
      'Caching can reduce response times, but it increases the risk of returning stale data',
      'While caching can reduce response time, it increases the risk of returning stale data',
    ],
  },
  {
    id: 'en-translate-b2-02',
    level: 'b2',
    kind: 'translation',
    prompt:
      'Agar xato takrorlanganda aniq qadamlar yozilganida, uni tezroq topgan bo‘lardik.',
    answers: [
      'We would have found the bug sooner if the steps to reproduce it had been documented',
      'If the steps to reproduce the bug had been documented, we would have found it sooner',
      'We would have found the bug sooner if someone had documented the steps to reproduce it',
    ],
  },
  {
    id: 'en-translate-b2-03',
    level: 'b2',
    kind: 'translation',
    prompt:
      'Keyingi relizdan oldin bu taxminni haqiqiy trafikda tekshirishimiz kerak.',
    answers: [
      'We need to test this assumption with real traffic before the next release',
      'We need to validate this assumption with real traffic before the next release',
      'Before the next release, we need to test this assumption using real traffic',
      'We should test this assumption with real traffic before the next release',
    ],
  },
];

const sentences: readonly SentenceExercise[] = [
  {
    id: 'en-sentence-a1-01',
    level: 'a1',
    kind: 'sentence',
    prompt: 'Men dasturchiman.',
    words: ['developer', 'a', 'I', 'am'],
    answer: 'I am a developer',
  },
  {
    id: 'en-sentence-a1-02',
    level: 'a1',
    kind: 'sentence',
    prompt: 'Sizning faylingiz qayerda?',
    words: ['your', 'file', 'Where', 'is'],
    answer: 'Where is your file',
  },
  {
    id: 'en-sentence-a1-03',
    level: 'a1',
    kind: 'sentence',
    prompt: 'Men o‘qiyman va yozaman.',
    words: ['write', 'I', 'and', 'read'],
    answer: 'I read and write',
  },
  {
    id: 'en-sentence-a2-01',
    level: 'a2',
    kind: 'sentence',
    prompt: 'Kecha yangi sahifa yaratdik.',
    words: ['page', 'we', 'Yesterday', 'a', 'created', 'new'],
    answer: 'Yesterday we created a new page',
  },
  {
    id: 'en-sentence-a2-02',
    level: 'a2',
    kind: 'sentence',
    prompt: 'Hujjatni ochishda menga yordam bera olasizmi?',
    words: ['help', 'the', 'Could', 'document', 'me', 'open', 'you'],
    answer: 'Could you help me open the document',
  },
  {
    id: 'en-sentence-a2-03',
    level: 'a2',
    kind: 'sentence',
    prompt: 'U bu faylni kecha saqlamadi.',
    words: ['file', 'did', 'yesterday', 'She', 'this', 'save', 'not'],
    answer: 'She did not save this file yesterday',
  },
  {
    id: 'en-sentence-b1-01',
    level: 'b1',
    kind: 'sentence',
    prompt: 'Imtihonni topshirishdan oldin barcha javoblaringizni tekshiring.',
    words: [
      'before',
      'answers',
      'the',
      'submitting',
      'exam',
      'Check',
      'all',
      'your',
    ],
    answer: 'Check all your answers before submitting the exam',
  },
  {
    id: 'en-sentence-b1-02',
    level: 'b1',
    kind: 'sentence',
    prompt: 'Ulanish uzilsa, ilova ishni mahalliy saqlaydi.',
    words: [
      'will',
      'connection',
      'the',
      'your',
      'locally',
      'If',
      'app',
      'fails,',
      'save',
      'the',
      'work',
    ],
    answer: 'If the connection fails, the app will save your work locally',
  },
  {
    id: 'en-sentence-b1-03',
    level: 'b1',
    kind: 'sentence',
    prompt: 'Biz juma kunidan beri muammoni tekshiryapmiz.',
    words: [
      'since',
      'the',
      'have',
      'issue',
      'Friday',
      'We',
      'investigating',
      'been',
    ],
    answer: 'We have been investigating the issue since Friday',
  },
  {
    id: 'en-sentence-b2-01',
    level: 'b2',
    kind: 'sentence',
    prompt: 'Zaxira nusxa muvaffaqiyatli tiklanguncha relizni kechiktiramiz.',
    words: [
      'the',
      'restored',
      'release',
      'backup',
      'We',
      'will',
      'successfully',
      'until',
      'has',
      'delay',
      'the',
      'been',
    ],
    answer:
      'We will delay the release until the backup has been successfully restored',
  },
  {
    id: 'en-sentence-b2-02',
    level: 'b2',
    kind: 'sentence',
    prompt:
      'Kesh so‘rovlar sonini kamaytirsa-da, u qo‘shimcha murakkablik keltiradi.',
    words: [
      'reduces',
      'complexity',
      'it',
      'requests,',
      'introduces',
      'Although',
      'additional',
      'caching',
    ],
    answer:
      'Although caching reduces requests, it introduces additional complexity',
  },
  {
    id: 'en-sentence-b2-03',
    level: 'b2',
    kind: 'sentence',
    prompt:
      'Yangi nazorat vositasi ertaroq qo‘shilganida, muammoni payqagan bo‘lardik.',
    words: [
      'monitor',
      'the',
      'spotted',
      'been',
      'earlier,',
      'would',
      'new',
      'Had',
      'issue',
      'added',
      'have',
      'we',
      'the',
    ],
    answer:
      'Had the new monitor been added earlier, we would have spotted the issue',
  },
];

export const sentenceExercises = [...translations, ...sentences];

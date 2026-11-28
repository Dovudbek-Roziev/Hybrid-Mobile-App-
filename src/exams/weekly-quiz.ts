type WeeklyQuestion = {
  id: string;
  question: string;
  questionUz: string;
  options: readonly string[];
  optionsUz?: readonly string[];
  answer: number;
  explanation: string;
  explanationUz: string;
};

export const weeklyQuiz: readonly WeeklyQuestion[] = [
  {
    id: 'q1',
    question: 'Which declaration lets you reassign a variable?',
    questionUz:
      'Qaysi kalit so‘z o‘zgaruvchiga yangi qiymat berishga imkon beradi?',
    options: ['const', 'let', 'function'],
    answer: 1,
    explanation:
      'A variable declared with let can be reassigned after its declaration.',
    explanationUz:
      'let bilan e’lon qilingan o‘zgaruvchiga keyin yangi qiymat berish mumkin.',
  },
  {
    id: 'q2',
    question: 'What is the type of 42?',
    questionUz: '42 qiymatining turi qanday?',
    options: ['string', 'boolean', 'number'],
    answer: 2,
    explanation: '42 is a JavaScript number.',
    explanationUz: '42 JavaScript’da number turiga kiradi.',
  },
  {
    id: 'q3',
    question: 'What does return do?',
    questionUz: 'return nima qiladi?',
    options: [
      'Stops the app',
      'Returns a value from a function',
      'Creates a variable',
    ],
    optionsUz: [
      'Ilovani to‘xtatadi',
      'Funksiyadan qiymat qaytaradi',
      'O‘zgaruvchi yaratadi',
    ],
    answer: 1,
    explanation: 'return sends a value back to the caller.',
    explanationUz: 'return qiymatni funksiyani chaqirgan kodga qaytaradi.',
  },
  {
    id: 'q4',
    question: 'What does === check?',
    questionUz: '=== operatori nimani tekshiradi?',
    options: ['Strict equality', 'Assignment', 'Exponentiation'],
    optionsUz: ['Qat’iy tenglikni', 'Qiymat berishni', 'Darajaga oshirishni'],
    answer: 0,
    explanation: '=== compares values without converting their types.',
    explanationUz: '=== qiymatlarni turlarini o‘zgartirmasdan taqqoslaydi.',
  },
  {
    id: 'q5',
    question: 'Which array method creates a new transformed array?',
    questionUz:
      'Qaysi array metodi elementlarni o‘zgartirib, yangi array qaytaradi?',
    options: ['push', 'map', 'pop'],
    answer: 1,
    explanation:
      'map applies a function to each element and returns the results in a new array.',
    explanationUz:
      'map har bir elementga funksiya qo‘llab, natijalarni yangi arrayda qaytaradi.',
  },
];

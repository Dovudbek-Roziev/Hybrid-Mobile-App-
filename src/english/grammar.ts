export type Grammar = {id:string;level:'a1'|'a2'|'b1'|'b2';title:string;theory:string;example:string;question:string;options:string[];answer:number};
export const grammar: Grammar[] = [
  {
    "id": "grammar-1",
    "level": "a1",
    "title": "To be",
    "theory": "I bilan am, he/she/it bilan is, you/we/they bilan are ishlatiladi.",
    "example": "I am a developer.",
    "question": "She ___ a student.",
    "options": [
      "am",
      "is",
      "are"
    ],
    "answer": 1
  },
  {
    "id": "grammar-2",
    "level": "a1",
    "title": "Present Simple",
    "theory": "Odatlar uchun ishlatiladi. He/she/it bilan fe’lga odatda -s qo‘shiladi.",
    "example": "He writes code every day.",
    "question": "He ___ code.",
    "options": [
      "write",
      "writing",
      "writes"
    ],
    "answer": 2
  },
  {
    "id": "grammar-3",
    "level": "a1",
    "title": "Articles",
    "theory": "A undosh tovushdan, an unli tovushdan oldin ishlatiladi; the aniq narsani bildiradi.",
    "example": "An apple, a book.",
    "question": "I have ___ umbrella.",
    "options": [
      "an",
      "a",
      "are"
    ],
    "answer": 0
  },
  {
    "id": "grammar-4",
    "level": "a1",
    "title": "Plural nouns",
    "theory": "Ko‘p otlarga -s yoki -es qo‘shiladi. Ayrimlari istisno.",
    "example": "Two books.",
    "question": "Three ___.",
    "options": [
      "book",
      "books",
      "book's"
    ],
    "answer": 1
  },
  {
    "id": "grammar-5",
    "level": "a1",
    "title": "Can",
    "theory": "Can qobiliyatni bildiradi; undan keyin fe’lning asosiy shakli keladi.",
    "example": "I can swim.",
    "question": "She can ___.",
    "options": [
      "swims",
      "swimming",
      "swim"
    ],
    "answer": 2
  },
  {
    "id": "grammar-6",
    "level": "a2",
    "title": "Past Simple",
    "theory": "Tugagan o‘tgan harakatni bildiradi. Regular fe’llarga -ed qo‘shiladi.",
    "example": "I worked yesterday.",
    "question": "Yesterday we ___ football.",
    "options": [
      "played",
      "play",
      "playing"
    ],
    "answer": 0
  },
  {
    "id": "grammar-7",
    "level": "a2",
    "title": "Present Continuous",
    "theory": "Hozir davom etayotgan harakat: am/is/are + verb-ing.",
    "example": "I am studying now.",
    "question": "They ___ coding now.",
    "options": [
      "is",
      "are",
      "am"
    ],
    "answer": 1
  },
  {
    "id": "grammar-8",
    "level": "a2",
    "title": "Comparatives",
    "theory": "Qisqa sifatlarga -er, uzun sifatlarga more qo‘shiladi.",
    "example": "This app is faster.",
    "question": "This task is ___ than that one.",
    "options": [
      "easy",
      "easiest",
      "easier"
    ],
    "answer": 2
  },
  {
    "id": "grammar-9",
    "level": "a2",
    "title": "Going to",
    "theory": "Oldindan rejalangan kelajak harakati uchun be going to ishlatiladi.",
    "example": "I am going to study.",
    "question": "We are going to ___ a website.",
    "options": [
      "build",
      "built",
      "building"
    ],
    "answer": 0
  },
  {
    "id": "grammar-10",
    "level": "a2",
    "title": "Countable and uncountable",
    "theory": "Many sanaladigan, much sanalmaydigan otlar bilan ishlatiladi.",
    "example": "Many books, much water.",
    "question": "How ___ water?",
    "options": [
      "many",
      "much",
      "few"
    ],
    "answer": 1
  },
  {
    "id": "grammar-11",
    "level": "b1",
    "title": "Present Perfect",
    "theory": "Have/has + past participle; o‘tgan harakatning hozirga aloqasini bildiradi.",
    "example": "I have finished the task.",
    "question": "She has ___ the code.",
    "options": [
      "write",
      "wrote",
      "written"
    ],
    "answer": 2
  },
  {
    "id": "grammar-12",
    "level": "b1",
    "title": "First Conditional",
    "theory": "If + present simple, will + base verb; real kelajak ehtimoli.",
    "example": "If it rains, I will stay home.",
    "question": "If I study, I ___ improve.",
    "options": [
      "will",
      "would",
      "did"
    ],
    "answer": 0
  },
  {
    "id": "grammar-13",
    "level": "b1",
    "title": "Passive voice",
    "theory": "Be + past participle; e’tibor harakat obyektiga qaratiladi.",
    "example": "The file was saved.",
    "question": "The app was ___ yesterday.",
    "options": [
      "release",
      "released",
      "releasing"
    ],
    "answer": 1
  },
  {
    "id": "grammar-14",
    "level": "b1",
    "title": "Relative clauses",
    "theory": "Who odam, which narsa haqida qo‘shimcha ma’lumot beradi.",
    "example": "The developer who helped me.",
    "question": "The tool ___ I use is free.",
    "options": [
      "who",
      "where",
      "which"
    ],
    "answer": 2
  },
  {
    "id": "grammar-15",
    "level": "b1",
    "title": "Past Continuous",
    "theory": "Was/were + verb-ing; o‘tmishda davom etayotgan harakat.",
    "example": "I was coding at eight.",
    "question": "They ___ studying.",
    "options": [
      "were",
      "was",
      "is"
    ],
    "answer": 0
  },
  {
    "id": "grammar-16",
    "level": "b2",
    "title": "Third Conditional",
    "theory": "If + past perfect, would have + past participle; amalga oshmagan o‘tgan shart.",
    "example": "If I had tested it, I would have found the bug.",
    "question": "If we had left earlier, we ___ arrived on time.",
    "options": [
      "will have",
      "would have",
      "would"
    ],
    "answer": 1
  },
  {
    "id": "grammar-17",
    "level": "b2",
    "title": "Past Perfect",
    "theory": "Had + past participle; boshqa o‘tgan hodisadan oldingi harakat.",
    "example": "The server had stopped before we arrived.",
    "question": "She had ___ before noon.",
    "options": [
      "leave",
      "lefting",
      "left"
    ],
    "answer": 2
  },
  {
    "id": "grammar-18",
    "level": "b2",
    "title": "Modal deduction",
    "theory": "Must kuchli taxmin, might ehtimol, can't imkonsizlikni bildiradi.",
    "example": "The lights are off; he might be away.",
    "question": "It ___ be a bug, but I am not sure.",
    "options": [
      "might",
      "mustn't",
      "can't"
    ],
    "answer": 0
  },
  {
    "id": "grammar-19",
    "level": "b2",
    "title": "Reported speech",
    "theory": "O‘tgan reporting verb bilan zamon ko‘pincha orqaga siljiydi.",
    "example": "He said he was tired.",
    "question": "She said she ___ busy.",
    "options": [
      "am",
      "was",
      "be"
    ],
    "answer": 1
  },
  {
    "id": "grammar-20",
    "level": "b2",
    "title": "Concession",
    "theory": "Although qarama-qarshi fikrlarni bog‘laydi.",
    "example": "Although it was difficult, we finished.",
    "question": "___ it was slow, it worked.",
    "options": [
      "Because of",
      "Despite of",
      "Although"
    ],
    "answer": 2
  }
,
{"id":"grammar-21","level":"a1","title":"Possessives","theory":"My, your, his, her egalikni bildiradi.","example":"This is my laptop.","question":"I own this. It is ___ laptop.","options":["my","me","I"],"answer":0},
{"id":"grammar-22","level":"a1","title":"There is / are","theory":"Birlik uchun there is, ko‘plik uchun there are.","example":"There are two books.","question":"There ___ three files.","options":["is","are","am"],"answer":1},
{"id":"grammar-23","level":"a1","title":"Imperatives","theory":"Buyruq uchun fe’lning asosiy shakli ishlatiladi.","example":"Open the file.","question":"___ the door, please.","options":["Opening","Opened","Close"],"answer":2},
{"id":"grammar-24","level":"a1","title":"Prepositions","theory":"In ichida, on ustida, under ostida.","example":"The book is on the desk.","question":"The keys are inside the box: they are ___ it.","options":["in","on","under"],"answer":0},
{"id":"grammar-25","level":"a1","title":"Question words","theory":"Where joyni, when vaqtni, who shaxsni so‘raydi.","example":"Where do you live?","question":"___ is your birthday?","options":["Who","When","Where"],"answer":1},
{"id":"grammar-26","level":"a2","title":"Adverbs of frequency","theory":"Usually va often asosiy fe’ldan oldin keladi.","example":"I often read.","question":"I ___ study after lunch.","options":["every","many","usually"],"answer":2},
{"id":"grammar-27","level":"a2","title":"Superlatives","theory":"Qisqa sifatlarda the + -est ishlatiladi.","example":"The fastest car.","question":"This is the ___ route.","options":["shortest","shorter","short"],"answer":0},
{"id":"grammar-28","level":"a2","title":"Should","theory":"Should maslahat beradi; keyin asosiy fe’l keladi.","example":"You should rest.","question":"You should ___ more.","options":["studying","study","studied"],"answer":1},
{"id":"grammar-29","level":"a2","title":"Some and any","theory":"Any ko‘pincha inkor gaplarda ishlatiladi.","example":"I don't have any money.","question":"We don't have ___ tickets.","options":["much","a","any"],"answer":2},
{"id":"grammar-30","level":"a2","title":"Past questions","theory":"Did bilan savolda asosiy fe’l o‘zgarmaydi.","example":"Did you work?","question":"Did she ___ yesterday?","options":["call","called","calls"],"answer":0},
{"id":"grammar-31","level":"b1","title":"Second Conditional","theory":"If + past simple, would + base verb farazni bildiradi.","example":"If I had time, I would travel.","question":"If I were rich, I ___ travel.","options":["will","would","did"],"answer":1},
{"id":"grammar-32","level":"b1","title":"Gerunds","theory":"Enjoy dan keyin odatda -ing shakli keladi.","example":"I enjoy coding.","question":"She enjoys ___.","options":["read","to read","reading"],"answer":2},
{"id":"grammar-33","level":"b1","title":"Infinitives","theory":"Want dan keyin to + fe’l ishlatiladi.","example":"I want to learn.","question":"We want ___ an app.","options":["to build","building","built"],"answer":0},
{"id":"grammar-34","level":"b1","title":"Used to","theory":"O‘tmishdagi, hozir davom etmaydigan odatni bildiradi.","example":"I used to play tennis.","question":"He used to ___ here.","options":["worked","work","working"],"answer":1},
{"id":"grammar-35","level":"b1","title":"Present Perfect Continuous","theory":"Have/has been + -ing davomiy harakatni bildiradi.","example":"I have been studying for an hour.","question":"She has been ___ all day.","options":["work","worked","working"],"answer":2},
{"id":"grammar-36","level":"b2","title":"Future Perfect","theory":"Will have + past participle kelajakdagi muddatgacha tugashni bildiradi.","example":"By Friday, I will have finished.","question":"By noon, we will have ___ the task.","options":["completed","complete","completing"],"answer":0},
{"id":"grammar-37","level":"b2","title":"Inversion","theory":"Never kabi inkor ravishi gap boshida kelsa yordamchi fe’l oldinga chiqadi.","example":"Never have I seen this.","question":"Never ___ I heard that before.","options":["has","have","had been"],"answer":1},
{"id":"grammar-38","level":"b2","title":"Wish","theory":"Hozirgi noreal istak uchun wish + past simple.","example":"I wish I knew the answer.","question":"I wish I ___ more time.","options":["have","will have","had"],"answer":2},
{"id":"grammar-39","level":"b2","title":"Mixed conditional","theory":"O‘tgan shartning hozirgi natijasi: if + past perfect, would + base verb.","example":"If I had slept, I would feel better now.","question":"If I had studied, I ___ know the answer now.","options":["would","will","had"],"answer":0},
{"id":"grammar-40","level":"b2","title":"Participle clauses","theory":"Bir xil ega bo‘lsa -ing clause qo‘shimcha harakatni bildirishi mumkin.","example":"Walking home, I saw a friend.","question":"___ the code, I noticed a bug.","options":["Review","Reviewing","Reviewed by"],"answer":1}
];

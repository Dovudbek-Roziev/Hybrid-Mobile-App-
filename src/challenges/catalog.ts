export type Difficulty = 'easy' | 'medium' | 'hard';
export type Challenge = {id:string;title:string;difficulty:Difficulty;task:string;starter:string;hint:string;solution:string};
export const challenges: Challenge[] = [
  {
    "id": "challenge-1",
    "title": "Ikki son yig‘indisi",
    "difficulty": "easy",
    "task": "Ikki sonni qo‘shing.",
    "starter": "function solve(a,b) {\n  // TODO\n}",
    "hint": "return va + operatori",
    "solution": "function solve(a,b) {\n  return a+b;\n}"
  },
  {
    "id": "challenge-2",
    "title": "Juft son",
    "difficulty": "easy",
    "task": "Son juft ekanini aniqlang.",
    "starter": "function solve(n) {\n  // TODO\n}",
    "hint": "Qoldiq operatori %",
    "solution": "function solve(n) {\n  return n%2===0;\n}"
  },
  {
    "id": "challenge-3",
    "title": "Eng katta son",
    "difficulty": "easy",
    "task": "Ikki sonning kattasini qaytaring.",
    "starter": "function solve(a,b) {\n  // TODO\n}",
    "hint": "Math.max",
    "solution": "function solve(a,b) {\n  return Math.max(a,b);\n}"
  },
  {
    "id": "challenge-4",
    "title": "Matn uzunligi",
    "difficulty": "easy",
    "task": "Matn uzunligini qaytaring.",
    "starter": "function solve(s) {\n  // TODO\n}",
    "hint": "length xossasi",
    "solution": "function solve(s) {\n  return s.length;\n}"
  },
  {
    "id": "challenge-5",
    "title": "Massiv yig‘indisi",
    "difficulty": "easy",
    "task": "Massivdagi sonlarni qo‘shing.",
    "starter": "function solve(a) {\n  // TODO\n}",
    "hint": "reduce va boshlang‘ich 0",
    "solution": "function solve(a) {\n  return a.reduce((s,n)=>s+n,0);\n}"
  },
  {
    "id": "challenge-6",
    "title": "Matnni teskari qilish",
    "difficulty": "easy",
    "task": "Matn belgilarini teskari tartiblang.",
    "starter": "function solve(s) {\n  // TODO\n}",
    "hint": "Array.from va reverse",
    "solution": "function solve(s) {\n  return Array.from(s).reverse().join('');\n}"
  },
  {
    "id": "challenge-7",
    "title": "Musbat sonlar",
    "difficulty": "easy",
    "task": "Faqat musbat sonlarni qaytaring.",
    "starter": "function solve(a) {\n  // TODO\n}",
    "hint": "filter",
    "solution": "function solve(a) {\n  return a.filter(n=>n>0);\n}"
  },
  {
    "id": "challenge-8",
    "title": "Takrorlarni olib tashlash",
    "difficulty": "medium",
    "task": "Massivdagi takroriy qiymatlarni olib tashlang.",
    "starter": "function solve(a) {\n  // TODO\n}",
    "hint": "Set",
    "solution": "function solve(a) {\n  return [...new Set(a)];\n}"
  },
  {
    "id": "challenge-9",
    "title": "Palindrome",
    "difficulty": "medium",
    "task": "Matn ikki tomondan bir xil o‘qilishini tekshiring.",
    "starter": "function solve(s) {\n  // TODO\n}",
    "hint": "Teskari matn bilan solishtiring",
    "solution": "function solve(s) {\n  return s===Array.from(s).reverse().join('');\n}"
  },
  {
    "id": "challenge-10",
    "title": "Factorial",
    "difficulty": "medium",
    "task": "0 yoki musbat butun son factorialini hisoblang (n <= 18).",
    "starter": "function solve(n) {\n  // TODO\n}",
    "hint": "1 dan n gacha ko‘paytiring",
    "solution": "function solve(n) {\n  return Array.from({length:n},(_,i)=>i+1).reduce((p,x)=>p*x,1);\n}"
  },
  {
    "id": "challenge-11",
    "title": "Chastota jadvali",
    "difficulty": "medium",
    "task": "Matndagi belgilar sonini Map orqali hisoblang.",
    "starter": "function solve(s) {\n  // TODO\n}",
    "hint": "Map.get va Map.set",
    "solution": "function solve(s) {\n  return Array.from(s).reduce((m,c)=>m.set(c,(m.get(c)??0)+1),new Map());\n}"
  },
  {
    "id": "challenge-12",
    "title": "Binary search",
    "difficulty": "hard",
    "task": "Saralangan massivdan x indeksini toping, yo‘q bo‘lsa -1.",
    "starter": "function solve(a,x) {\n  // TODO\n}",
    "hint": "Qidiruv chegaralarini har safar yarmiga qisqartiring",
    "solution": "function solve(a,x) {\n  return (()=>{let l=0,r=a.length-1;while(l<=r){const m=Math.floor((l+r)/2);if(a[m]===x)return m;if(a[m]<x)l=m+1;else r=m-1;}return -1;})();\n}"
  }
];

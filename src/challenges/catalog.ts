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
,
{"id":"challenge-13","title":"Minimum","difficulty":"easy","task":"Bo‘sh bo‘lmagan sonlar massividagi minimumni toping.","starter":"function solve(a) {\n  // TODO\n}","hint":"Math.min","solution":"function solve(a) {\n  return Math.min(...a);\n}"},
{"id":"challenge-14","title":"Toq sonlar","difficulty":"easy","task":"Toq butun sonlarni ajrating.","starter":"function solve(a) {\n  // TODO\n}","hint":"filter","solution":"function solve(a) {\n  return a.filter(n=>n%2!==0);\n}"},
{"id":"challenge-15","title":"Kvadratlar","difficulty":"easy","task":"Har bir sonning kvadratini qaytaring.","starter":"function solve(a) {\n  // TODO\n}","hint":"map","solution":"function solve(a) {\n  return a.map(n=>n*n);\n}"},
{"id":"challenge-16","title":"So‘zlar soni","difficulty":"easy","task":"Bo‘shliqlar bilan ajratilgan so‘zlarni sanang.","starter":"function solve(s) {\n  // TODO\n}","hint":"trim va split","solution":"function solve(s) {\n  return s.trim()?s.trim().split(/\\s+/).length:0;\n}"},
{"id":"challenge-17","title":"Anagram","difficulty":"medium","task":"Ikki matn bir xil belgilar to‘plamiga ega ekanini tekshiring (registr muhim).","starter":"function solve(a,b) {\n  // TODO\n}","hint":"Belgilarni saralang","solution":"function solve(a,b) {\n  return Array.from(a).sort().join('')===Array.from(b).sort().join('');\n}"},
{"id":"challenge-18","title":"Intersection","difficulty":"medium","task":"Ikki massivning noyob umumiy qiymatlarini toping.","starter":"function solve(a,b) {\n  // TODO\n}","hint":"Set va filter","solution":"function solve(a,b) {\n  return [...new Set(a)].filter(x=>new Set(b).has(x));\n}"},
{"id":"challenge-19","title":"Chunk","difficulty":"medium","task":"Massivni k o‘lchamli guruhlarga ajrating (k musbat butun).","starter":"function solve(a,k) {\n  // TODO\n}","hint":"slice","solution":"function solve(a,k) {\n  return Array.from({length:Math.ceil(a.length/k)},(_,i)=>a.slice(i*k,(i+1)*k));\n}"},
{"id":"challenge-20","title":"Flatten","difficulty":"medium","task":"Ichma-ich massivni bir darajali qiling.","starter":"function solve(a) {\n  // TODO\n}","hint":"flat","solution":"function solve(a) {\n  return a.flat(Infinity);\n}"},
{"id":"challenge-21","title":"Balanced brackets","difficulty":"hard","task":"Faqat ()[]{} belgilaridan iborat matnda qavslar muvozanatini tekshiring.","starter":"function solve(s) {\n  // TODO\n}","hint":"Stack","solution":"function solve(s) {\n  return (()=>{const stack=[];const pairs={')':'(',']':'[','}':'{'};for(const c of s){if('([{'.includes(c))stack.push(c);else if(stack.pop()!==pairs[c])return false;}return stack.length===0;})();\n}"},
{"id":"challenge-22","title":"Maximum subarray","difficulty":"hard","task":"Bo‘sh bo‘lmagan sonlar massivida eng katta uzluksiz qism yig‘indisini toping.","starter":"function solve(a) {\n  // TODO\n}","hint":"Kadane algoritmi","solution":"function solve(a) {\n  return (()=>{let best=a[0],cur=a[0];for(const n of a.slice(1)){cur=Math.max(n,cur+n);best=Math.max(best,cur);}return best;})();\n}"}
];

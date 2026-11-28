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
,
{"id":"challenge-23","title":"Average","difficulty":"easy","task":"Bo‘sh bo‘lmagan massivning o‘rtacha qiymatini toping.","starter":"function solve(a) {\n  // TODO\n}","hint":"Yig‘indini uzunlikka bo‘ling","solution":"function solve(a) {\n  return a.reduce((s,n)=>s+n,0)/a.length;\n}"},
{"id":"challenge-24","title":"Count vowels","difficulty":"easy","task":"Inglizcha matndagi unli harflarni sanang.","starter":"function solve(s) {\n  // TODO\n}","hint":"Regular expression","solution":"function solve(s) {\n  return (s.match(/[aeiou]/gi)||[]).length;\n}"},
{"id":"challenge-25","title":"Clamp","difficulty":"easy","task":"Sonni min va max chegarasida saqlang.","starter":"function solve(n,min,max) {\n  // TODO\n}","hint":"Math.min va Math.max","solution":"function solve(n,min,max) {\n  return Math.min(max,Math.max(min,n));\n}"},
{"id":"challenge-26","title":"FizzBuzz","difficulty":"easy","task":"1 dan n gacha FizzBuzz massivini yarating.","starter":"function solve(n) {\n  // TODO\n}","hint":"Avval 15 ga bo‘linishni tekshiring","solution":"function solve(n) {\n  return Array.from({length:n},(_,i)=>{const x=i+1;return x%15===0?'FizzBuzz':x%3===0?'Fizz':x%5===0?'Buzz':String(x)});\n}"},
{"id":"challenge-27","title":"Celsius","difficulty":"easy","task":"Celsius qiymatini Fahrenheit ga aylantiring.","starter":"function solve(c) {\n  // TODO\n}","hint":"9/5 va 32","solution":"function solve(c) {\n  return c*9/5+32;\n}"},
{"id":"challenge-28","title":"Object keys","difficulty":"easy","task":"Obyektning enumerable kalitlarini qaytaring.","starter":"function solve(obj) {\n  // TODO\n}","hint":"Object.keys","solution":"function solve(obj) {\n  return Object.keys(obj);\n}"},
{"id":"challenge-29","title":"Sort numbers","difficulty":"easy","task":"Sonlarni o‘sish tartibida, originalni o‘zgartirmasdan saralang.","starter":"function solve(a) {\n  // TODO\n}","hint":"Nusxa va comparator","solution":"function solve(a) {\n  return [...a].sort((x,y)=>x-y);\n}"},
{"id":"challenge-30","title":"Count positives","difficulty":"easy","task":"Musbat sonlar sonini toping.","starter":"function solve(a) {\n  // TODO\n}","hint":"filter","solution":"function solve(a) {\n  return a.filter(n=>n>0).length;\n}"},
{"id":"challenge-31","title":"First match","difficulty":"easy","task":"Massivdagi birinchi manfiy sonni toping.","starter":"function solve(a) {\n  // TODO\n}","hint":"find","solution":"function solve(a) {\n  return a.find(n=>n<0);\n}"},
{"id":"challenge-32","title":"Range","difficulty":"easy","task":"0 dan n-1 gacha sonlar massivi (n musbat butun).","starter":"function solve(n) {\n  // TODO\n}","hint":"Array.from","solution":"function solve(n) {\n  return Array.from({length:n},(_,i)=>i);\n}"},
{"id":"challenge-33","title":"Two sum","difficulty":"medium","task":"Yig‘indisi target bo‘lgan ikki indeksni toping yoki null qaytaring.","starter":"function solve(a,target) {\n  // TODO\n}","hint":"Map orqali oldingi qiymatlarni saqlang","solution":"function solve(a,target) {\n  return (()=>{const m=new Map();for(let i=0;i<a.length;i++){if(m.has(target-a[i]))return [m.get(target-a[i]),i];m.set(a[i],i)}return null})();\n}"},
{"id":"challenge-34","title":"Group by","difficulty":"medium","task":"Obyektlarni berilgan key qiymati bo‘yicha Map ichida guruhlang.","starter":"function solve(a,key) {\n  // TODO\n}","hint":"Map va reduce","solution":"function solve(a,key) {\n  return a.reduce((m,x)=>{const k=x[key];m.set(k,[...(m.get(k)||[]),x]);return m},new Map());\n}"},
{"id":"challenge-35","title":"Rotate array","difficulty":"medium","task":"Massivni k qadam o‘ngga aylantiring (k manfiy emas).","starter":"function solve(a,k) {\n  // TODO\n}","hint":"Modulo va slice","solution":"function solve(a,k) {\n  return a.length?(()=>{const n=k%a.length;return [...a.slice(a.length-n),...a.slice(0,a.length-n)]})():[];\n}"},
{"id":"challenge-36","title":"Missing number","difficulty":"medium","task":"0..n oralig‘idagi bitta yetishmayotgan sonni toping.","starter":"function solve(a) {\n  // TODO\n}","hint":"Arifmetik progressiya","solution":"function solve(a) {\n  return a.length*(a.length+1)/2-a.reduce((s,n)=>s+n,0);\n}"},
{"id":"challenge-37","title":"Merge sorted","difficulty":"medium","task":"Ikki saralangan sonlar massivini birlashtiring.","starter":"function solve(a,b) {\n  // TODO\n}","hint":"Ikki pointer","solution":"function solve(a,b) {\n  return (()=>{let i=0,j=0;const out=[];while(i<a.length&&j<b.length)out.push(a[i]<=b[j]?a[i++]:b[j++]);return out.concat(a.slice(i),b.slice(j))})();\n}"},
{"id":"challenge-38","title":"Valid email shape","difficulty":"medium","task":"Oddiy email shaklini tekshiring; bu to‘liq RFC validatsiyasi emas.","starter":"function solve(s) {\n  // TODO\n}","hint":"Regex","solution":"function solve(s) {\n  return /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(s);\n}"},
{"id":"challenge-39","title":"Memoize unary","difficulty":"medium","task":"Bitta argumentli sof funksiya uchun cache yarating.","starter":"function solve(fn) {\n  // TODO\n}","hint":"Map closure","solution":"function solve(fn) {\n  return (()=>{const m=new Map();return x=>{if(!m.has(x))m.set(x,fn(x));return m.get(x)}})();\n}"},
{"id":"challenge-40","title":"Longest unique substring","difficulty":"hard","task":"Takrorsiz eng uzun substring uzunligini toping.","starter":"function solve(s) {\n  // TODO\n}","hint":"Sliding window","solution":"function solve(s) {\n  return (()=>{const a=Array.from(s),m=new Map();let l=0,b=0;for(let r=0;r<a.length;r++){l=Math.max(l,(m.get(a[r])??-1)+1);m.set(a[r],r);b=Math.max(b,r-l+1)}return b})();\n}"},
{"id":"challenge-41","title":"Coin change","difficulty":"hard","task":"Musbat butun coin qiymatlari bilan amount uchun minimal coin sonini toping yoki -1.","starter":"function solve(coins,amount) {\n  // TODO\n}","hint":"Dynamic programming","solution":"function solve(coins,amount) {\n  return (()=>{const d=Array(amount+1).fill(Infinity);d[0]=0;for(let i=1;i<=amount;i++)for(const c of coins)if(c<=i)d[i]=Math.min(d[i],d[i-c]+1);return Number.isFinite(d[amount])?d[amount]:-1})();\n}"},
{"id":"challenge-42","title":"Graph BFS","difficulty":"hard","task":"Adjacency Map orqali start dan yetib boriladigan tugunlarni BFS tartibida qaytaring.","starter":"function solve(graph,start) {\n  // TODO\n}","hint":"Queue va visited Set","solution":"function solve(graph,start) {\n  return (()=>{const q=[start],seen=new Set(q);for(let i=0;i<q.length;i++)for(const v of graph.get(q[i])??[])if(!seen.has(v)){seen.add(v);q.push(v)}return q})();\n}"}
];

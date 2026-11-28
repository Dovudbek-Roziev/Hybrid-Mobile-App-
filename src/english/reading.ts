export type Reading = {id:string;level:'a1'|'a2'|'b1'|'b2';title:string;passage:string;translation:string;question:string;options:string[];answer:number};
export const readings: Reading[] = [
  {
    "id": "reading-1",
    "level": "a1",
    "title": "A computer",
    "passage": "A computer has a screen and a keyboard. I use it to write code.",
    "translation": "Kompyuterda ekran va klaviatura bor. Men undan kod yozish uchun foydalanaman.",
    "question": "What do I use the computer for?",
    "options": [
      "Cooking",
      "Writing code",
      "Swimming"
    ],
    "answer": 1
  },
  {
    "id": "reading-2",
    "level": "a1",
    "title": "My first program",
    "passage": "I write a small program. It prints Hello on the screen.",
    "translation": "Men kichik dastur yozaman. U ekranga Hello chiqaradi.",
    "question": "What does it print?",
    "options": [
      "Hello",
      "Goodbye",
      "Nothing"
    ],
    "answer": 0
  },
  {
    "id": "reading-3",
    "level": "a1",
    "title": "Files",
    "passage": "A file has a name. I save my work in a file.",
    "translation": "Faylning nomi bor. Men ishimni faylda saqlayman.",
    "question": "Where do I save my work?",
    "options": [
      "In a bag",
      "On paper",
      "In a file"
    ],
    "answer": 2
  },
  {
    "id": "reading-4",
    "level": "a1",
    "title": "A website",
    "passage": "A website has pages. I open a page in my browser.",
    "translation": "Veb-saytda sahifalar bor. Men sahifani brauzerda ochaman.",
    "question": "What opens the page?",
    "options": [
      "A browser",
      "A keyboard",
      "A printer"
    ],
    "answer": 0
  },
  {
    "id": "reading-5",
    "level": "a1",
    "title": "A button",
    "passage": "The app has a blue button. I press it to open a menu.",
    "translation": "Ilovada ko‘k tugma bor. Men menyuni ochish uchun uni bosaman.",
    "question": "What opens when I press it?",
    "options": [
      "A file",
      "A menu",
      "A book"
    ],
    "answer": 1
  },
  {
    "id": "reading-6",
    "level": "a2",
    "title": "Variables",
    "passage": "A variable holds a value. In JavaScript, let allows us to assign a new value later.",
    "translation": "O‘zgaruvchi qiymat saqlaydi. JavaScriptda let keyin yangi qiymat berishga imkon beradi.",
    "question": "Which keyword allows reassignment?",
    "options": [
      "const",
      "return",
      "let"
    ],
    "answer": 2
  },
  {
    "id": "reading-7",
    "level": "a2",
    "title": "Functions",
    "passage": "A function groups instructions. It can receive arguments and return a result.",
    "translation": "Funksiya ko‘rsatmalarni birlashtiradi. U argumentlar qabul qilib natija qaytarishi mumkin.",
    "question": "What can a function return?",
    "options": [
      "A result",
      "Only a name",
      "Only a comment"
    ],
    "answer": 0
  },
  {
    "id": "reading-8",
    "level": "a2",
    "title": "Git",
    "passage": "Git records changes to files. A commit saves a snapshot of tracked work.",
    "translation": "Git fayllardagi o‘zgarishlarni qayd etadi. Commit kuzatiladigan ishning holatini saqlaydi.",
    "question": "What saves a snapshot?",
    "options": [
      "A browser",
      "A commit",
      "A password"
    ],
    "answer": 1
  },
  {
    "id": "reading-9",
    "level": "a2",
    "title": "JSON",
    "passage": "JSON is a text format for exchanging data. Objects contain key-value pairs.",
    "translation": "JSON ma’lumot almashish uchun matn formatidir. Obyektlarda kalit-qiymat juftliklari bor.",
    "question": "What do JSON objects contain?",
    "options": [
      "Images only",
      "Functions only",
      "Key-value pairs"
    ],
    "answer": 2
  },
  {
    "id": "reading-10",
    "level": "a2",
    "title": "Debugging",
    "passage": "A developer reads error messages and checks the code. Small tests help locate a problem.",
    "translation": "Dasturchi xato xabarlarini o‘qib kodni tekshiradi. Kichik testlar muammoni topishga yordam beradi.",
    "question": "What helps locate a problem?",
    "options": [
      "Small tests",
      "Ignoring errors",
      "Deleting everything"
    ],
    "answer": 0
  },
  {
    "id": "reading-11",
    "level": "b1",
    "title": "REST API",
    "passage": "A client sends an HTTP request to a server. The server processes it and returns a response with a status code.",
    "translation": "Mijoz serverga HTTP so‘rov yuboradi. Server uni qayta ishlab holat kodi bilan javob qaytaradi.",
    "question": "What accompanies the response?",
    "options": [
      "A keyboard",
      "A status code",
      "A Git branch"
    ],
    "answer": 1
  },
  {
    "id": "reading-12",
    "level": "b1",
    "title": "React state",
    "passage": "State represents information that can change over time. Updating state schedules a new render so the interface can reflect the change.",
    "translation": "State vaqt davomida o‘zgaradigan ma’lumotni ifodalaydi. Uni yangilash interfeys o‘zgarishni aks ettirishi uchun yangi renderni rejalashtiradi.",
    "question": "What does updating state schedule?",
    "options": [
      "A database backup",
      "A network restart",
      "A new render"
    ],
    "answer": 2
  },
  {
    "id": "reading-13",
    "level": "b1",
    "title": "Database indexes",
    "passage": "An index can speed up queries, but it consumes storage and adds work to writes. Developers choose indexes based on query patterns.",
    "translation": "Indeks so‘rovlarni tezlashtirishi mumkin, ammo joy egallaydi va yozish ishini oshiradi. Dasturchilar indekslarni so‘rov shakllariga qarab tanlaydi.",
    "question": "What is a cost of indexes?",
    "options": [
      "Extra storage",
      "No queries",
      "Lost syntax"
    ],
    "answer": 0
  },
  {
    "id": "reading-14",
    "level": "b1",
    "title": "Unit testing",
    "passage": "A unit test checks a small piece of behavior. Tests should include normal inputs and boundary cases.",
    "translation": "Unit test xatti-harakatning kichik qismini tekshiradi. Testlar oddiy kirish qiymatlari va chegara holatlarini qamrashi kerak.",
    "question": "Which cases should tests include?",
    "options": [
      "Only random inputs",
      "Boundary cases",
      "Only successful deployments"
    ],
    "answer": 1
  },
  {
    "id": "reading-15",
    "level": "b1",
    "title": "Authentication",
    "passage": "Authentication verifies identity. Authorization determines which resources an authenticated user may access.",
    "translation": "Authentication shaxsni tasdiqlaydi. Authorization tasdiqlangan foydalanuvchi qaysi resurslarga kira olishini belgilaydi.",
    "question": "What determines access rights?",
    "options": [
      "Authentication alone",
      "Compression",
      "Authorization"
    ],
    "answer": 2
  },
  {
    "id": "reading-16",
    "level": "b2",
    "title": "Caching",
    "passage": "A cache stores reusable results to reduce repeated work. Expiration policies limit how long stale information may remain available.",
    "translation": "Cache takroriy ishni kamaytirish uchun qayta ishlatiladigan natijalarni saqlaydi. Eskirish siyosati eski ma’lumot qancha vaqt mavjud bo‘lishini cheklaydi.",
    "question": "What limits stale data lifetime?",
    "options": [
      "Expiration policies",
      "File names",
      "Screen size"
    ],
    "answer": 0
  },
  {
    "id": "reading-17",
    "level": "b2",
    "title": "Load balancing",
    "passage": "A load balancer distributes incoming requests among available servers. Health checks help avoid routing traffic to unhealthy instances.",
    "translation": "Load balancer kiruvchi so‘rovlarni mavjud serverlarga taqsimlaydi. Health check nosog‘lom instansiyalarga trafik yubormaslikka yordam beradi.",
    "question": "What identifies unhealthy instances?",
    "options": [
      "CSS",
      "Health checks",
      "SQL joins"
    ],
    "answer": 1
  },
  {
    "id": "reading-18",
    "level": "b2",
    "title": "Concurrency",
    "passage": "Concurrent tasks can make progress during overlapping periods. Shared mutable state requires careful coordination to avoid race conditions.",
    "translation": "Concurrent vazifalar ustma-ust vaqt oralig‘ida rivojlanishi mumkin. Umumiy o‘zgaruvchan holat race condition oldini olish uchun muvofiqlashtirishni talab qiladi.",
    "question": "What requires careful coordination?",
    "options": [
      "Static text",
      "Read-only constants",
      "Shared mutable state"
    ],
    "answer": 2
  },
  {
    "id": "reading-19",
    "level": "b2",
    "title": "Continuous integration",
    "passage": "CI runs automated checks when code changes are integrated. Fast feedback helps teams detect regressions before release.",
    "translation": "CI kod o‘zgarishlari birlashtirilganda avtomatik tekshiruvlarni bajaradi. Tezkor fikr-mulohaza relizdan oldin regressiyalarni aniqlashga yordam beradi.",
    "question": "What is a benefit of CI?",
    "options": [
      "Early regression detection",
      "Guaranteed absence of bugs",
      "No need for tests"
    ],
    "answer": 0
  },
  {
    "id": "reading-20",
    "level": "b2",
    "title": "Database transactions",
    "passage": "Transactions group operations into a logical unit. Atomicity ensures that either all operations commit or none of them do.",
    "translation": "Tranzaksiyalar operatsiyalarni mantiqiy birlikka birlashtiradi. Atomarlik barcha operatsiyalar tasdiqlanishini yoki hech biri tasdiqlanmasligini ta’minlaydi.",
    "question": "Which property provides all-or-nothing behavior?",
    "options": [
      "Latency",
      "Atomicity",
      "Pagination"
    ],
    "answer": 1
  }
];

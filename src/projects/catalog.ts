export type GuidedProject = {id:string;month:number;title:string;stack:string;brief:string;architecture:string;milestones:{id:string;title:string}[];rubric:string[];requirements:string[];acceptance:string[]};
export const projects: GuidedProject[] = [
  {
    "id": "project-1",
    "month": 1,
    "title": "Task Manager",
    "stack": "JavaScript",
    "brief": "Vazifalarni boshqaruvchi brauzer dasturi",
    "architecture": "DOM va localStorage",
    "milestones": [
      {
        "id": "m1",
        "title": "Vazifa modeli"
      },
      {
        "id": "m2",
        "title": "Qo‘shish va tahrirlash"
      },
      {
        "id": "m3",
        "title": "Filtrlash"
      },
      {
        "id": "m4",
        "title": "Saqlash va qayta yuklash"
      }
    ],
    "rubric": [
      "CRUD ishlashi",
      "Bo‘sh qiymat tekshiruvi",
      "Qayta yuklashda ma’lumot saqlanishi"
    ],
    "requirements": [
      "Vazifa nomi, holati va identifikatorini saqlang",
      "Qo‘shish, tahrirlash, o‘chirish va holat bo‘yicha filtr yarating",
      "localStorage xatosini boshqaring"
    ],
    "acceptance": [
      "Bo‘sh nom rad etiladi",
      "Sahifa yangilanganda vazifalar saqlanadi",
      "Filtr asl ro‘yxatni o‘zgartirmaydi"
    ]
  },
  {
    "id": "project-2",
    "month": 2,
    "title": "Async API Dashboard",
    "stack": "Advanced JavaScript",
    "brief": "API ma’lumotlarini ko‘rsatuvchi dashboard",
    "architecture": "Fetch va async/await",
    "milestones": [
      {
        "id": "m1",
        "title": "API adapter"
      },
      {
        "id": "m2",
        "title": "Loading va error holatlari"
      },
      {
        "id": "m3",
        "title": "Qidiruv"
      },
      {
        "id": "m4",
        "title": "So‘rovlarni bekor qilish"
      }
    ],
    "rubric": [
      "Xatolar boshqarilishi",
      "Eski so‘rov natijasi yangi natijani bosmasligi",
      "Qayta urinish"
    ],
    "requirements": [
      "Ochiq API yoki mahalliy fixture tanlang",
      "Loading, empty va error holatlarini ajrating",
      "AbortController orqali eski so‘rovni bekor qiling"
    ],
    "acceptance": [
      "HTTP xatosida qayta urinish mavjud",
      "Tez qidiruvda eski javob ko‘rsatilmaydi",
      "Offline fixture bilan ishlaydi"
    ]
  },
  {
    "id": "project-3",
    "month": 3,
    "title": "Typed Expense Tracker",
    "stack": "TypeScript",
    "brief": "Daromad va xarajatlar hisobi",
    "architecture": "TypeScript va storage",
    "milestones": [
      {
        "id": "m1",
        "title": "Domain turlari"
      },
      {
        "id": "m2",
        "title": "Tranzaksiya CRUD"
      },
      {
        "id": "m3",
        "title": "Hisobot"
      },
      {
        "id": "m4",
        "title": "Validatsiya"
      }
    ],
    "rubric": [
      "Strict typecheck",
      "To‘g‘ri jami",
      "Noto‘g‘ri qiymat rad etilishi"
    ],
    "requirements": [
      "Income va expense uchun discriminated union yarating",
      "Summani eng kichik pul birligida saqlang",
      "Oy bo‘yicha hisobot chiqaring"
    ],
    "acceptance": [
      "Manfiy yoki NaN summa rad etiladi",
      "Jami test misollariga mos",
      "Strict TypeScript xatosiz"
    ]
  },
  {
    "id": "project-4",
    "month": 4,
    "title": "Study Planner",
    "stack": "React",
    "brief": "O‘quv rejalari va progress interfeysi",
    "architecture": "React components va hooks",
    "milestones": [
      {
        "id": "m1",
        "title": "Komponentlar"
      },
      {
        "id": "m2",
        "title": "Formalar"
      },
      {
        "id": "m3",
        "title": "State va filtr"
      },
      {
        "id": "m4",
        "title": "Progress hisoblash"
      }
    ],
    "rubric": [
      "Immutable state",
      "Komponent testlari",
      "Qulay interfeys"
    ],
    "requirements": [
      "Dars, sana va holat modelini tuzing",
      "Komponentlarga ajrating",
      "Filtr va progressni derived state orqali hisoblang"
    ],
    "acceptance": [
      "Vazifa o‘zgarganda progress yangilanadi",
      "Bo‘sh ro‘yxat ishlaydi",
      "Form klaviatura orqali boshqariladi"
    ]
  },
  {
    "id": "project-5",
    "month": 5,
    "title": "Portfolio CMS",
    "stack": "Next.js",
    "brief": "Portfolio va maqolalar sayti",
    "architecture": "Next.js routing va server rendering",
    "milestones": [
      {
        "id": "m1",
        "title": "Sahifalar"
      },
      {
        "id": "m2",
        "title": "Ma’lumot qatlami"
      },
      {
        "id": "m3",
        "title": "Tahrirlash paneli"
      },
      {
        "id": "m4",
        "title": "SEO"
      }
    ],
    "rubric": [
      "404 holati",
      "Server validatsiyasi",
      "Metadata"
    ],
    "requirements": [
      "Maqola slug va metadata modelini tuzing",
      "Public sahifalar va himoyalangan tahrirlash paneli yarating",
      "Serverda input tekshiring"
    ],
    "acceptance": [
      "Noma’lum slug 404 qaytaradi",
      "Ruxsatsiz tahrir rad etiladi",
      "Metadata har sahifaga mos"
    ]
  },
  {
    "id": "project-6",
    "month": 6,
    "title": "REST Task API",
    "stack": "Node.js / Express",
    "brief": "Vazifalar uchun himoyalangan REST API",
    "architecture": "Controller service repository",
    "milestones": [
      {
        "id": "m1",
        "title": "API kontrakti"
      },
      {
        "id": "m2",
        "title": "CRUD"
      },
      {
        "id": "m3",
        "title": "Auth va ruxsat"
      },
      {
        "id": "m4",
        "title": "Integration tests"
      }
    ],
    "rubric": [
      "HTTP statuslar",
      "Ruxsat tekshiruvi",
      "Parol xeshlash"
    ],
    "requirements": [
      "REST endpoint va status kodlarini hujjatlang",
      "Parolni xavfsiz xeshlang va auth middleware yozing",
      "Foydalanuvchi faqat o‘z vazifasiga kira olsin"
    ],
    "acceptance": [
      "Noto‘g‘ri input 400",
      "Ruxsatsiz so‘rov 401 yoki 403",
      "CRUD integration testlari mavjud"
    ]
  },
  {
    "id": "project-7",
    "month": 7,
    "title": "Inventory System",
    "stack": "MongoDB / SQL",
    "brief": "Ombor va mahsulotlar hisobi",
    "architecture": "Repository va database",
    "milestones": [
      {
        "id": "m1",
        "title": "Schema"
      },
      {
        "id": "m2",
        "title": "CRUD"
      },
      {
        "id": "m3",
        "title": "Qidiruv va indeks"
      },
      {
        "id": "m4",
        "title": "Tranzaksiya"
      }
    ],
    "rubric": [
      "Manfiy qoldiq oldini olish",
      "Parametrli SQL",
      "Indeks tahlili"
    ],
    "requirements": [
      "Mahsulot va ombor harakati modelini tuzing",
      "Qoldiqni atomar yangilang",
      "Qidiruv uchun indeks va parametrli SQL ishlating"
    ],
    "acceptance": [
      "Bir vaqtdagi chiqim manfiy qoldiq yaratmaydi",
      "SQL injection matni parametr sifatida qoladi",
      "Harakatlar tarixi saqlanadi"
    ]
  },
  {
    "id": "project-8",
    "month": 8,
    "title": "System Monitor",
    "stack": "Computer Science",
    "brief": "Mahalliy tizim resurslarini kuzatish",
    "architecture": "Node OS API va sampling",
    "milestones": [
      {
        "id": "m1",
        "title": "CPU va RAM o‘lchovi"
      },
      {
        "id": "m2",
        "title": "Namuna yig‘ish"
      },
      {
        "id": "m3",
        "title": "Tarix"
      },
      {
        "id": "m4",
        "title": "Ogohlantirish"
      }
    ],
    "rubric": [
      "Birliklar aniqligi",
      "Resurs sarfi",
      "Xatolarni boshqarish"
    ],
    "requirements": [
      "CPU va RAM o‘lchovlarini davriy yig‘ing",
      "Cheklangan tarix buferini yarating",
      "Chegara qiymatida ogohlantiring"
    ],
    "acceptance": [
      "Foizlar 0–100 oralig‘ida",
      "Bufer cheksiz o‘smaydi",
      "Timer to‘xtatilganda resurs bo‘shaydi"
    ]
  },
  {
    "id": "project-9",
    "month": 9,
    "title": "Route Planner",
    "stack": "Algorithms",
    "brief": "Grafda eng qisqa yo‘lni topish",
    "architecture": "Graph va priority queue",
    "milestones": [
      {
        "id": "m1",
        "title": "Graf modeli"
      },
      {
        "id": "m2",
        "title": "BFS"
      },
      {
        "id": "m3",
        "title": "Dijkstra"
      },
      {
        "id": "m4",
        "title": "Benchmark"
      }
    ],
    "rubric": [
      "Yo‘l topilmagan holat",
      "Manfiy vazn rad etilishi",
      "Murakkablik izohi"
    ],
    "requirements": [
      "Grafni adjacency list bilan ifodalang",
      "BFS va Dijkstra yozing",
      "Kichik va katta grafda vaqtni o‘lchang"
    ],
    "acceptance": [
      "Uzilgan grafda yo‘l yo‘qligi qaytariladi",
      "Manfiy vazn rad etiladi",
      "Ma’lum grafda optimal yo‘l topiladi"
    ]
  },
  {
    "id": "project-10",
    "month": 10,
    "title": "Booking Platform",
    "stack": "System Design",
    "brief": "Band qilish xizmatining prototipi",
    "architecture": "Modular monolith va database",
    "milestones": [
      {
        "id": "m1",
        "title": "Talablar"
      },
      {
        "id": "m2",
        "title": "API va schema"
      },
      {
        "id": "m3",
        "title": "Band qilish tranzaksiyasi"
      },
      {
        "id": "m4",
        "title": "Load test"
      }
    ],
    "rubric": [
      "Ikki marta band qilish oldini olish",
      "Idempotency",
      "Arxitektura qarorlari"
    ],
    "requirements": [
      "Xona va vaqt oralig‘i modelini tuzing",
      "Band qilishni tranzaksiya bilan himoyalang",
      "Idempotency kaliti va yuk sinovi qo‘shing"
    ],
    "acceptance": [
      "Bir xil slot ikki marta band bo‘lmaydi",
      "Takroriy so‘rov yangi band yaratmaydi",
      "Arxitektura qarorlari hujjatlangan"
    ]
  },
  {
    "id": "project-11",
    "month": 11,
    "title": "Deployment Pipeline",
    "stack": "DevOps",
    "brief": "Ilovani avtomatik tekshirish va joylashtirish",
    "architecture": "Docker va GitHub Actions",
    "milestones": [
      {
        "id": "m1",
        "title": "Dockerfile"
      },
      {
        "id": "m2",
        "title": "CI test"
      },
      {
        "id": "m3",
        "title": "Staging"
      },
      {
        "id": "m4",
        "title": "Rollback hujjati"
      }
    ],
    "rubric": [
      "Secrets repoda yo‘qligi",
      "Takrorlanuvchi build",
      "Health check"
    ],
    "requirements": [
      "Ilovani Docker image sifatida yig‘ing",
      "CI da test va build ishga tushiring",
      "Staging va rollback jarayonini hujjatlang"
    ],
    "acceptance": [
      "Secret git tarixiga kiritilmaydi",
      "Test xatosida deploy to‘xtaydi",
      "Health check muvaffaqiyatsiz relizni aniqlaydi"
    ]
  },
  {
    "id": "project-12",
    "month": 12,
    "title": "Academy SaaS",
    "stack": "Fullstack",
    "brief": "Ko‘p foydalanuvchili o‘quv platformasi",
    "architecture": "Frontend API database CI/CD",
    "milestones": [
      {
        "id": "m1",
        "title": "Talablar va tenant modeli"
      },
      {
        "id": "m2",
        "title": "Auth va rollar"
      },
      {
        "id": "m3",
        "title": "Dars va progress"
      },
      {
        "id": "m4",
        "title": "Test va xavfsizlik"
      },
      {
        "id": "m5",
        "title": "Deploy va portfolio"
      }
    ],
    "rubric": [
      "Tenant izolatsiyasi",
      "End-to-end asosiy oqim",
      "Backup va restore",
      "README"
    ],
    "requirements": [
      "Tenant, user, course va progress modelini tuzing",
      "Rollarni serverda tekshiring",
      "Asosiy oqimni testlang va backup tiklashni sinang"
    ],
    "acceptance": [
      "Tenantlar bir-birining ma’lumotini ko‘rmaydi",
      "Ro‘yxatdan o‘tishdan dars tugatishgacha oqim ishlaydi",
      "README va tiklash yo‘riqnomasi mavjud"
    ]
  }
];

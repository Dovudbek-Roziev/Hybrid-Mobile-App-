export type GuidedProject = {id:string;month:number;title:string;stack:string;brief:string;architecture:string;milestones:{id:string;title:string}[];rubric:string[]};
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
    ]
  }
];

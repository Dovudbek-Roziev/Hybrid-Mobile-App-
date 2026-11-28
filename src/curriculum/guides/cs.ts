import type { LessonGuide } from '../model';

export const csGuides = {
  "pea-8-01": {
    goal: "Binary yozuvni bitlarning o‘rin qiymati orqali o‘nlikka aylantirish.",
    plain: "Har keyingi chap o‘rin oldingisidan ikki baravar qimmat. Yoniq o‘rinlarning qiymatlarini qo‘shsangiz, son hosil bo‘ladi.",
    reflection: "Hisobni o‘ngdan 1 bilan boshlang. Har siljishda og‘irlikni ikki baravar oshiring.",
  },
  "pea-8-02": {
    goal: "Hex raqamini to‘rt bit va o‘nlik qiymat bilan bog‘lash.",
    plain: "To‘rtta bitni bittagina hex belgi bilan yozish mumkin. Masalan, 1111 ikkilik naqshi hex’da F bo‘ladi.",
    reflection: "Binary satrni o‘ngdan to‘rttalik guruhlarga ajrating. Har guruhni alohida hex qiymatga aylantiring.",
  },
  "pea-8-03": {
    goal: "Bit, byte va tezlik birligini farqlab oddiy hajm hisobini bajarish.",
    plain: "Internet tezligida 8 megabit o‘tishi bir megabyte ma’lumotga teng. Fayl hajmi va kanal tezligi birligiga qarang.",
    reflection: "Bir byte sakkiz bit. Hajmni uzatish tezligiga bo‘lishdan oldin birliklarni tenglashtiring.",
  },
  "pea-8-04": {
    goal: "Bitta bit naqshini signed va unsigned ko‘rinishda talqin qilish.",
    plain: "Bir xil sakkizta belgi o‘zgarmaydi, ularning qanday o‘qilishi o‘zgaradi. Yuqori bit signed turda manfiy ma’noga ta’sir qiladi.",
    reflection: "Bit naqshini ko‘rsangiz uning turi va kengligini ham aniqlang. Katta butun sonlarda Number aniqlik chegarasini hisobga oling.",
  },
  "pea-8-05": {
    goal: "Mask orqali flagni o‘rnatish, o‘chirish va tekshirish.",
    plain: "Bir nechta kalitning yoqilganini bitta son ichida saqlash mumkin. Mask qaysi kalitga qarashni aytadi.",
    reflection: "AND tanlaydi, OR yoqadi. O‘chirish uchun to‘ldiruvchi mask bilan AND qo‘llang.",
  },
  "pea-8-06": {
    goal: "CPU instruction olish, ajratish va bajarish qadamlarini tushuntirish.",
    plain: "Protsessor ish topshirig‘ini o‘qiydi, nima qilishini aniqlaydi va bajaradi. Ma’lumot uzoqda bo‘lsa, bajarish kutishi mumkin.",
    reflection: "Faqat GHz bilan umumiy ishlashni baholamang. Xotira kutishi va branch’lar ham vaqtga ta’sir qiladi.",
  },
  "pea-8-07": {
    goal: "Ketma-ket o‘qish va tasodifiy o‘qishning cache’ga ta’sirini tushuntirish.",
    plain: "Kitobning keyingi beti yoningizda. Har safar boshqa javonga borish ko‘proq vaqt olishi mumkin.",
    reflection: "Yonma-yon qiymatlardan foydalanish cache’ga yordam berishi mumkin. Ta’sirini takroriy o‘lchov bilan tekshiring.",
  },
  "pea-8-08": {
    goal: "Yozuv tugashi bilan diskda saqlanish kafolatini ajratish.",
    plain: "Daftarga yozish yakunlangani va daftar xavfsiz joyga qo‘yilgani alohida hodisa. Qurilma o‘chiq qolishi ikkinchisini muhim qiladi.",
    reflection: "Qayta ishga tushish yoki uzilishdan keyingi natijani tekshiring. Saqlanish kafolatini API shartnomasidan biling.",
  },
  "pea-8-09": {
    goal: "Call stack frame’lari ketma-ketligini o‘qish va chuqur chaqiruv xatosini tanish.",
    plain: "Ishlar bir-biriga tushuntirish uchun murojaat qilganda, eng oxirgi savol avval javoblanadi.",
    reflection: "Stack trace yangi chaqiruvdan tashqi chaqiruvchiga olib boradi. Chuqur recursion uchun to‘xtash chegarasi kerak.",
  },
  "pea-8-10": {
    goal: "Ikki reference bir obyektga qaraganda mutatsiya qanday tarqalishini ko‘rish.",
    plain: "Bitta daftarga ikki odam murojaat qilsa, biri sahifani o‘zgartirganda ikkinchisi ham yangi sahifani ko‘radi.",
    reflection: "Qiymat nusxasi bilan reference nusxasini farqlang. Alohida holat kerak bo‘lsa, kerakli darajada nusxalang.",
  },
  "pea-8-11": {
    goal: "Vaqtinchalik kolleksiyalar sabab xotira sarfini aniqlash va o‘lchash.",
    plain: "Barcha mahsulotlarni yangi savatga ko‘chirib keyin sanash mumkin. Kerakli sonni ko‘chirmasdan yo‘lda sanash ham mumkin.",
    reflection: "Faqat yakuniy hisob kerak bo‘lsa, ortiqcha to‘plam yaratmaydigan usulni sinang. O‘lchov bilan farqni tasdiqlang.",
  },
  "pea-8-12": {
    goal: "Keraksiz obyektga reference saqlanib qolishining oqibatini tushuntirish.",
    plain: "Ekran yopilgan bo‘lsa ham, obuna uning ma’lumotini hali ushlab turgan bo‘lishi mumkin.",
    reflection: "Listener va taymerlar uchun cleanup yozing. Obyektga yetib boradigan yo‘l bor ekan, u xotirada qolishi mumkin.",
  },
  "pea-8-13": {
    goal: "Process, operatsion tizim va kernel xizmatlarining chegarasini chizish.",
    plain: "Ilova fayl o‘qimoqchi bo‘lganda qurilmaga bevosita buyruq berish o‘rniga tizim xizmatiga murojaat qiladi.",
    reflection: "User space’dagi dastur system call orqali kernel yordamidan foydalanadi. Fayl va xotira huquqlarini kernel boshqaradi.",
  },
  "pea-8-14": {
    goal: "Process izolyatsiyasi, IPC va chiqish kodini misol bilan tushuntirish.",
    plain: "Ikki odamning daftari alohida. Biri ikkinchisiga natijani yozma xabar bilan yuboradi.",
    reflection: "Processlar odatda ajratilgan xotiraga ega. Xabar uchun IPC, ish yakunini bilish uchun exit code ishlating.",
  },
  "pea-8-15": {
    goal: "CPU og‘ir ishni worker’ga ajratish va xabar shaklini rejalash.",
    plain: "Og‘ir rasm hisobini yordamchi ishchi bajarsa, asosiy ekran bosishlarga javob bera oladi.",
    reflection: "Worker’ga aniq kirish va chiqish shakli bering. Ishga tushirish xarajatini vazifa og‘irligi bilan solishtiring.",
  },
  "pea-8-16": {
    goal: "Concurrency va parallelismni kutish hamda CPU ishi misolida ajratish.",
    plain: "Bitta oshpaz pech kutayotganda boshqa ish qiladi. Ikki oshpaz esa ayni paytda ikki ishni bajarishi mumkin.",
    reflection: "I/O ishlar birga rivojlanishi mumkin. Bir paytdagi CPU hisoblari uchun parallel ijro vositasi kerak.",
  },
  "pea-8-17": {
    goal: "Read-modify-write race condition’ini aniqlab, atomic update tanlash.",
    plain: "Ikki kassir bitta qolgan chiptani ko‘rsa, ikkalasi ham uni sotishga urinishi mumkin.",
    reflection: "Mavjudlik sharti va yozishni bir atomic amalda bajaring. O‘zgargan qatorlar sonini tekshiring.",
  },
  "pea-8-18": {
    goal: "Packet header va router orasidagi yo‘naltirishni tushuntirish.",
    plain: "Katta xabar kichik bo‘laklarda ketadi. Har bo‘lakning manzil ma’lumoti keyingi bekatga yo‘l ko‘rsatadi.",
    reflection: "Paket ichidagi yo‘naltirish ma’lumotini payload’dan farqlang. Router keyingi hopni manzil asosida tanlaydi.",
  },
  "pea-8-19": {
    goal: "TCP byte oqimi va UDP datagrammasini qo‘llanishiga qarab solishtirish.",
    plain: "Xatning har bo‘lagi tartibda kelishi kerak bo‘lsa, fayl uzatish bir yo‘lni tanlaydi. Jonli audio uchun kechikkan bo‘lakning foydasi past bo‘lishi mumkin.",
    reflection: "TCP tartibli byte oqimini beradi. Xabar chegarasini ilova qatlamida belgilash kerak.",
  },
  "pea-8-20": {
    goal: "DNS orqali nomni manzilga aylantirish va TTL ta’sirini tushuntirish.",
    plain: "Sayt nomi bir xil qoladi, server manzili o‘zgarishi mumkin. Eski manzil cache muddati tugaguncha ishlatilishi mumkin.",
    reflection: "A va AAAA qaysi manzil turini qaytarishini biling. DNS o‘zgarishida TTL’ni hisobga oling.",
  },
  "pea-8-21": {
    goal: "HTTP request va response qismlari hamda statuslarni aniqlash.",
    plain: "Bir xatda nima so‘ralgani yoziladi. Javob esa natija holati va ehtimol qo‘shimcha ma’lumot bilan keladi.",
    reflection: "Request method va header’larni, response status va body’ni tekshiring. HTTP xatosida server javob bergan bo?ladi. Transport uzilishida javob kelmasligi mumkin.",
  },
  "pea-8-22": {
    goal: "TLS orqali domenni tekshirish va ma’lumotni uzatishda himoya qilishni tushuntirish.",
    plain: "HTTPS’da brauzer server aynan so‘ralgan domen ekanini tekshiradi. Shundan keyin ma’lumot himoyalangan aloqa orqali ketadi.",
    reflection: "Hostname va sertifikat zanjiri mos bo‘lishi kerak. Ilova foydalanuvchi huquqini serverda alohida tekshiradi.",
  },
  "pea-8-23": {
    goal: "Amalga qarab Array, Set yoki Map tanlash.",
    plain: "Ro‘yxat tartibi muhim bo‘lsa massiv qulay. Faqat ID mavjudmi degan savol uchun Set mos.",
    reflection: "Ma’lumot tuzilmasini eng ko‘p ishlatiladigan amal bo‘yicha tanlang. Kalitga bog‘liq qiymat bo‘lsa Map ishlating.",
  },
  "pea-8-24": {
    goal: "Kiritma kattalashganda amal soni qanday o‘sishini hisoblash.",
    plain: "Har odamga bir marta salom berish bilan har odamni hamma bilan tanishtirish xarajati turlicha o‘sadi.",
    reflection: "Sikl sonidan ko‘ra haqiqiy bajariladigan amallarni sanang. Barcha juftlarni ko‘rish odatda kvadratik o‘sadi.",
  },
  "pea-8-25": {
    goal: "Algoritmning qo‘shimcha xotirasini va recursion stack ulushini hisoblash.",
    plain: "Kitobdagi eng katta sonni topish uchun hozirgi eng kattasini saqlash kifoya. Butun kitobning nusxasi kerak bo‘lmaydi.",
    reflection: "Xotira bahosida bir vaqtda tirik qiymatlarni sanang. Vaqtinchalik ro‘yxat va stack frame’larini ham qo‘shing.",
  },
  "pea-8-26": {
    goal: "Big O’da yetakchi hadni topib, o‘sish sinfini ajratish.",
    plain: "Kichik ro‘yxatda doimiy tayyorgarlik vaqti seziladi. Katta ro‘yxatda eng tez o‘suvchi had ustun keladi.",
    reflection: "Katta n uchun dominant hadni toping. Haqiqiy vaqtni alohida benchmark bilan o‘lchang.",
  },
  "pea-8-27": {
    goal: "Array va Set lookup’larini adolatli benchmarkda solishtirish.",
    plain: "Bir xil kalitlar va qidiruvlar ikki usul bilan tekshiriladi. Avval tayyorgarlik, keyin qidiruv vaqti alohida o‘lchanadi.",
    reflection: "Bir xil kirish va natijani saqlang. Set yaratish narxi bilan lookup narxini alohida yozing.",
  },
  "pea-9-01": {
    goal: "Massiv indeksga kirish va o‘rtadagi qo‘shish xarajatini farqlash.",
    plain: "Ro‘yxatning o‘rtasiga yangi odam kirsa, undan keyingilarning o‘rin raqami siljiydi.",
    reflection: "Indeks tez murojaat uchun qulay. Tartib o‘zgaradigan joyda barqaror identifikatorni alohida saqlang.",
  },
  "pea-9-02": {
    goal: "Linked list’da next havolasini saqlab yangi node ulash.",
    plain: "Poyezdning bir vagonidan keyin boshqasini ulash uchun oldingi bog‘lanish qayerga ketishini yo‘qotmaslik kerak.",
    reflection: "Ulashdan oldin eski next havolani saqlang. Ro‘yxat indeksiga borish boshidan yurishni talab qiladi.",
  },
  "pea-9-03": {
    goal: "Stack bilan ochuvchi va yopuvchi qavslarning mosligini tekshirish.",
    plain: "Ichkarida ochilgan quti tashqi qutidan avval yopiladi. Qavslar ham shu tartibda juftlashadi.",
    reflection: "Yopuvchi qavs stack tepasiga mos bo‘lsin. Yakunda ochiq qavs qolmaganini tekshiring.",
  },
  "pea-9-04": {
    goal: "FIFO navbatida head indeks bilan chiqarish amalini yozish.",
    plain: "Xizmat ko‘rsatilgan odamlarni ro‘yxat boshidan har safar ko‘chirish shart emas. Hozirgi bosh o‘rni belgilanadi.",
    reflection: "Head’ni oshirib navbatdan o‘qing. Uzun yashaydigan navbatda ishlatilgan prefiksni vaqti-vaqti bilan tozalang.",
  },
  "pea-9-05": {
    goal: "Cheklangan ring buffer’da aylanadigan indeks va full holatini boshqarish.",
    plain: "Soat mili oxirgi raqamdan keyin boshiga qaytadi. Buffer indeksi ham sig‘im bo‘yicha aylanadi.",
    reflection: "Modulo bilan chegaradan o‘ting. Bo‘sh va to‘la holatni count yoki alohida belgi orqali ajrating.",
  },
  "pea-9-06": {
    goal: "Hash table’da collision nima sababdan paydo bo‘lishini tushuntirish.",
    plain: "Ikki xil odam ismi bir xil harf bilan boshlanishi mumkin. Bir javonga tushish ularning bitta odamligini bildirmaydi.",
    reflection: "Bucket topilgach kalit tengligini ham tekshiring. Collision uchun ma’lumotni saqlash strategiyasini tanlang.",
  },
  "pea-9-07": {
    goal: "Frequency map bilan har bir qiymat necha marta uchrashini hisoblash.",
    plain: "So‘z yana uchraganda daftarida yangi qator ochilmaydi, o‘sha so‘zning soniga bittasi qo‘shiladi.",
    reflection: "Yo‘q key sanog‘ini 0 dan boshlang. Katta va kichik harfni birlashtirish qoidasini vazifadan kelib chiqib tanlang.",
  },
  "pea-9-08": {
    goal: "Daraxtni preorder, inorder va postorder tartibida yurish natijasini hisoblash.",
    plain: "Papka nomini avval o‘qish yoki ichidagi fayllarni ko‘rib bo‘lgach unga qaytish turli yurish tartiblarini beradi.",
    reflection: "Kerakli natijaga qarab root qachon chiqarilishini tanlang. Postorder avval bolalarni ko‘radi.",
  },
  "pea-9-09": {
    goal: "BST qidiruvida invariant va daraxt balandligining rolini tushuntirish.",
    plain: "Har tugun yo‘l belgisi. Kichik qiymatlar chapga, katta qiymatlar o‘ngga yo‘naltiriladi.",
    reflection: "Qidiruv narxi balandlikka bog‘liq. Ketma-ket qo‘shish daraxtni bir tomonga og‘dirishi mumkin.",
  },
  "pea-9-10": {
    goal: "Binary heap’da minimum, parent va sift qadamlarini aniqlash.",
    plain: "Eng shoshilinch vazifa tepada tursa, uni ko‘rish oson. Qolgan vazifalarning hammasini tartiblash talab qilinmaydi.",
    reflection: "Heap root eng ustuvor qiymatni beradi. Qo‘shish va chiqarishda faqat ta’sirlangan yo‘lni tuzating.",
  },
  "pea-9-11": {
    goal: "Graph uchun adjacency list yoki matrix tanlab joy xarajatini hisoblash.",
    plain: "Har bekatdan qayerga yo‘l borligini alohida yozish mumkin. Hamma bekat juftlari uchun katak ochish ikkinchi yo‘l.",
    reflection: "Siyrak graph’da list ko‘pincha ixcham. Edge mavjudligini tez so‘rash muhim bo‘lsa matrix narxini baholang.",
  },
  "pea-9-12": {
    goal: "Recursion masalasida base case va qisqaradigan qadamni yozish.",
    plain: "Izoh javoblari ichidan harakat qilganda bir xil qoida takrorlanadi. Javobi yo‘q izohda yurish tugaydi.",
    reflection: "Har chaqiruv kichikroq masalaga o‘tsin. Eng kichik va kutilmagan kiritmalarni alohida sinang.",
  },
  "pea-9-13": {
    goal: "Saralanmagan kolleksiyada birinchi mos element indeksini topish.",
    plain: "Qog‘ozlar tartibsiz bo‘lsa, kerakli belgi topilguncha boshidan birma-bir qaraysiz.",
    reflection: "Birinchi mos kelishda to‘xtash mumkin. Topilmaganda qaytgan −1 qiymatini ochiq tekshiring.",
  },
  "pea-9-14": {
    goal: "Binary search bilan birinchi mos chegarani half-open oraliqda topish.",
    plain: "Lug‘at o‘rtasini ochib, so‘z oldinmi yoki keyinmi, bilib olasiz. Keraksiz yarim bo‘lak qolmaydi.",
    reflection: "Monoton shartni tekshiring. Lower bound uchun o‘ng chegara massiv uzunligidan boshlanishi mumkin.",
  },
  "pea-9-15": {
    goal: "Bubble sort passidan keyin qaysi qism tayyor bo‘lishini oldindan aytish.",
    plain: "Qo‘shni ikkita karta noto‘g‘ri joylashsa, ularni almashtirasiz. Shu harakatdan katta karta oxirga suriladi.",
    reflection: "Har passdan keyin tayyor suffixni ko‘rmang. Hech bir almashtirish bo‘lmasa, jarayonni tugatish mumkin.",
  },
  "pea-9-16": {
    goal: "Selection sort’da minimumni qidirish va bitta almashtirishni kuzatish.",
    plain: "Qolgan kartalardan eng kichigini tanlab, navbatdagi bo‘sh joyga qo‘yasiz.",
    reflection: "Har turda minimum indeksini toping, keyin ko‘pi bilan bitta swap bajaring. Teng qiymat tartibini tekshiring.",
  },
  "pea-9-17": {
    goal: "Insertion sort’da yangi elementni saralangan prefixga qo‘yish.",
    plain: "Qo‘ldagi tartibli kartalar orasiga yangi kartani qo‘shish uchun kattalariga joy ochasiz.",
    reflection: "Kiritiladigan qiymatni avval saqlang. Katta elementlarni o‘ngga surib, bo‘sh joyga o‘sha qiymatni yozing.",
  },
  "pea-9-18": {
    goal: "Ikki saralangan bo‘lakni merge qilib, tahlil qilish.",
    plain: "Ikkita navbatning boshiga qarab, kichikroq qiymatni olasiz. Bir navbat tugasa, ikkinchisining qolgani tayyor.",
    reflection: "Merge qiymatlarni bir martalik yurishda oladi. Teng qiymatlar uchun tanlov stability’ni belgilaydi.",
  },
  "pea-9-19": {
    goal: "Quick sort’da pivot tanlovi, partition va bo‘linish xarajatini tushuntirish.",
    plain: "Kartalar bitta mezonga nisbatan kichik, teng va katta guruhlarga ajratiladi. Har kichik guruh alohida tartiblanadi.",
    reflection: "Pivot guruhlari juda notekis bo‘lsa xarajat ortadi. Har recursion hajmni haqiqatan kamaytirsin.",
  },
  "pea-9-20": {
    goal: "Sorted massivda two pointers yordamida kerakli yig‘indini topish.",
    plain: "Chapdan eng arzon va o‘ngdan eng qimmat mahsulot olinadi. Yig‘indi kam bo‘lsa chapdagi narx oshiriladi.",
    reflection: "Pointer qaysi yo‘nalishga yurishini monoton xossa belgilaydi. Saralash shartini avval tekshiring.",
  },
  "pea-9-21": {
    goal: "Qat’iy uzunlikdagi window yig‘indisini bir passda yuritish.",
    plain: "Haftalik o‘rtacha uchun kechagi haftaning olti kuni qoladi. Faqat yo‘qolgan bir kun va yangi kun o‘zgaradi.",
    reflection: "Birinchi window’ni hisoblab oling. Siljishda chiqqan qiymatni ayiring va kirgan qiymatni qo‘shing.",
  },
  "pea-9-22": {
    goal: "Constraint buzilganda window’ning chap chegarasini xavfsiz siljitish.",
    plain: "So‘zlar ketma-ketligida takror topilsa, eng eski mos bo‘lak oynadan chiqadi. Chap chegara orqaga qaytmasligi kerak.",
    reflection: "Har ikki pointer bir tomonga yurishini tekshiring. Manfiy qiymatlar monoton shartni buzishi mumkin.",
  },
  "pea-9-23": {
    goal: "BFS bilan teng og‘irlikdagi graph’da masofani qatlamlab topish.",
    plain: "Metro xaritasida bosh bekatdan bir yurishdagi barcha bekatlar, keyin ikki yurishdagilar ko‘riladi.",
    reflection: "FIFO queue qatlamlarni saqlaydi. Vertex’ni queue’ga qo‘shgan zahoti visited deb belgilang.",
  },
  "pea-9-24": {
    goal: "DFS orqali graph’ning yetib boriladigan qismini stack yordamida yurish.",
    plain: "Bitta koridorning oxirigacha borasiz, keyin orqaga qaytib yon yo‘lni ko‘rasiz.",
    reflection: "Cycle bo‘lsa visited bilan bir vertexni takror yurishni to‘xtating. Chuqur graph’da explicit stack’ni baholang.",
  },
  "pea-9-25": {
    goal: "Dependency graph’da indegree asosida to‘g‘ri ish tartibini tuzish.",
    plain: "Avval hech kimga bog‘liq bo‘lmagan ishlar bajariladi. Ular tugagach, ularni kutgan ishlar ochiladi.",
    reflection: "Indegree 0 bo‘lgan vertexlardan boshlang. Ko‘rilgan vertexlar soni kam bo‘lsa, cycle borligini tekshiring.",
  },
  "pea-9-26": {
    goal: "Takroriy subproblem uchun memo key, recurrence va base case tanlash.",
    plain: "Bir xil hisob qayta kelganda, oldingi javobni daftaridan topish yangi hisobdan tezroq.",
    reflection: "Cache key natijaga ta’sir qiladigan hamma parametrni ifodalasin. Base case’ni alohida sinang.",
  },
  "pea-9-27": {
    goal: "Dynamic programming jadvalini dependency tartibida qurish va xotirani kamaytirish.",
    plain: "Katta qadam natijasi undan oldingi kichik qadamlardan olinadi. Faqat yaqin natijalar kerak bo‘lsa, eski qatorlarni saqlash shart emas.",
    reflection: "State’larni ishlatilishidan oldin hisoblang. Rolling buffer tanlashda zarur oldingi qiymatlarni yozib chiqing.",
  },
} satisfies Record<string, LessonGuide>;

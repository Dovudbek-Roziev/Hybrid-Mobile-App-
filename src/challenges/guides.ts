type ChallengeGuide = { input: string; output: string; explanation: string };

export const challengeGuides = {
  'challenge-1': {
    input: 'solve(7, -3)',
    output: '4',
    explanation:
      '+ operatori ikki sonni qo‘shadi. Bu yerda 7 ga −3 qo‘shish 7 dan 3 ni ayirishga teng.',
  },
  'challenge-2': {
    input: 'solve(-4)',
    output: 'true',
    explanation:
      'Butun son juft bo‘lsa, uni 2 ga bo‘lgandagi qoldiq 0 bo‘ladi. Bu tekshiruv manfiy juft sonlarga ham ishlaydi.',
  },
  'challenge-3': {
    input: 'solve(-8, -3)',
    output: '-3',
    explanation:
      'Math.max kattaroq qiymatni tanlaydi. Ikkalasi manfiy bo‘lganda nolga yaqinroq son kattaroq bo‘ladi.',
  },
  'challenge-4': {
    input: 'solve("salom")',
    output: '5',
    explanation:
      'length stringdagi UTF-16 kod birliklarini sanaydi. Bu misolda har bir harf bitta birlik oladi.',
  },
  'challenge-5': {
    input: 'solve([3, -2, 7])',
    output: '8',
    explanation:
      'reduce yig‘indini 0 dan boshlaydi. Har bir element joriy yig‘indiga qo‘shiladi, shuning uchun bo‘sh massiv natijasi 0 bo‘ladi.',
  },
  'challenge-6': {
    input: 'solve("kitob")',
    output: '"botik"',
    explanation:
      "Array.from matnni belgilar ketma-ketligiga ajratadi. reverse tartibni almashtiradi, join('') esa natijani satrga qaytaradi.",
  },
  'challenge-7': {
    input: 'solve([-2, 0, 4, 1])',
    output: '[4, 1]',
    explanation:
      'filter faqat n > 0 shartiga javob beradigan elementlarni saqlaydi. Nol musbat emas, saqlangan elementlarning tartibi o‘zgarmaydi.',
  },
  'challenge-8': {
    input: 'solve([2, 1, 2, 3, 1])',
    output: '[2, 1, 3]',
    explanation:
      'Set bir xil qiymatni bir marta saqlaydi va birinchi uchrash tartibini ushlab qoladi. Spread uni qayta massivga aylantiradi.',
  },
  'challenge-9': {
    input: 'solve("level")',
    output: 'true',
    explanation:
      'Matnning teskari nusxasi asl matn bilan qat’iy tenglik orqali solishtiriladi. Harf registri va bo‘shliqlar tekshiruvga kiradi.',
  },
  'challenge-10': {
    input: 'solve(5)',
    output: '120',
    explanation:
      '1 dan 5 gacha sonlar 1 dan boshlab ko‘paytiriladi. n nol bo‘lsa elementlar yo‘q va boshlang‘ich qiymat 1 qaytadi.',
  },
  'challenge-11': {
    input: 'solve("banana")',
    output: 'Map { "b" → 1, "a" → 3, "n" → 2 }',
    explanation:
      'Map har bir belgini kalit sifatida saqlaydi. Belgi qayta uchrasa, uning sanog‘i bittaga ortadi.',
  },
  'challenge-12': {
    input: 'solve([2, 5, 8, 11], 8)',
    output: '2',
    explanation:
      'O‘rtadagi element tekshiriladi va nishon joylashishi mumkin bo‘lgan yarim oraliq qoldiriladi. Indekslar 0 dan boshlanadi, topilmasa −1 qaytadi.',
  },
  'challenge-13': {
    input: 'solve([9, -4, 3])',
    output: '-4',
    explanation:
      'Spread massiv elementlarini Math.min ga alohida argument qilib uzatadi. Funksiya ularning eng kichigini qaytaradi.',
  },
  'challenge-14': {
    input: 'solve([-3, -2, 0, 5])',
    output: '[-3, 5]',
    explanation:
      'Toq butun sonning 2 ga bo‘lgandagi qoldig‘i nolga teng emas. !== 0 sharti qoldig‘i −1 bo‘ladigan manfiy toq sonlarni ham qamrab oladi.',
  },
  'challenge-15': {
    input: 'solve([-3, 0, 2])',
    output: '[9, 0, 4]',
    explanation:
      'map har bir sonni o‘ziga ko‘paytiradi va natijalarni yangi massivga yozadi. Kirish massivi o‘z holicha qoladi.',
  },
  'challenge-16': {
    input: 'solve("  bitta   ikkita  uchta  ")',
    output: '3',
    explanation:
      'trim chetdagi bo‘shliqlarni oladi. Ketma-ket whitespace belgilariga bo‘lish so‘zlarni ajratadi, faqat bo‘shliqlardan iborat matn 0 qaytaradi.',
  },
  'challenge-17': {
    input: 'solve("silent", "listen")',
    output: 'true',
    explanation:
      'Saralash ikkala matndagi belgilarni bir tartibga keltiradi. Saralangan nusxalar teng bo‘lsa, har bir belgi ikkala matnda bir xil marta uchragan.',
  },
  'challenge-18': {
    input: 'solve([2, 2, 3, 4], [4, 2, 8])',
    output: '[2, 4]',
    explanation:
      'Birinchi massivdagi takrorlar Set yordamida olib tashlanadi, keyin faqat ikkinchi Set ichida bor qiymatlar qoldiriladi. Natija birinchi massivning uchrash tartibida.',
  },
  'challenge-19': {
    input: 'solve([1, 2, 3, 4, 5], 2)',
    output: '[[1, 2], [3, 4], [5]]',
    explanation:
      'slice har safar k ta elementlik bo‘lakni oladi. Oxirgi bo‘lakka qolgan elementlar kamroq bo‘lsa, ular shundayligicha qaytariladi.',
  },
  'challenge-20': {
    input: 'solve([1, [2, [3]], 4])',
    output: '[1, 2, 3, 4]',
    explanation:
      'flat(Infinity) barcha ichki massivlarning elementlarini bitta darajaga olib chiqadi. Elementlarning chapdan o‘ngga tartibi saqlanadi.',
  },
  'challenge-21': {
    input: 'solve("([)]")',
    output: 'false',
    explanation:
      'Ochiladigan qavslar stack’ka qo‘yiladi. Yopiladigan qavs eng oxirgi ochilgan qavsga mos kelishi kerak, bu misolda ) belgisi [ bilan juftlasha olmaydi.',
  },
  'challenge-22': {
    input: 'solve([-2, 3, -1, 4, -5])',
    output: '6',
    explanation:
      'Kadane algoritmi har qadamda oldingi bo‘lakni davom ettirish va yangi bo‘lak boshlashni solishtiradi. Eng yaxshi uzluksiz bo‘lak [3, −1, 4].',
  },
  'challenge-23': {
    input: 'solve([4, 6, 8])',
    output: '6',
    explanation:
      'Avval barcha elementlar yig‘iladi, keyin yig‘indi elementlar soniga bo‘linadi. Bu yerda 18 ÷ 3 natijasi 6.',
  },
  'challenge-24': {
    input: 'solve("Hello, WORLD!")',
    output: '3',
    explanation:
      'Regex a, e, i, o, u harflarini registrga qaramay topadi. Bu matnda e va ikkita o bor.',
  },
  'challenge-25': {
    input: 'solve(18, 0, 10)',
    output: '10',
    explanation:
      'Math.max qiymatni quyi chegaradan pastga tushirmaydi. Math.min esa chiqqan qiymatni yuqori chegaradan oshirmaydi.',
  },
  'challenge-26': {
    input: 'solve(5)',
    output: '["1", "2", "Fizz", "4", "Buzz"]',
    explanation:
      '15 ga bo‘linish sharti avval tekshiriladi, chunki u 3 va 5 ga bo‘linishning ikkalasiga ham mos. Qolgan mos qiymatlar Fizz yoki Buzz, boshqa sonlar satr bo‘ladi.',
  },
  'challenge-27': {
    input: 'solve(20)',
    output: '68',
    explanation:
      'Celsius qiymati 9/5 ga ko‘paytiriladi va unga 32 qo‘shiladi. 20 × 1,8 + 32 = 68.',
  },
  'challenge-28': {
    input: 'solve({ id: 7, done: true })',
    output: '["id", "done"]',
    explanation:
      'Object.keys obyektning o‘zidagi sanab o‘tiladigan satr kalitlarini qaytaradi. Natijada kalit nomlari bor, qiymatlar alohida olinadi.',
  },
  'challenge-29': {
    input: 'solve([10, 2, 1])',
    output: '[1, 2, 10]',
    explanation:
      'Spread asl massivdan nusxa oladi. sort ichidagi x − y taqqoslash sonlarni matn kabi emas, son qiymati bo‘yicha saralaydi.',
  },
  'challenge-30': {
    input: 'solve([-1, 0, 3, 7])',
    output: '2',
    explanation:
      'filter noldan katta qiymatlarni ajratadi. Hosil bo‘lgan [3, 7] massivining length qiymati 2.',
  },
  'challenge-31': {
    input: 'solve([8, 0, -2, -7])',
    output: '-2',
    explanation:
      'find shartga mos kelgan birinchi elementda to‘xtaydi. Birorta manfiy element bo‘lmasa, undefined qaytaradi.',
  },
  'challenge-32': {
    input: 'solve(4)',
    output: '[0, 1, 2, 3]',
    explanation:
      'Array.from uzunligi n bo‘lgan massiv yaratadi. Har bir pozitsiyada qiymat sifatida o‘sha indeks olinadi.',
  },
  'challenge-33': {
    input: 'solve([2, 7, 11, 15], 9)',
    output: '[0, 1]',
    explanation:
      'Map avval ko‘rilgan qiymat va indeksni saqlaydi. 7 ga kelganda to‘ldiruvchi 9 − 7 = 2 bo‘ladi va uning indeksi Map’da bor.',
  },
  'challenge-34': {
    input:
      'solve([{team: "a", id: 1}, {team: "b", id: 2}, {team: "a", id: 3}], "team")',
    output:
      'Map { "a" → [{team: "a", id: 1}, {team: "a", id: 3}], "b" → [{team: "b", id: 2}] }',
    explanation:
      'Har obyektning team qiymati Map kaliti bo‘ladi. Obyekt shu kalitga tegishli guruhning oxiriga qo‘shiladi.',
  },
  'challenge-35': {
    input: 'solve([1, 2, 3, 4], 5)',
    output: '[4, 1, 2, 3]',
    explanation:
      '5 % 4 natijasi 1, chunki to‘liq aylanish tartibni o‘zgartirmaydi. Oxirgi element kesib olinib, boshlanishga qo‘yiladi.',
  },
  'challenge-36': {
    input: 'solve([3, 0, 1])',
    output: '2',
    explanation:
      'Massiv uzunligi 3 bo‘lsa, to‘liq oraliq 0 dan 3 gacha va yig‘indisi 6. Berilgan elementlar yig‘indisi 4, farqi 2.',
  },
  'challenge-37': {
    input: 'solve([1, 4, 7], [2, 4, 9])',
    output: '[1, 2, 4, 4, 7, 9]',
    explanation:
      'Ikkita indeks har bir massivning navbatdagi qiymatini ko‘rsatadi. Kichik qiymat olinadi, bir tomon tugasa ikkinchisining qoldig‘i qo‘shiladi.',
  },
  'challenge-38': {
    input: 'solve("ali@example.uz")',
    output: 'true',
    explanation:
      'Shakl tekshiruvi @ dan oldin va keyin bo‘sh bo‘lmagan qismlarni hamda domen ichida nuqtani talab qiladi. U manzilning haqiqatan ishlashini tekshirmaydi.',
  },
  'challenge-39': {
    input: 'const square = solve(n => n * n)\nsquare(5), square(5)',
    output: '25, 25\nBerilgan funksiya 5 uchun bir marta chaqiriladi.',
    explanation:
      'Wrapper har argumentning natijasini Map’da saqlaydi. Ikkinchi 5 uchun hisoblash takrorlanmaydi, tayyor 25 olinadi.',
  },
  'challenge-40': {
    input: 'solve("abba")',
    output: '2',
    explanation:
      'Sliding window takror uchragan harfning oxirgi indeksidan foydalanadi. Chap chegara orqaga siljimaydi, eng uzun takrorsiz bo‘lak ab yoki ba.',
  },
  'challenge-41': {
    input: 'solve([1, 3, 4], 6)',
    output: '2',
    explanation:
      'Har summa uchun bitta coin olib qolgan summani yechish variantlari tekshiriladi. 6 uchun eng yaxshi juftlik 3 + 3.',
  },
  'challenge-42': {
    input:
      'solve(new Map([["A", ["B", "C"]], ["B", ["D"]], ["C", ["D"]]]), "A")',
    output: '["A", "B", "C", "D"]',
    explanation:
      'BFS navbati yaqin tugunlarni avval ko‘radi. D navbatga qo‘shilgan zahoti visited bo‘ladi, shuning uchun C orqali ikkinchi marta qo‘shilmaydi.',
  },
  'challenge-43': {
    input: 'const user: User = { id: 7, name: "Ali" }',
    output:
      'TypeScript bu qiymatni qabul qiladi. id: "7" bilan tur xatosi chiqadi.',
    explanation:
      'User turi ikkita majburiy maydon belgilaydi. id son, name esa satr bo‘lishi kerak, tekshiruv TypeScript darajasida ishlaydi.',
  },
  'challenge-44': {
    input: 'const status: Status = "done"',
    output: '"done" qabul qilinadi, "failed" tur xatosiga olib keladi.',
    explanation:
      'Literal union Status uchun mumkin bo‘lgan ikki matn qiymatini sanab beradi. Kompilyator qolgan qiymatlarni rad etadi.',
  },
  'challenge-45': {
    input: 'identity(42)',
    output: '42, TypeScript natijani 42 literal turi sifatida chiqaradi.',
    explanation:
      'T argumentdan aniqlanadi va qaytish turi ham T bo‘ladi. Funksiya asl qiymatni boshqa turga o‘zgartirmasdan qaytaradi.',
  },
  'challenge-46': {
    input: 'format(42)',
    output: '"42"',
    explanation:
      'typeof x satr kelgan holatni ajratadi. Son uchun toString chaqiriladi, natijada ikkala tarmoq ham string qaytaradi.',
  },
  'challenge-47': {
    input: 'type User = { id: number; name: string; email: string }',
    output: 'PublicUser shakli { id: number; name: string }',
    explanation:
      'Pick User turidan faqat id va name maydonlarini oladi. Bu tur darajasidagi amal, tayyor obyektdan email’ni runtime’da o‘chirib tashlamaydi.',
  },
  'challenge-48': {
    input: 'Counter ochiladi, keyin tugma ikki marta bosiladi.',
    output: 'Tugma matni 0 → 1 → 2 bo‘ladi.',
    explanation:
      'useState hisobni 0 dan boshlaydi. Functional updater oldingi qiymatga 1 qo‘shadi va React yangi hisobni ko‘rsatadi.',
  },
  'challenge-49': {
    input: 'items = [{id: 7, title: "Reja"}, {id: 9, title: "Test"}]',
    output: 'Ro‘yxatda “Reja” va “Test” nomli ikkita li ko‘rinadi.',
    explanation:
      'map har bir obyekt uchun li yaratadi. key sifatida barqaror id ishlatilgani uchun React qayta renderda elementlarni farqlaydi.',
  },
  'challenge-50': {
    input: 'Search maydoniga “Expo” yoziladi.',
    output: 'Input “Expo” ni ko‘rsatadi, q state qiymati ham "Expo" bo‘ladi.',
    explanation:
      'onChange inputning yangi qiymatini setQ orqali saqlaydi. value shu state’ga bog‘langan, shuning uchun inputni React boshqaradi.',
  },
  'challenge-51': {
    input: 'Clock ochiladi va taxminan 2,5 sekunddan keyin yopiladi.',
    output:
      'Konsolda har soniya vaqt yoziladi. Unmountdan keyin yangi yozuv chiqmaydi.',
    explanation:
      'useEffect intervalni yaratadi va cleanup funksiyasini qaytaradi. Komponent unmount bo‘lganda clearInterval aynan shu intervalni to‘xtatadi.',
  },
  'challenge-52': {
    input: 'valid({ title: "   " })',
    output: 'false',
    explanation:
      'typeof title satr ekanini tekshiradi. trim’dan so‘ng uzunlik 0 bo‘lgan satr rad etiladi, title mavjud bo‘lmasa ham tekshiruv false qaytaradi.',
  },
  'challenge-53': {
    input: 'GET /mavjud-emas, bu yo‘l uchun alohida route yo‘q.',
    output: 'HTTP 404\n{"error":"Not found"}',
    explanation:
      'Bu middleware barcha mavjud routelardan keyin qo‘yiladi. Oldingi handler javob bermagan so‘rov oxirgi middleware’ga yetib keladi.',
  },
  'challenge-54': {
    input: 'offset(3, 10)',
    output: '20',
    explanation:
      'Sahifa raqami 1 dan boshlanadi. Uchinchi sahifadan oldingi ikki sahifaning 20 ta yozuvi o‘tkazib yuboriladi.',
  },
  'challenge-55': {
    input:
      'wrap(async () => { throw new Error("DB unavailable") })(req, res, next)',
    output: 'next Error("DB unavailable") bilan chaqiriladi.',
    explanation:
      'Promise.then handler chaqiruvini qamrab oladi. Handler throw qilsa yoki rad etilgan Promise qaytarsa, catch xatoni Express’ning next funksiyasiga uzatadi.',
  },
  'challenge-56': {
    input: 'users(id, name) qatorlari: (1, "Ali"), (2, "Malika").',
    output:
      'name ustunida “Ali” va “Malika” qaytadi. Qator tartibi kafolatlanmaydi.',
    explanation:
      'SELECT name faqat name ustunini tanlaydi. ORDER BY bo‘lmasa, qaysi qator birinchi kelishini SQL kafolatlamaydi.',
  },
  'challenge-57': {
    input: 'orders(id, total) qatorlari: (1, 100), (2, 140), (3, 80).',
    output: '(2, 140)',
    explanation:
      'WHERE total > 100 natijani filtrlaydi. 100 chegaraga teng, shuning uchun birinchi qator olinmaydi.',
  },
  'challenge-58': {
    input: 'orders(customer_id) qatorlari: (7), (7), (9).',
    output: 'Mijoz 7 → 2 ta, mijoz 9 → 1 ta.',
    explanation:
      'GROUP BY bir xil customer_id qatorlarini bitta guruhga oladi. COUNT(*) har guruhdagi buyurtmalarni sanaydi.',
  },
  'challenge-59': {
    input:
      'users: (1, "Ali"), (2, "Malika").\norders(user_id, total): (1, 80), (1, 120).',
    output: '("Ali", 80) va ("Ali", 120).',
    explanation:
      'INNER JOIN mos id topilgan har bir buyurtmani user bilan ulaydi. Malikaning mos buyurtmasi yo‘qligi uchun uning qatori chiqmaydi.',
  },
  'challenge-60': {
    input:
      'users(id, name): (1, "Ali"), (2, "Malika").\nid uchun bog‘langan argument: 2.',
    output: '(2, "Malika")',
    explanation:
      '? o‘rniga qiymat SQLite driver orqali bog‘lanadi. Driver 2 ni SQL sintaksisining qismi sifatida emas, qiymat sifatida uzatadi.',
  },
  'challenge-61': {
    input:
      'orders(customer_id, total) qatorlari: (7, 200), (7, 200), (7, 150), (8, 90).',
    output: '(7, 200, 1), (7, 200, 1), (7, 150, 2), (8, 90, 1).',
    explanation:
      'PARTITION BY hisobni har mijoz uchun qaytadan boshlaydi. DENSE_RANK teng total qiymatlariga bir xil daraja beradi va keyingi darajani tashlab ketmaydi.',
  },
  'challenge-62': {
    input:
      'tasks: [{title: "Reja", done: false}, {title: "Test", done: true}].',
    output: 'Cursor’dan o‘qiladigan hujjat: {title: "Reja", done: false}.',
    explanation:
      'find({done:false}) aynan false qiymatli hujjatlarni tanlaydi. Driver cursor qaytaradi, hujjatlar cursor orqali o‘qiladi.',
  },
  'challenge-63': {
    input:
      'Git reposining joriy branch’i main, feature/login hali mavjud emas.',
    output:
      'Joriy commitdan feature/login yaratiladi va u faol branch bo‘ladi.',
    explanation:
      'git switch -c bitta amalda yangi branch ochib, unga o‘tadi. Boshlang‘ich nuqta joriy commit hisoblanadi.',
  },
  'challenge-64': {
    input:
      'README.md ichiga yangi satr yozilib, git add README.md bilan stage qilingan.',
    output: 'git diff --cached staged README.md farqini ko‘rsatadi.',
    explanation:
      '--cached indexni HEAD bilan solishtiradi. Faqat ishchi nusxada turgan, stage qilinmagan tahrirlar kiritilmaydi.',
  },
  'challenge-65': {
    input: 'app.ts kuzatiladi va uning o‘zgarishi stage qilingan.',
    output:
      'app.ts tahriri ishchi nusxada qoladi. Staged diffda bu tahrir ko‘rinmaydi.',
    explanation:
      '--staged indexdagi app.ts holatini HEADga qaytaradi. Ishchi nusxadagi tahrir saqlanadi.',
  },
  'challenge-66': {
    input: 'Katalogda src/main.ts, tests/run.ts va README.md fayllari bor.',
    output:
      './src/main.ts va ./tests/run.ts topiladi. Chiqish tartibi muhitga bog‘liq.',
    explanation:
      'find . joriy katalogdan rekursiv qidiradi. -type f faqat fayllarni, -name esa .ts bilan tugaydigan nomlarni tanlaydi.',
  },
  'challenge-67': {
    input: 'app.log 1 dan 120 gacha raqamlangan satrlardan iborat.',
    output: '71–120-satrlar.',
    explanation:
      'tail -n 50 faylning oxiridan 50 satrni o‘qiydi. Fayl 50 satrdan qisqa bo‘lsa, mavjud satrlarning hammasi chiqadi.',
  },
  'challenge-68': {
    input: 'script.sh uchun boshlang‘ich rejim: -rw-r--r--.',
    output: 'Yangi rejim: -rwxr--r--.',
    explanation:
      'u egani bildiradi, +x uning execute bitini qo‘shadi. Group va boshqa foydalanuvchilar huquqlari o‘zgarishsiz qoladi.',
  },
  'challenge-69': {
    input: 'Joriy katalogda yaroqli Dockerfile va unga kerakli fayllar bor.',
    output:
      'Muvaffaqiyatli builddan keyin mahalliy image tegi academy:dev bo‘ladi.',
    explanation:
      'Oxirgi nuqta build contextni belgilaydi. -t natijadagi image’ga academy nomi va dev tegini beradi.',
  },
  'challenge-70': {
    input:
      'academy:dev image’ining ilovasi 0.0.0.0:3000 da tinglaydi. Host 8080 porti bo‘sh.',
    output:
      'Hostdagi localhost:8080 so‘rovi container ichidagi 3000 portga boradi.',
    explanation:
      'Port bog‘lashda chap qiymat host porti, o‘ng qiymat container portidir. --rm to‘xtatilgan containerni avtomatik olib tashlaydi.',
  },
  'challenge-71': {
    input:
      'academy nomli ishlayotgan container “ready” yozuvini chiqaradi va keyin yangi loglar yozadi.',
    output:
      'Mavjud “ready” satri va keyingi stdout/stderr satrlari terminalga chiqadi.',
    explanation:
      'docker logs container yozuvlarini oladi. -f yangi satrlar paydo bo‘lishini kutadi va kuzatishni davom ettiradi.',
  },
  'challenge-72': {
    input: 'GET /api/tasks javobi HTTP 200 va body [{"id":1}].',
    output:
      'load() Promise’i [{id: 1}] qiymati bilan bajariladi. HTTP 404 bo‘lsa Error("404") bilan rad etiladi.',
    explanation:
      'fetch HTTP xato statusida ham Response qaytarishi mumkin. response.ok tekshirilgach, muvaffaqiyatli body r.json() orqali o‘qiladi.',
  },
  'challenge-73': {
    input: 'url("react & ts")',
    output: '"/search?q=react+%26+ts"',
    explanation:
      'URLSearchParams bo‘shliqni + va & belgisini %26 sifatida kodlaydi. Shu sababli & yangi query parameter ajratgichi bo‘lib qolmaydi.',
  },
  'challenge-74': {
    input:
      'fn birinchi ikki urinishda xato beradi, uchinchisida "ok" qaytaradi.',
    output: 'retry(fn) → "ok", fn uch marta chaqiriladi.',
    explanation:
      'await xatolari catch orqali keyingi urinishga o‘tadi. Uchinchi urinish ham xato bersa, aynan o‘sha xato tashqariga uzatiladi.',
  },
  'challenge-75': {
    input: 'binary(13)',
    output: '"1101"',
    explanation:
      'toString(2) butun sonni ikkilik sanoq tizimida yozadi. 13 qiymati 8 + 4 + 1 dan iborat, shuning uchun 1101 chiqadi.',
  },
  'challenge-76': {
    input: 'hex("2f")',
    output: '47',
    explanation:
      '16 lik tizimda f qiymati 15. 2 × 16 + 15 = 47, parseInt ikkinchi argument orqali 16 lik tizimni tanlaydi.',
  },
  'challenge-77': {
    input: 'has(0x80000004, 0x80000000)',
    output: 'true',
    explanation:
      'AND mask bilan flagdagi umumiy bitlarni qoldiradi. >>> 0 ikkala operandni unsigned 32-bit ko‘rinishga keltiradi, yuqori bit bor qiymatlar ham to‘g‘ri solishtiriladi.',
  },
  'challenge-78': {
    input: 'Stack: push("a"), push("b"), pop(), pop(), pop().',
    output: '"b", "a", undefined.',
    explanation:
      'Array.push oxiriga qo‘shadi va pop o‘sha uchidan oladi. Oxirgi qo‘shilgan “b” birinchi chiqadi, bo‘sh massivdan pop undefined qaytaradi.',
  },
  'challenge-79': {
    input:
      'Queue: enqueue("a"), enqueue("b"), dequeue(), dequeue(), dequeue().',
    output: '"a", "b", undefined.',
    explanation:
      'enqueue oxiriga qo‘shadi, shift boshidan oladi. Birinchi qo‘shilgan “a” avval chiqadi, bo‘sh navbat undefined qaytaradi.',
  },
  'challenge-80': {
    input: 'gcd(48, 18)',
    output: '6',
    explanation:
      'Evklid algoritmi (a, b) juftligini (b, a % b) bilan almashtiradi. Qoldiq 0 ga yetganda oxirgi noldan farqli bo‘luvchi 6.',
  },
  'challenge-81': {
    input: 'fib(7)',
    output: '13',
    explanation:
      'Ikki o‘zgaruvchida ketma-ket Fibonacci qiymatlari yuritiladi. Har qadam (a, b) juftligini (b, a + b) ga almashtiradi, F₀ = 0 va F₁ = 1.',
  },
  'challenge-82': {
    input: 'prime(49)',
    output: 'false',
    explanation:
      'Agar son bo‘luvchiga ega bo‘lsa, juft bo‘luvchilardan biri √n dan oshmaydi. 49 soni 7 ga bo‘linadi, bu uning tub emasligini ko‘rsatadi.',
  },
  'challenge-83': {
    input:
      'Soat 1000 ms bo‘lganda set("key", "value", 1000). get("key") soat 1500 va 2000 ms bo‘lganda chaqiriladi.',
    output: '1500 ms da "value", 2000 ms da undefined.',
    explanation:
      'Saqlaganda tugash vaqti 1000 + 1000 = 2000 bo‘ladi. get aynan shu vaqtdan boshlab elementni eskirgan deb topadi va Map’dan o‘chiradi.',
  },
  'challenge-84': {
    input:
      'balancer(["s1", "s2", "s3"]) qaytargan funksiya to‘rt marta chaqiriladi.',
    output: '"s1", "s2", "s3", "s1".',
    explanation:
      'Hisoblagich har chaqiruvda ortadi. i % a.length indeksni ro‘yxat bo‘ylab aylantiradi va oxiridan keyin boshiga qaytaradi.',
  },
  'challenge-85': {
    input: 'lru(2): set("a", 1), set("b", 2), get("a"), set("c", 3), get("b").',
    output: 'get("a") → 1, get("b") → undefined.',
    explanation:
      'get("a") Map’dagi a elementini oxiriga ko‘chirib, uning yangiligini belgilaydi. c qo‘shilganda sig‘im oshadi va eng eski b chiqariladi.',
  },
  'challenge-86': {
    input: 'redact({ user: "ali", password: "demo-only" })',
    output: '{ "user": "ali" }',
    explanation:
      'Destructuring password maydonini olib qoladi va rest operatori qolgan maydonlarni yangi obyektga oladi. Asl obyekt o‘zgarmaydi.',
  },
  'challenge-87': {
    input: 'assert.equal(2 + 2, 4)',
    output:
      'Assertion muvaffaqiyatli o‘tadi va konsolga hech narsa chiqarmaydi.',
    explanation:
      'node:assert/strict ichidagi equal qat’iy taqqoslaydi. Qiymatlar farq qilsa AssertionError chiqaradi.',
  },
  'challenge-88': {
    input: 'clamp(-1, 0, 10), clamp(5, 0, 10), clamp(11, 0, 10).',
    output: 'Mos ravishda 0, 5 va 10. Uch assertion ham o‘tadi.',
    explanation:
      'Bu qiymatlar quyi chegaradan past, chegaralar ichida va yuqori chegaradan baland holatlarni tekshiradi. Har chaqiruvda aniq kutilgan natija bor.',
  },
  'challenge-89': {
    input: 'both(async () => "A", async () => "B")',
    output: '["A", "B"]',
    explanation:
      'Ikkala funksiya Promise.all ga Promise’lar berishdan avval chaqiriladi. Natija arrayi bajarilish tezligidan qat’i nazar kirish tartibini saqlaydi.',
  },
  'challenge-90': {
    input: 'run([async () => "birinchi", async () => "ikkinchi"])',
    output: '["birinchi", "ikkinchi"]',
    explanation:
      'for...of ichidagi await oldingi funksiya yakunlanmaguncha navbatdagisini boshlamaydi. Har yakunlangan qiymat out ga qo‘shiladi.',
  },
  'challenge-91': {
    input:
      'items = [{title: "Expo Router"}, {title: "SQLite"}], query = "rOuTeR".',
    output: '[{title: "Expo Router"}]',
    explanation:
      'Qidiruvdan oldin title va query kichik harfga o‘tkaziladi. Ro‘yxat joriy qiymatlardan hisoblanadi, unga alohida state kerak emas.',
  },
  'challenge-92': {
    input: 'finish([{id: 1, done: false}, {id: 2, done: false}], 2)',
    output: '[{"id": 1, "done": false}, {"id": 2, "done": true}]',
    explanation:
      'map yangi massiv qaytaradi. Faqat id 2 bo‘lgan obyekt spread bilan nusxalanadi va done o‘zgaradi, qolgan elementlar saqlanadi.',
  },
  'challenge-93': {
    input:
      'const user: ImmutableUser = { id: 1, name: "Ali" }\nuser.name = "Vali"',
    output: 'TypeScript qayta qiymat yozish qatorida xato beradi.',
    explanation:
      'Readonly<User> User’ning yuqori darajadagi maydonlarini o‘qish uchungina belgilaydi. Ushbu tekshiruv kompilyatorda ishlaydi, qiymatni runtime’da muzlatmaydi.',
  },
  'challenge-94': {
    input: 'area({kind: "square", side: 4})',
    output: '16',
    explanation:
      'kind literal qiymati TypeScript’ga Shape qaysi variant ekanini bildiradi. square tarmog‘i side² ni qaytaradi. Yangi variant qamrab olinmasa, never tekshiruvi kompilyatsiyada xato beradi.',
  },
  'challenge-95': {
    input: 'users(id): (1), (2).\norders(user_id) qatorlari: (1), (1).',
    output: '(id: 1, n: 2) va (id: 2, n: 0).',
    explanation:
      'LEFT JOIN barcha userlarni ushlab qoladi. COUNT(o.user_id) mos buyurtmasi yo‘q qatorning NULL qiymatini sanamaydi, shuning uchun 0 qaytadi.',
  },
  'challenge-96': {
    input:
      'orders jadvalida customer_id ustuni mavjud, idx_orders_customer hali yaratilmagan.',
    output: 'idx_orders_customer nomli index yaratiladi.',
    explanation:
      'Index customer_id bo‘yicha qidiruvni tezlashtirishi mumkin. Jadval yozilganda index ham yangilanadi, mavjud qatorlar o‘zgarishsiz qoladi.',
  },
  'challenge-97': {
    input: 'accounts: id 1 balansi 50, id 2 balansi 20. Ikki qator mavjud.',
    output: 'COMMIT’dan keyin id 1 balansi 40, id 2 balansi 30.',
    explanation:
      'BEGIN ikki UPDATE’ni bitta tranzaksiyaga oladi. Ushbu namunada ikkala ID ham mavjud. Haqiqiy o‘tkazmada qatorlar soni, yetarli balans va xatoda rollback ham tekshiriladi.',
  },
  'challenge-98': {
    input:
      'tasks kolleksiyasida _id = id va done: false bo‘lgan hujjat bor. id BSON turiga mos.',
    output:
      'Bitta mos hujjatning done maydoni true bo‘ladi, boshqa maydonlar saqlanadi.',
    explanation:
      'updateOne _id orqali bitta hujjatni tanlaydi. $set faqat done maydonini almashtiradi.',
  },
  'challenge-99': {
    input: 'lower([1, 3, 3, 6], 3)',
    output: '1',
    explanation:
      'Oraliqni ikkiga ajratib, x dan kichik elementlar chetga chiqariladi. 3 ikki marta uchraydi, natija ulardan birinchisining indeksi 1.',
  },
  'challenge-100': {
    input: 'sort([5, 1, 3, 1])',
    output: '[1, 1, 3, 5]',
    explanation:
      'Massiv ikki bo‘lakka bo‘linadi va har bo‘lak rekursiv saralanadi. Ikki saralangan bo‘lak kichik qiymatdan boshlab yig‘iladi. Kirish massivi o‘zgarmaydi.',
  },
} satisfies Record<`challenge-${number}`, ChallengeGuide>;

export type GuidedChallengeId = keyof typeof challengeGuides;

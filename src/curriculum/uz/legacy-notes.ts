import type { LessonNotes } from '../model';

export const legacyNotes: Readonly<Partial<Record<string, LessonNotes>>> = {
  "js-001": {
    example: "Ombor javonining ID’si o‘zgarmaydi, undagi qutilar soni esa har yetkazmada yangilanadi.",
    mistake: "const bilan e’lon qilingan obyektning ichki maydonlari ham o‘zgarmaydi deb taxmin qilish.",
  },
  "js-002": {
    example: "Kassa formasi “12” matnini qaytaradi. Hisobga qo‘shishdan oldin bu qiymatni songa aylantirish kerak.",
    mistake: "Formadan kelgan “12” ni 3 ga qo‘shganda 15 chiqishini kutish. JS “123” matnini hosil qiladi.",
  },
  "js-003": {
    example: "Taksi ilovasida narx hisoblovchi funksiya masofa va tarifni olib, to‘lovni qaytaradi.",
    mistake: "console.log bilan natija chiqarib, chaqiruvchiga ham shu qiymat qaytdi deb hisoblash.",
  },
  "js-004": {
    example: "Suratlar lentasidagi [muqova, xarita, chipta] ro‘yxatida xarita 1-indeksda joylashgan.",
    mistake: "Uch elementli massivning oxirgisini [3] bilan olish. Oxirgi mavjud indeks 2.",
  },
  "js-005": {
    example: "Yetkazish formasi {city, street, phone} yozuvini saqlaydi. Foydalanuvchi tanlagan maydon kalit orqali olinadi.",
    mistake: "Kalit “phone” qiymatli field o‘zgaruvchisidan kelsa ham contact.field deb yozish.",
  },
  "js-006": {
    example: "Kutubxona hisoboti kitobni bugun qaytarganga jarima qo‘ymasligi uchun sanani chegarasi bilan tekshiradi.",
    mistake: "Chegaraga teng holatni sinamaslik. Masalan, 70 o‘tish bali bo‘lsa score > 70 sharti 70 ni rad etadi.",
  },
  "js-007": {
    example: "Hisobchi yetti kunlik savdoni ketma-ket aylanib, har bir kun summasini qo‘shadi.",
    mistake: "i <= sales.length bilan oxirgi iteratsiyada mavjud bo‘lmagan elementni o‘qish.",
  },
  "js-008": {
    example: "QR skaner mahsulot kodini matn qilib beradi, lokal qidiruv esa son saqlashi mumkin. Tur oldindan moslashtiriladi.",
    mistake: "== ishlatib, foydalanuvchi yuborgan bo‘sh matn 0 bilan teng tekshirilishi mumkinligini unutish.",
  },
  "js-009": {
    example: "Kursga kirish uchun a’zolik va darsning ochiqligi ikkalasi ham kerak. Yordam kanali mavjud bo‘lmasa zaxira telefon chiqadi.",
    mistake: "Ahamiyatli yozishni && operatorining o‘ngiga qo‘yib, chap tomon falsy bo‘lsa yozuv umuman bajarilmasligini hisobga olmaslik.",
  },
  "js-010": {
    example: "Buyurtmalar ichidan to‘lanmaganlarini filter ajratadi, map esa ularni ekranga kerakli ID va summa shakliga aylantiradi.",
    mistake: "map callback’iga shart yozib, mos bo‘lmagan elementlar ro‘yxatdan yo‘qolishini kutish.",
  },
  "js-011": {
    example: "Xabarnoma uchun “Salom, Ali. Sizda 2 ta vazifa bor” matni ism va sondan yig‘iladi.",
    mistake: "Oddiy tirnoq ichida interpolatsiya yozish. Qiymat o‘rniga ifoda biriktirilgan matn chiqadi.",
  },
  "js-012": {
    example: "Manzil qaydidan shaharni olib, izoh maydoni berilmaganda bo‘sh matn ishlatish mumkin.",
    mistake: "city null bo‘lganda destructuring’dagi default qiymat ishlashini kutish.",
  },
  "js-013": {
    example: "Savatchaga yangi mahsulot qo‘shishda mavjud array nusxasiga element qo‘shiladi. Guruh sardorini ajratishda qolgan a’zolar rest bilan olinadi.",
    mistake: "Yuzaki spread nusxadan product.address.city kabi ichki maydonni o‘zgartirib, asl obyekt o‘zgarmasligini kutish.",
  },
  "js-014": {
    example: "Yetkazish bo‘limi ichida hisoblangan chegirma faqat shu bo‘limda kerak, umumiy total esa tashqarida ishlatiladi.",
    mistake: "if bloki ichidagi let qiymatini blokdan tashqarida o‘qish.",
  },
  "js-015": {
    example: "Bo‘sh qidiruv natijasining massivi mavjud. “Hech narsa topilmadi” xabari uchun elementlar soni tekshiriladi.",
    mistake: "if (items) orqali bo‘sh [] ni aniqlash. [] mavjud obyekt bo‘lgani uchun shart true.",
  },
  "js-016": {
    example: "Podkast ovozi 0 bo‘lsa sukut saqlanadi, sozlama yo‘q bo‘lsagina standart ovoz tanlanadi.",
    mistake: "volume || 50 yozish natijasida foydalanuvchi tanlagan 0 qiymatini 50 ga almashtirish.",
  },
  "js-017": {
    example: "Sayohat ro‘yxatidagi shaharlarni for...of bilan o‘qiysiz, shahar–narx yozuvida kalitlar alohida olinadi.",
    mistake: "Array bo‘ylab for...in bilan yurib, olingan “0” va “1” kalitlarini shahar qiymatlari deb ishlatish.",
  },
  "js-018": {
    example: "Import fayli buzilgan bo‘lsa, o‘qish xatosi ko‘rsatiladi va band yuklash holati baribir tozalanadi.",
    mistake: "catch ichida xatoni yutib yuborib, import muvaffaqiyatli bo‘lganini bildiruvchi ekranga o‘tish.",
  },
  "js-019": {
    example: "Sozlamalar JSON faylga yoziladi. Qayta ochilganda saqlangan vaqt satrini kerak bo‘lsa Date’ga aylantirasiz.",
    mistake: "JSON’dan o‘qilgan sana avtomatik Date bo‘ladi deb, tekshirmasdan getTime chaqirish.",
  },
  "js-020": {
    example: "Narxlarni ikki baravar qiluvchi map callback’ida qisqa arrow qulay, obyekt metodida esa receiver muhim.",
    mistake: "Arrow’dan obyektni qavssiz qaytarish. Figurali qavslar funksiya tanasi sifatida talqin qilinadi.",
  },
  "js-021": {
    example: "Mahalla turnirida har davra ballari qo‘shiladi va jadval teng ball olgan o‘yinchilarni oldindan belgilangan qoida bo‘yicha tartiblaydi.",
    mistake: "Eng yuqori ballni doim 0 dan boshlab, faqat manfiy ball yoki bo‘sh ro‘yxat holatlarini sinamaslik.",
  },
  "js-022": {
    example: "Chiptani chop etish jarayoni narx hisobini chaqiradi, narx hisobi tarifni o‘qiydi. Xato izi shu ichki chaqiruvlarni ko‘rsatadi.",
    mistake: "Stack trace tepasi butun dastur birinchi boshlangan joy deb o‘ylash. Tepada eng yangi chaqiruv turadi.",
  },
  "js-023": {
    example: "Dastur yordamchi funksiya e’loniga oldindan murojaat qila olishi mumkin. const bilan yaratilgan hisob esa boshlang‘ich qiymatidan keyin ishlatiladi.",
    mistake: "let o‘zgaruvchisini e’lon satridan oldin o‘qib, undefined chiqishini kutish.",
  },
  "js-024": {
    example: "Har o‘yinchi uchun yaratilgan hisoblagich o‘z ballarini closure orqali alohida saqlaydi.",
    mistake: "Barcha hisoblagichlarni bitta umumiy count bilan bog‘lab, birini bosganda hammasining o‘zgarib ketishini sezmaslik.",
  },
  "js-025": {
    example: "Obyektning printName metodini tugmaga ulaganda u egasini yo‘qotishi mumkin. Wrapper orqali uni yana user.printName shaklida chaqirasiz.",
    mistake: "const print = user.printName qilib olib, print() ichida this doim user bo‘lishini kutish.",
  },
  "js-026": {
    example: "Turli kontakt yozuvlari bir xil formatlash metodini umumiy prototype’dan ishlatishi mumkin.",
    mistake: "for...in’dan kelgan barcha maydonni obyektning o‘ziga tegishli deb hisoblash.",
  },
  "js-027": {
    example: "Topshiriqlarni narx yoki sana bo‘yicha saralashda bitta oqimga turli comparator funksiyalar uzatiladi.",
    mistake: "Callback o‘rniga callback() natijasini uzatib, kerakli ishni oldindan bajarib yuborish.",
  },
  "js-028": {
    example: "Kunlik to‘lovlar ro‘yxatidan bitta yakuniy summa yoki hafta bo‘yicha yig‘indilar chiqariladi.",
    mistake: "reduce uchun boshlang‘ich qiymat bermasdan bo‘sh ro‘yxatni sinamaslik. Bunday chaqiruv xato beradi.",
  },
  "js-029": {
    example: "Yetkazish servisidan javob kelgach buyurtma tafsiloti, undan keyin kuzatuv yo‘li olinadi.",
    mistake: "then ichida ikkinchi Promise’ni boshlab, uni return qilmaslik. Keyingi bosqich ichki ish tugamasdan yurishi mumkin.",
  },
  "js-030": {
    example: "Profil va keyin uning darslarini yuklaydigan oqimda ID birinchi await natijasidan olinadi.",
    mistake: "await kutayotgan vaqtda butun interfeys bloklangan deb hisoblash, yoki rejection uchun catch yozmaslik.",
  },
  "js-031": {
    example: "So‘rov tugash xabari Promise callback’ida, keyingi animatsiya timer’da navbatga qo‘yilishi mumkin.",
    mistake: "setTimeout(..., 0) joriy sync koddan yoki oldin navbatlangan microtask’dan oldin ishlaydi deb kutish.",
  },
  "js-032": {
    example: "Kutubxona sahifasi kategoriya va statistikani mustaqil yuklab, ikkalasi tayyor bo‘lganda chiqadi.",
    mistake: "Promise.all natijalari bajarilib bo‘lish tartibida keladi yoki xatoda qolgan ishlar avtomatik bekor bo‘ladi deb o‘ylash.",
  },
  "js-033": {
    example: "Katalog item’i o‘chirilganida server 404 qaytaradi. Ekran “topilmadi” holatini tarmoq uzilishi holatidan boshqa ko‘rsatadi.",
    mistake: "fetch 404 uchun doim catch’ga o‘tadi deb o‘ylab, response.ok’ni tekshirmaslik.",
  },
  "js-034": {
    example: "Valyuta formatlash funksiyasi checkout va tarix ekranida bitta moduldan olinadi.",
    mistake: "Named export’ni default import sintaksisi bilan chaqirish yoki aksincha ulash.",
  },
  "js-035": {
    example: "Tugatilgan darslar a’zoligi Set’da, har darsga to‘g‘ri keladigan baho Map’da saqlanadi.",
    mistake: "Map’dagi obyekt kalitini o‘sha maydonlarga ega yangi obyekt bilan qidirish. Kalitlar reference bo‘yicha farqlanadi.",
  },
  "js-036": {
    example: "Qidiruv satrini yozish to‘xtagach 200 ms kutib so‘rov yuboriladi. Har harf uchun alohida trafik ketmaydi.",
    mistake: "Yangi kechikish qo‘yilganda avvalgi taymerni clearTimeout bilan bekor qilmaslik.",
  },
  "js-037": {
    example: "Rasm eksportlaridan bir vaqtda faqat ikkitasi ishlaydi, uchinchisi bo‘sh slotni kutadi.",
    mistake: "Xato chiqqan ish slotini bo‘shatmaslik. Navbat xatodan keyin to‘xtab qolishi mumkin.",
  },
  "ts-001": {
    example: "Narx funksiyasiga forma yuborgan satrni uzatganingizda TypeScript hisob boshlanmasidan oldin mos kelmagan turni ko‘rsatadi.",
    mistake: "TypeScript tashqaridan kelgan JSON’ni ish vaqtida avtomatik tekshiradi deb hisoblash.",
  },
  "ts-002": {
    example: "let status = 'ready' keyin boshqa matn olishi mumkin. const status = 'ready' aniq qiymatni saqlaydi.",
    mistake: "Inference har bir deklaratsiyaga aynan bir xil literal tur beradi deb o‘ylash.",
  },
  "ts-003": {
    example: "GPS qiymatida birinchi o‘rin kenglik, ikkinchisi uzunlik. Uchinchi o‘rin boshqa format talab qilishi mumkin.",
    mistake: "[lat, lon] tuple o‘rniga cheklanmagan number[] ishlatib, ortiqcha yoki kam qiymatni qabul qilib yuborish.",
  },
  "ts-004": {
    example: "Vazifaning ID va sarlavhasi ekranga kerak. Ma’lumot modeli ikkalasining borligi va turini e’lon qiladi.",
    mistake: "Type assertion bilan bo‘sh obyektdan Task yasab, aslida kelmagan title’ni o‘qish.",
  },
  "ts-005": {
    example: "Profil rasmi bo‘lmasa bosh harflar ko‘rsatiladi, rasm berilganida URL ishlatiladi.",
    mistake: "Ixtiyoriy displayName maydoniga to‘g‘ridan-to‘g‘ri trim chaqirish.",
  },
  "ts-006": {
    example: "Qidiruv natijasi ba’zan ID soni, ba’zan erkin matn. Ikkalasi mos ravishda formatlanadi.",
    mistake: "string | number qiymatida turni ajratmasdan toUpperCase chaqirish.",
  },
  "ts-007": {
    example: "To‘lov faqat pending, paid yoki failed holatida bo‘lishi mumkin. “paied” yozilishi typecheck’da ko‘rinadi.",
    mistake: "Holat uchun string qo‘yib, xato yozuvlarning aniqlanishiga ishonish.",
  },
  "ts-008": {
    example: "Daqiqani sekundga aylantirishda tashqi API ham kirish, ham chiqish son bo‘lishiga tayanadi.",
    mistake: "Ba’zi tarmoqlarda return bo‘lmagani uchun qaytish turiga undefined qo‘shilib ketishini sezmaslik.",
  },
  "ts-009": {
    example: "Tarix omborining xotiradagi va SQLite implementatsiyalari bir xil list contractini bajarishi mumkin.",
    mistake: "Faqat bir xil nom berish bilan interfeys bajarildi deb o‘ylash. Metod imzosi ham mos kelishi kerak.",
  },
  "ts-010": {
    example: "Xabar satr yoki {title} obyekt bo‘lishi mumkin. Avval tur aniqlanib, keyin nom olinadi.",
    mistake: "Qiymatni tekshirmasdan as bilan kerakli variantga majburlash.",
  },
  "ts-011": {
    example: "first funksiyasi ball ro‘yxatidan son, ism ro‘yxatidan esa matn qaytaradi va shu bog‘lanishni type’da saqlaydi.",
    mistake: "Generic T o‘rniga any qaytarish natijasida chaqiruvchi tip tekshiruvini yo‘qotishi.",
  },
  "ts-012": {
    example: "Hisobot ro‘yxati shaxsiy maydonlarsiz qisqa model oladi. Tahrir faqat o‘zgargan maydonlarni yuboradi.",
    mistake: "Readonly runtime’da Object.freeze kabi chuqur himoya beradi deb ishonish.",
  },
  "ts-013": {
    example: "Sinflar ro‘yxatini yuklaydigan funksiya Promise<Class[]> qaytaradi; ekranga array await’dan keyin keladi.",
    mistake: "Async funksiya natijasida await qilmasdan darhol map chaqirish.",
  },
  "ts-014": {
    example: "To‘lov ekrani loading, success va error holatlariga ega. Faqat success’da kvitansiya o‘qiladi.",
    mistake: "Union’dagi status tekshirilmasdan barcha variantda data mavjud deb ishlatish.",
  },
  "ts-015": {
    example: "JSON importidan kelgan qiymat avval unknown. Array, obyekt va maydonlar tekshirilgandan keyin qo‘llanadi.",
    mistake: "Murakkab tarmoq javobini any qilib, yo‘q maydonlarda runtime xatoni keyingacha qoldirish.",
  },
  "ts-016": {
    example: "Bir xil nomli ikkita mashq bo‘lsa, faqat tanlangan ID’ning statusi done bo‘lishi kerak.",
    mistake: "Tahrirda ID o‘rniga title’dan qidirib, bir xil nomdagi noto‘g‘ri vazifani yangilash.",
  },
  "react-001": {
    example: "Kutubxonada kitob kartasi bitta komponentdan yaratiladi, har nusxaga boshqa nom va muallif beriladi.",
    mistake: "UI bilan saqlashni bevosita bitta render funksiyasiga qo‘yib, render paytida yozuv yuborish.",
  },
  "react-002": {
    example: "Savatchadagi {count} ifodasi mahsulot soni o‘zgarganda yangi qiymatni ko‘rsatadi.",
    mistake: "if kabi operator statement’ni to‘g‘ridan-to‘g‘ri JSX ifodasi ichiga qo‘yish.",
  },
  "react-003": {
    example: "Dashboard’dagi “Darslar” va “Imtihonlar” kartalari bir xil shaklda, ammo turli sonlarni props orqali oladi.",
    mistake: "Child ichida props obyektini o‘zgartirib, ota komponent ham avtomatik xabardor bo‘lishini kutish.",
  },
  "react-004": {
    example: "Tugma tez-tez bosilganda har bosish avvalgi hisobga qo‘shilishi kerak.",
    mistake: "Bir eventda setCount(count + 1) ni ikki marta ishlatib, ikkita mustaqil increment kutish.",
  },
  "react-005": {
    example: "Forma yuborish faqat foydalanuvchi tugma bosganda ishlashi kerak.",
    mistake: "onClick={submit()} yozish orqali funksiyani render paytida chaqirib yuborish.",
  },
  "react-006": {
    example: "Xarid ro‘yxati yuklangandan keyin bo‘sh chiqsa, spinner o‘rniga “Mahsulot qo‘shing” tugmasi ko‘rsatiladi.",
    mistake: "items.length && <List /> shaklida 0 qiymati UI’da ko‘rinib qolishini unutish.",
  },
  "react-007": {
    example: "Darslar qidiruv bilan qayta saralansa ham yozilgan izoh o‘z kursiga tegishli qolishi kerak.",
    mistake: "Array indeksini key qilib, birinchi elementni o‘chirganda keyingi element boshqa input state’ni meros olishi.",
  },
  "react-008": {
    example: "Kontakt formasi yangi telefon raqamini onChange orqali state’da saqlaydi va preview’da shu qiymatni ko‘rsatadi.",
    mistake: "value berib, onChange state’ni yangilamasligi sabab inputga yozib bo‘lmasligi.",
  },
  "react-009": {
    example: "Tarmoq ulanishi haqidagi listener ekran ochilganda qo‘shiladi va yopilganda chiqariladi.",
    mistake: "Dependency o‘zgarganda eski listener tozalanmasligi sabab bitta hodisa bir necha marta qaytishi.",
  },
  "react-010": {
    example: "Alohida ikki modal bir xil useToggle hook bilan ochiladi, lekin har modal mustaqil holatga ega.",
    mistake: "Hook’ni shart ichida chaqirib, renderlar orasida hook tartibini o‘zgartirish.",
  },
  "react-011": {
    example: "Yon filtrlardagi “Bajarilgan” tanlovi natijalar ro‘yxati va hisobni bir vaqtda yangilaydi.",
    mistake: "Tanlangan filtrni har child’da alohida state qilib, ikki qiymatning bir-biridan ajralishiga yo‘l qo‘yish.",
  },
  "react-012": {
    example: "Ilova temasi o‘zgarsa, barcha tegishli ekranlar bir provider orqali yangi ranglarni oladi.",
    mistake: "Har harf kiritilishini butun ilova context’iga bog‘lab, keraksiz qayta renderlar hosil qilish.",
  },
  "react-013": {
    example: "Yuborishda birinchi yaroqsiz inputga fokus beriladi, ref yordamida o‘sha input topiladi.",
    mistake: "ref.current hisobini o‘zgartirib, ekrandagi matn ham avtomatik qayta render bo‘lishini kutish.",
  },
  "react-014": {
    example: "Qidiruv natijasini filtrlash qimmat bo‘lsa, so‘rov va ro‘yxat o‘zgarmaguncha avvalgi natijadan foydalanish mumkin.",
    mistake: "useMemo dependency’laridan query’ni olib tashlab, yangi matnda eski ro‘yxatni ko‘rsatish.",
  },
  "react-015": {
    example: "Foydalanuvchi /tasks/42 havolasini ulashadi, boshqa odam ochganda xuddi shu vazifa topiladi.",
    mistake: "Route parametri mavjud, demak yozuv ham bor deb hisoblash va topilmagan holatni qamramaslik.",
  },
  "react-016": {
    example: "Oilaviy ishlar ro‘yxatida “Suv olish” nomli ikkita yozuvdan faqat bittasi yakunlanadi.",
    mistake: "Holat array’ini joyida push yoki splice bilan o‘zgartirib, React yangilanishini kutish.",
  },
  "next-001": {
    example: "Kitob do‘konida bosh sahifa va katalogni app papkasida alohida sahifalar sifatida yarating.",
    mistake: "page.tsx faylida komponentni default export qilishni unutish.",
  },
  "next-002": {
    example: "Kurs bo‘limida /courses va /courses/javascript manzillarini ichma-ich papkalarda joylashtiring.",
    mistake: "Papka o‘zi ochiladigan sahifa yaratadi deb o‘ylab, page.tsx faylini qoldirib ketish.",
  },
  "next-003": {
    example: "Sozlamalarning barcha sahifalarida yon menyuni bitta layout orqali ko‘rsating.",
    mistake: "Layout ichida children ko‘rsatilmasa, uning ichidagi sahifalar chiqmaydi.",
  },
  "next-004": {
    example: "Menyuni serverda yuklang, savat tugmasidagi bosish holatini Client Component boshqarsin.",
    mistake: "useState talab qiladigan tugmani Server Component ichida yozish.",
  },
  "next-005": {
    example: "Kitob muqovasiga batafsil sahifaga olib boruvchi Link qo‘shing.",
    mistake: "Link manzilini ro‘yxatdagi indeks yordamida yasab, ro‘yxat saralanganda boshqa sahifaga o‘tib ketish.",
  },
  "next-006": {
    example: "/recipes/[slug] orqali bitta sahifa shablonida turli taom retseptlarini chiqaring.",
    mistake: "URL’dan kelgan slug bo‘yicha topilmagan retseptni qayta ishlamaslik.",
  },
  "next-007": {
    example: "Buyurtmalar yuklanayotganda joytutkich, so‘rov muvaffaqiyatsiz tugaganda qayta urinish tugmasini chiqaring.",
    mistake: "Bitta umumiy holat bilan yuklanish va xatoni bir xil ko‘rsatish.",
  },
  "next-008": {
    example: "Mahsulot katalogini serverda yuklab, narx va nomlarni sahifada chiqaring.",
    mistake: "So‘rov statusini tekshirmasdan javobni muvaffaqiyatli deb qabul qilish.",
  },
  "next-009": {
    example: "Ochiq tadbirlar sahifasi uchun /api/events orqali JSON ro‘yxat qaytaring.",
    mistake: "Xato tafsilotini 200 statusi bilan yuborish.",
  },
  "next-010": {
    example: "Aloqa formasini Server Action ichida tekshirib, maydon xatosini foydalanuvchiga ko‘rsating.",
    mistake: "Faqat brauzerdagi required atributiga tayanish.",
  },
  "next-011": {
    example: "Har bir kurs uchun uning nomi va qisqa tavsifini sahifa metama’lumotlariga kiriting.",
    mistake: "Barcha kurs sahifalariga aynan bir xil title yozish.",
  },
  "next-012": {
    example: "Do‘kon rasmlariga o‘lcham va muqobil matn bering, turli ekranlarda joylashuvni tekshiring.",
    mistake: "Masofaviy rasm domenini ruxsatli manbalar ro‘yxatiga qo‘shmaslik.",
  },
  "next-013": {
    example: "Pochta xizmatining kalitini server muhiti o‘zgaruvchisida saqlang.",
    mistake: "Kalitga NEXT_PUBLIC_ prefiksini qo‘shib, brauzerga chiqarish.",
  },
  "next-014": {
    example: "Ommaviy menyu o‘zgarganda uning keshi yangilansin, shaxsiy buyurtmalar alohida yuklansin.",
    mistake: "Ommaviy kesh natijasiga foydalanuvchining shaxsiy ma’lumotini qo‘shish.",
  },
  "next-015": {
    example: "Portfolio joylashtirilgach bosh sahifa, loyiha manzili va 404 sahifasini ochib ko‘ring.",
    mistake: "Faqat development serverida sinab, production build tekshiruvini o‘tkazib yuborish.",
  },
  "next-016": {
    example: "Blogda ro‘yxatdan maqolaga o‘tishni va yo‘q slug uchun 404 sahifasini tekshiring.",
    mistake: "Ro‘yxatdagi slug va maqola manzilini turli qoidalar bilan yasash.",
  },
  "backend-001": {
    example: "Server brauzersiz CSV fayldan kunlik buyurtmalarni sanaydi.",
    mistake: "Node.js ichida brauzerdagi document obyektini chaqirish.",
  },
  "backend-002": {
    example: "Hamkasb klonlangan loyihani package.json dagi start skripti orqali ishga tushiradi.",
    mistake: "Kerakli paketni faqat global o‘rnatib, loyiha bog‘liqligiga qo‘shmaslik.",
  },
  "backend-003": {
    example: "Narx hisoblovchi modulni hisobot va buyurtma skriptlariga import qiling.",
    mistake: "Loyiha modul tizimini tekshirmasdan require va import sintaksisini aralashtirish.",
  },
  "backend-004": {
    example: "Vazifa yaratilganda POST 201, topilmagan vazifa uchun GET 404 qaytarsin.",
    mistake: "Holatni o‘zgartirish amali uchun GET ishlatish.",
  },
  "backend-005": {
    example: "Ombor serveri /health orqali ishlayotganini bildiradi.",
    mistake: "Portni qattiq yozib, hosting belgilagan PORT qiymatini chetlab o‘tish.",
  },
  "backend-006": {
    example: "/orders/72 buyurtma identifikatorini, ?status=paid filtrni bildiradi.",
    mistake: "URL parametrini tekshirmasdan raqam sifatida ishlatish.",
  },
  "backend-007": {
    example: "Yangi yozuv so‘rovida mijoz Content-Type orqali JSON yuborayotganini bildiradi.",
    mistake: "Routerdan oldin JSON parser ulashni unutib, req.body dan qiymat o‘qish.",
  },
  "backend-008": {
    example: "Buyurtma route’idan oldin sessiyani tekshiradigan middleware ishlaydi.",
    mistake: "Javob qaytarmay va next funksiyasini chaqirmay so‘rovni kutishda qoldirish.",
  },
  "backend-009": {
    example: "Mahsulotlar uchun GET /products va POST /products kabi bitta resurs yo‘lidan foydalaning.",
    mistake: "Bir resursning turli amallariga o‘zaro mos kelmaydigan nomlar berish.",
  },
  "backend-010": {
    example: "Yetkazish manzili bo‘sh bo‘lsa, buyurtmani saqlamasdan maydon xatosini qaytaring.",
    mistake: "Faqat brauzerda validatsiya qilib, API so‘rovini tekshirmaslik.",
  },
  "backend-011": {
    example: "Baza vaqtincha ishlamasa, javobga qisqa xabar, logga so‘rov identifikatorini yozing.",
    mistake: "Ichki stack trace yoki maxfiy qiymatlarni mijozga yuborish.",
  },
  "backend-012": {
    example: "Xaridor tizimga kirgach ham faqat o‘z buyurtmasini ochishi mumkin.",
    mistake: "Sessiya borligini tekshirib, buyurtma egasini tekshirmaslik.",
  },
  "backend-013": {
    example: "Akkount parolini maxsus parol xeshlash kutubxonasi orqali saqlang.",
    mistake: "Parolni ochiq matnda yoki oddiy tezkor xesh bilan saqlash.",
  },
  "backend-014": {
    example: "Profilga kirishdan oldin token imzosi va amal qilish vaqtini tekshiring.",
    mistake: "Tokenni decode qilib, imzosini tekshirmasdan ishonish.",
  },
  "backend-015": {
    example: "Ishlab chiqish va sinov muhitlarida bir API alohida baza ulanishlarini oladi.",
    mistake: "Haqiqiy .env faylini Git tarixiga qo‘shish.",
  },
  "backend-016": {
    example: "API ruxsatli veb manbalarni sozlaydi va so‘rov tezligini chegaralaydi.",
    mistake: "CORS’ni foydalanuvchi ruxsati tekshiruvi o‘rnida ishlatish.",
  },
  "backend-017": {
    example: "Buyurtma repository’si bitta ulanish havzasidan foydalanadi.",
    mistake: "Har bir so‘rovga yangi baza ulanishi ochish.",
  },
  "backend-018": {
    example: "Yangi buyurtma ID’si yozuv bazaga saqlangach qaytariladi.",
    mistake: "Promise tugashidan oldin 201 yuborib, yozish xatosini yo‘qotish.",
  },
  "backend-019": {
    example: "Sinov yopiq vazifaga begona akkauntdan murojaat qilib rad etilgan javobni tekshiradi.",
    mistake: "Faqat muvaffaqiyatli CRUD yo‘lini sinash.",
  },
  "backend-020": {
    example: "Vazifani yaratish, o‘qish, yakunlash va o‘chirishni alohida test hisobida bajaring.",
    mistake: "Bo‘sh sarlavhali so‘rov bazaga yozilmaganini tekshirmaslik.",
  },
  "db-001": {
    example: "Kursga yozilishni jadvallarda, birga o‘qiladigan kurs tafsilotlarini hujjatda ifodalab ko‘ring.",
    mistake: "Model tanlashda ma’lumotlar qanday o‘qilishi va yangilanishini hisobga olmaslik.",
  },
  "db-002": {
    example: "tasks kolleksiyasida vazifa nomi va statusi bir xil turda saqlanadi.",
    mistake: "Bir maydonni turli hujjatlarda turli turlarda yozib, filtr natijasini buzish.",
  },
  "db-003": {
    example: "Sinov skripti test bazasiga ulanadi va ish tugaganda ulanishni yopadi.",
    mistake: "Sinov ulanish satriga ishlayotgan asosiy bazani qo‘yib yuborish.",
  },
  "db-004": {
    example: "Haftalik vazifalarni insertMany bilan yaratib, identifikatorlarni tekshiring.",
    mistake: "Yozish natijasini tekshirmasdan muvaffaqiyat xabarini chiqarish.",
  },
  "db-005": {
    example: "Egasi va statusi bo‘yicha shu foydalanuvchining ochiq vazifalarini oling.",
    mistake: "Kursorni natijalar ro‘yxati deb qabul qilib, hujjatlarni o‘qimaslik.",
  },
  "db-006": {
    example: "Status va yangilanish vaqtini $set orqali o‘zgartiring.",
    mistake: "Butun hujjatni almashtirib, boshqa maydonlarni yo‘qotish.",
  },
  "db-007": {
    example: "Arxivdagi bitta vazifani egasi va ID’si bo‘yicha o‘chiring.",
    mistake: "deleteMany uchun bo‘sh filtr yuborish.",
  },
  "db-008": {
    example: "$gte va $lt bilan shu haftaga tegishli muddatli vazifalarni toping.",
    mistake: "Date maydonini matn qiymati bilan solishtirish.",
  },
  "db-009": {
    example: "Mobil ro‘yxatga nom, status va muddatni olib, muddat bo‘yicha saralang.",
    mistake: "Bir xil muddatli yozuvlar uchun ikkilamchi saralash mezonini belgilamaslik.",
  },
  "db-010": {
    example: "Egasi va sana bo‘yicha so‘rovni indeksdan oldin va keyin explain bilan solishtiring.",
    mistake: "Har bir maydonga indeks yaratib, yozish xarajati va hajmini hisobga olmaslik.",
  },
  "db-011": {
    example: "Buyurtmaga o‘sha paytdagi yetkazish manzili nusxasini qo‘shing.",
    mistake: "Cheksiz o‘sadigan hodisalar ro‘yxatini bitta hujjatga joylash.",
  },
  "db-012": {
    example: "Bir foydalanuvchini har bir vazifaga ko‘chirish o‘rniga ID bilan bog‘lang.",
    mistake: "ID o‘chirilganda qolgan yozuvlar xatti-harakatini belgilamaslik.",
  },
  "db-013": {
    example: "Vazifa statusiga faqat ruxsatli qiymatlar kirishini Mongoose schema orqali ifodalang.",
    mistake: "Yangilash amallarida schema validatsiyasi ishlashini tekshirmaslik.",
  },
  "db-014": {
    example: "Egasi va ID mos vazifaning nomini o‘zgartiring va yangi nomni formaga qaytaring.",
    mistake: "Metod eski yoki yangilangan hujjat qaytarishini tekshirmaslik.",
  },
  "db-015": {
    example: "Dashboard uchun vazifalarni egasi bo‘yicha filtrlang, keyin status bo‘yicha sanang.",
    mistake: "Filtrsiz barcha foydalanuvchi vazifalarini hisoblash.",
  },
  "db-016": {
    example: "Vazifalarni dueAt va _id bo‘yicha saralab, oxirgi yozuvdan keyingi sahifa kursorini yasang.",
    mistake: "Kursorga tartibdagi maydonlardan faqat bittasini saqlash.",
  },
  "db-017": {
    example: "Ombordagi sonni kamaytirish va buyurtma yaratishni bitta tranzaksiyada bajaring.",
    mistake: "Tranzaksiyadagi amallardan biriga session uzatishni unutish.",
  },
  "db-018": {
    example: "Ilova uchun huquqi cheklangan baza foydalanuvchisi va ruxsatli ulanish manbasini sozlang.",
    mistake: "Ulanish satrini ekran rasmi yoki logga chiqarish.",
  },
  "db-019": {
    example: "Zaxirani sinov bazasiga tiklab, yozuvlar soni va nazorat namunalarini solishtiring.",
    mistake: "Zaxira olinganiga qarab, tiklashni sinamasdan ish bitdi deb hisoblash.",
  },
  "db-020": {
    example: "Repository orqali vazifa yarating, ID bilan qayta oling va egasi filtrini tekshiring.",
    mistake: "Sinovlarni oldingi test qoldirgan ma’lumotlarga bog‘lash.",
  },
};

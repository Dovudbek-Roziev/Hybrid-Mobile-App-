import type { LessonGuide } from '../model';

export const foundationsGuides = {
  "js-001": {
    goal: "const va let orasidan qiymat qayta berilishiga qarab tanlay olish.",
    plain: "O‘yinchi nomi o‘sha-o‘sha qoladi, hisob esa har ochkoda o‘zgaradi. Shu ikki qiymat uchun bir xil e’lon kerak emas.",
    reflection: "Odatda const bilan boshlang. O‘zgaruvchining o‘ziga yangi qiymat beriladigan joyda let ishlating.",
  },
  "js-002": {
    goal: "Qiymatning turini aniqlash va matn, son hamda mantiqiy qiymatni farqlash.",
    plain: "Ekrandagi 7 bilan qo‘shtirnoq ichidagi '7' bir xil ko‘rinadi. Hisob-kitobda ularning xatti-harakati farq qiladi.",
    reflection: "Kiritma ustida amal bajarishdan oldin uning turini tekshiring. Matn ko‘rinishidagi sonni kerak bo‘lsa ochiq aylantiring.",
  },
  "js-003": {
    goal: "Parametr oladigan va natija qaytaradigan funksiya yozish.",
    plain: "Kalkulyatorga ikkita son kiritasiz va bitta natija olasiz. Funksiya ham kirishdan natija chiqaradigan qolip.",
    reflection: "Parametrlar hisobga kiradi. return natijani keyingi hisobda ishlatish uchun chiqaradi.",
  },
  "js-004": {
    goal: "Massiv elementlarini indeks bo‘yicha olish va chegarani to‘g‘ri ishlatish.",
    plain: "Navbatdagi birinchi o‘rin JavaScript’da 0-raqamli o‘rin. Uchta element bo‘lsa, oxirgisi 2-indeksda turadi.",
    reflection: "Bo‘sh massivni alohida tekshiring. Mavjud oxirgi element indeksi length − 1.",
  },
  "js-005": {
    goal: "Obyekt maydonini doimiy yoki dinamik kalit orqali o‘qish.",
    plain: "Kontaktning ism va raqami bir yozuvga tegishli. Qaysi maydonni olish kerakligini uning nomi belgilaydi.",
    reflection: "Kalit nomi oldindan ma’lum bo‘lsa nuqta, o‘zgaruvchidan kelsa kvadrat qavs ishlating.",
  },
  "js-006": {
    goal: "Shart asosida ikki yo‘ldan birini tanlaydigan kod yozish.",
    plain: "70 ball o‘tish chegarasi bo‘lsa, 69 bir yo‘ldan, 70 esa boshqa yo‘ldan ketadi.",
    reflection: "if yozganda chegaraning o‘zini ham sinab ko‘ring. >= va > farqi aynan shu nuqtada bilinadi.",
  },
  "js-007": {
    goal: "Takrorlashning boshlanishi, chegarasi va qadamini boshqarish.",
    plain: "Besh javonni ketma-ket tekshirishda qaysi javondan boshlash, qayerda to‘xtash va keyingisiga qanday o‘tish ma’lum bo‘ladi.",
    reflection: "Loop uchun birinchi va oxirgi iteratsiyani qo‘lda kuzating. Shart chegaradan tashqariga chiqishni to‘xtatsin.",
  },
  "js-008": {
    goal: "== va === natijalari qachon farqlanishini tushuntirish.",
    plain: "Telefon formasi raqamni matn qilib yuborishi mumkin. Qiymatlar bir xil ko‘ringanda ham turi muhim.",
    reflection: "Kutilmagan tur o‘zgarishidan qochish uchun qat’iy tenglik va kerakli ochiq konversiyadan foydalaning.",
  },
  "js-009": {
    goal: "&&, || va ! bilan shartlarni birlashtirish va qaysi operand ishlashini aniqlash.",
    plain: "Eshik ochilishi uchun kalit ham, ruxsat ham kerak. Zaxira kirish esa ikkita ruxsatdan bittasi bo‘lsa yetarli bo‘lishi mumkin.",
    reflection: "&& va || javob oldindan ma’lum bo‘lganda o‘ng operandni bajarmaydi. Qiymat sifatida ishlatsangiz qaytadigan operandni tekshiring.",
  },
  "js-010": {
    goal: "map bilan qiymatni o‘zgartirish, filter bilan elementlarni tanlash.",
    plain: "50 balldan yuqorilarni ajratish ro‘yxatni qisqartiradi. Qolgan ballga belgi qo‘shish esa har elementning ko‘rinishini o‘zgartiradi.",
    reflection: "Elementni o‘zgartirish uchun map, tanlab qoldirish uchun filter tanlang. Kerak bo‘lsa ikkalasini ketma-ket qo‘llang.",
  },
  "js-011": {
    goal: "Template literal orqali qiymat va matnni bir satrda birlashtirish.",
    plain: "Salomlashuv matni bir xil, foydalanuvchi ismi esa har safar boshqa joydan keladi.",
    reflection: "Backtick ichidagi ifoda hisoblanib matnga qo‘shiladi. Natijadagi bo‘shliq va qator uzilishini ham tekshiring.",
  },
  "js-012": {
    goal: "Massiv va obyektdan kerakli qiymatlarni bir e’londa ajratish.",
    plain: "Manzildan faqat shahar, pochtadan faqat indeks kerak bo‘lsa, butun yozuv bilan ishlash shart emas.",
    reflection: "Obyektda kalit nomi, massivda esa joylashuv ahamiyatli. Default faqat qiymat undefined bo‘lganda ishlaydi.",
  },
  "js-013": {
    goal: "Spread va rest vazifalarini joylashuvga qarab ajratish.",
    plain: "Qutidagi hamma narsani stolga yoyish va qolgan narsalarni bitta qutiga yig‘ish qarama-qarshi amallar.",
    reflection: "Spread qiymatlarni yoyadi, rest qolganlarini yig‘adi. Yuzaki nusxada ichki obyektlar umumiy bo‘lib qolishi mumkin.",
  },
  "js-014": {
    goal: "Blok chegarasida qaysi o‘zgaruvchi ko‘rinishini aniqlash.",
    plain: "Xonaning ichida yozilgan e’lonni koridordan ko‘rib bo‘lmaydi. Ichkaridagi bir xil ism tashqaridagi ismni vaqtincha soyada qoldirishi mumkin.",
    reflection: "let va const uchun ko‘rinish sohasi blok bilan belgilanadi. Bir xil nom ishlatilganda eng yaqin e’lonni toping.",
  },
  "js-015": {
    goal: "JavaScript qiymatining shart ichida qanday baholanishini oldindan aytish.",
    plain: "0 ball va bo‘sh matn shartda false kabi ishlaydi. Bo‘sh massiv esa mavjud obyekt sifatida true bo‘ladi.",
    reflection: "Ro‘yxatning bo‘shligini massivning o‘zi bilan emas, length orqali tekshiring.",
  },
  "js-016": {
    goal: "Yo‘q qiymatni xavfsiz o‘qish va 0 kabi foydali qiymatlarni saqlash.",
    plain: "Ovoz balandligi 0 bo‘lsa, u ongli tanlov. Sozlama umuman berilmagandagina standart qiymat kerak.",
    reflection: "?. uzilgan yo‘ldan xavfsiz o‘tadi. ?? faqat null va undefined uchun zaxira qiymatni tanlaydi.",
  },
  "js-017": {
    goal: "Qiymatlar va kalitlar bo‘ylab yurish uchun mos loopni tanlash.",
    plain: "Mahsulotlar ro‘yxatida mahsulotning o‘zi kerak. Narxlar jadvalida esa avval mahsulot nomlari kerak bo‘lishi mumkin.",
    reflection: "for...of iterable qiymatlarini beradi. Obyektning faqat o‘z kalitlari kerak bo‘lsa, Object.keys bilan chegaralang.",
  },
  "js-018": {
    goal: "Xatoni ushlash va tozalash ishini ishonchli bajarish.",
    plain: "Fayl noto‘g‘ri bo‘lsa ham ochilgan resurs yopilishi kerak. Xato holati uchun ham alohida yo‘l rejalashtiriladi.",
    reflection: "try ichiga xato berishi mumkin bo‘lgan ishni qo‘ying. catch’da sababni boshqaring, finally’da resursni bo‘shating.",
  },
  "js-019": {
    goal: "JavaScript qiymatini JSON matnga aylantirib, qayta o‘qish.",
    plain: "Profilni faylga yozish uchun obyektni matnga aylantirasiz. Qayta ochganda matnni yana o‘qiladigan qiymatga aylantirasiz.",
    reflection: "JSON ko‘rinishida hamma JavaScript turi asl holida saqlanmaydi. Sana va undefined uchun alohida qaror qiling.",
  },
  "js-020": {
    goal: "Arrow va oddiy funksiyaning return hamda this xususiyatlarini solishtirish.",
    plain: "Bir qatorli hisobni qisqa yozish qulay. Obyekt metodida esa chaqiruv paytidagi egasi ahamiyatli bo‘lishi mumkin.",
    reflection: "Arrow tashqi this’ni oladi. Obyektni ifoda sifatida qaytarishda qavs ishlating.",
  },
  "js-021": {
    goal: "Ball qo‘shish, yetakchini topish va teng natijani sinash orqali Score Tracker yig‘ish.",
    plain: "Har turda ball qo‘shiladi, jadval esa kim oldinda ekanini ko‘rsatadi. Tenglik bo‘lsa, tartib qoidasini oldindan tanlash kerak.",
    reflection: "Ballni yangilash va jadvalni saralashni alohida sinang. Bo‘sh ro‘yxat va tenglikni ham qamrab oling.",
  },
  "js-022": {
    goal: "Chaqiruvlardan stack hosil bo‘lishini va xato izini o‘qishni tushunish.",
    plain: "Birinchi ish ikkinchisini chaqirsa, uning natijasini kutadi. Ichki ish tugagach boshqaruv oldingi joyiga qaytadi.",
    reflection: "Stack yuqorisida eng yangi sinxron chaqiruv turadi. Xato chiqqan joydan uni chaqirgan yo‘lga qarab boring.",
  },
  "js-023": {
    goal: "Hoisting va temporal dead zone sabab e’lon oldidagi murojaatni tahlil qilish.",
    plain: "Funksiya e’loni oldindan tanilishi mumkin. let bilan ochilgan qutiga esa qiymat joylanmaguncha undan olib bo‘lmaydi.",
    reflection: "let va const’ni boshlang‘ich qiymat berilgandan keyin o‘qing. Function declaration va function expression holatlarini farqlang.",
  },
  "js-024": {
    goal: "Closure yordamida chaqiruvlar orasida alohida holat saqlash.",
    plain: "Har bir hisoblagich o‘z hisobini eslab qoladi. Bitta hisoblagichni oshirish boshqasining soniga ta’sir qilmaydi.",
    reflection: "Ichki funksiya tashqi nomlarga murojaatini saqlaydi. Tashqi funksiya har chaqirilganda mustaqil holat yaratilishi mumkin.",
  },
  "js-025": {
    goal: "this qiymatini chaqiruv shakliga qarab aniqlash.",
    plain: "Metodni obyekt orqali chaqirsangiz, u egasi bilan keladi. Uni alohida o‘zgaruvchiga olib chaqirsangiz, bu aloqa yo‘qolishi mumkin.",
    reflection: "Metodni callback qilib uzatganda receiver kerakmi, tekshiring. Zarur paytda wrapper yoki bind ishlating.",
  },
  "js-026": {
    goal: "Xossa qayerdan olinganini prototype chain bo‘ylab izlash.",
    plain: "Obyektning o‘zida javob bo‘lmasa, u umumiy andozadan izlanadi. Obyektning o‘zidagi nom andozadagi shu nomdan ustun turadi.",
    reflection: "Xossa avval obyektning o‘zida tekshiriladi. Topilmasa prototiplar zanjiri bo‘ylab qidiriladi.",
  },
  "js-027": {
    goal: "Funksiyani qabul qiladigan yoki qaytaradigan andoza tuzish.",
    plain: "Saralash jarayoniga qanday taqqoslash kerakligini alohida topshiriq qilib berasiz. Jarayon o‘zi shu topshiriqdan foydalanadi.",
    reflection: "Callback orqali amalni ajrating. Funksiyani qaytarish bilan oldindan sozlangan yangi amal yarating.",
  },
  "js-028": {
    goal: "reduce orqali ro‘yxatdan yig‘indi yoki guruhlangan natija olish.",
    plain: "Bir savatdagi narxlarni birma-bir qo‘shasiz va joriy yig‘indini yoningizda olib yurasiz.",
    reflection: "Boshlang‘ich accumulator natija turini belgilaydi. Bo‘sh ro‘yxatda qanday qiymat qaytishini oldindan aniqlang.",
  },
  "js-029": {
    goal: "Promise holatlari, zanjir va rad etilishni boshqarish.",
    plain: "Yetkazma hali yo‘lda, topshirilgan yoki muvaffaqiyatsiz bo‘lishi mumkin. Keyingi ish tayyor natija yoki xato asosida boshlanadi.",
    reflection: "then ichidan keyingi Promise’ni qaytaring. catch bilan zanjirdagi xato yo‘lini yakunlang.",
  },
  "js-030": {
    goal: "async va await bilan ketma-ketlikni hamda xato yo‘lini yozish.",
    plain: "Javob kelguncha shu ish kutadi, boshqa ishlar davom etadi. Javob xato kelsa, kutayotgan qatordan boshqaruv xato bo‘limiga o‘tadi.",
    reflection: "async funksiya Promise qaytaradi. await qilingan amal rad etilishini try/catch bilan boshqaring.",
  },
  "js-031": {
    goal: "Sinxron kod, microtask va timer chiqish tartibini izohlash.",
    plain: "Joriy ish tugagach avval kichik navbat, undan keyin navbatdagi timer tekshiriladi. Shu sababli taymer nolga qo‘yilsa ham darhol ishlamaydi.",
    reflection: "Stack bo‘shashini kuting, keyin microtask navbatini hisobga oling. Log tartibini shu ketma-ketlikda taxmin qiling.",
  },
  "js-032": {
    goal: "Mustaqil asinxron ishlarni Promise.all bilan birga kutish.",
    plain: "Ikki hujjatni bir vaqtning o‘zida so‘rash mumkin. Tayyor natijalar esa siz so‘ragan tartibda yig‘iladi.",
    reflection: "Mustaqil ishlarni birga boshlang. Promise.all’da bitta rad javobi umumiy kutishni rad etadi.",
  },
  "js-033": {
    goal: "fetch orqali HTTP javobini olish va status bilan tarmoq xatosini farqlash.",
    plain: "Server 404 deb javob berganida aloqa ishlagan bo‘ladi. Javob mavjud, ammo so‘ralgan resurs yo‘q.",
    reflection: "Response’ni olgach statusni tekshiring. Keyin faqat kutilgan turdagi body’ni o‘qing.",
  },
  "js-034": {
    goal: "ES module orqali eksport va import chegaralarini tashkil etish.",
    plain: "Boshqa faylga faqat foydalanishga ruxsat berilgan funksiyalarni ko‘rsatasiz. Ichki yordamchilar fayl ichida qoladi.",
    reflection: "Named import eksport nomi bilan mos kelsin. Default qiymatni import qiluvchi o‘z nomi bilan olishi mumkin.",
  },
  "js-035": {
    goal: "Kalitli qiymat bilan noyob elementlar to‘plamiga mos tuzilma tanlash.",
    plain: "Telefon raqami odam nomiga tegishli bo‘lsa, Map qulay. Faqat qaysi nomlar takrorlanmasligi kerak bo‘lsa, Set yetarli.",
    reflection: "Kalit orqali qiymatga yetish uchun Map, takrorni yo‘qotish yoki a’zolik uchun Set ishlating.",
  },
  "js-036": {
    goal: "Ketma-ket hodisalarni debounce va taymer yordamida boshqarish.",
    plain: "So‘z yozayotganda har harf uchun so‘rov yuborish shart emas. Yozish to‘xtagach, oxirgi matnni yuborish yetarli.",
    reflection: "Yangi hodisa kelganda oldingi taymerni bekor qiling. Yopilgan ekran ortda taymer qoldirmasin.",
  },
  "js-037": {
    goal: "Navbatdagi ishlarni cheklangan miqdorda bajaradigan Task Queue tuzish.",
    plain: "Ikki ishchi mavjud bo‘lsa, uchinchi ish bo‘sh joy kutadi. Bitta ish xato olsa, navbat davom etishi kerak.",
    reflection: "Faol ishlar sonini hisoblang va tugashning ikkala yo‘lida joyni bo‘shating. Limit hech qachon ortib ketmasin.",
  },
  "ts-001": {
    goal: "TypeScript ishga tushirishdan oldin qanday xatoni tutishini misolda ko‘rish.",
    plain: "Hisoblash funksiyasi son kutsa, unga matn uzatilganini kompilyator ish boshlanishidan oldin ko‘ra oladi.",
    reflection: "TypeScript mos kelmagan turlarni erta bildiradi. Runtime kiritma uchun alohida tekshiruv kerak.",
  },
  "ts-002": {
    goal: "Qiymat va kontekstdan chiqarilgan turni tanish.",
    plain: "Boshlang‘ich qiymat “tayyor” bo‘lsa, kompilyator keyin kelishi mumkin bo‘lgan qiymatlarni e’lon shakliga qarab baholaydi.",
    reflection: "Inference yetarli joyda ortiqcha izoh yozmang. Shartnoma aniq tur talab qilsa, uni belgilang.",
  },
  "ts-003": {
    goal: "Bir turli massiv va pozitsiyali tuple orasidan tanlash.",
    plain: "Ballar ro‘yxatida hamma element son. Koordinata qatorida esa birinchi va ikkinchi joylar belgilangan ma’noga ega.",
    reflection: "Bir xil elementlar ketma-ketligi uchun array ishlating. Har o‘rin o‘z turiga ega bo‘lsa tuple tanlang.",
  },
  "ts-004": {
    goal: "Obyekt uchun kerakli maydonlar va ularning turlarini e’lon qilish.",
    plain: "Vazifada nom va ID kerak bo‘lsa, qabul qiluvchi shaklni avvaldan bilishi mumkin.",
    reflection: "Majburiy maydonlar shartnomani belgilaydi. Tashqaridan kelgan obyekt shaklini runtime’da ham tekshiring.",
  },
  "ts-005": {
    goal: "Optional maydon berilganda va bo‘lmaganda xavfsiz ishlash.",
    plain: "Vazifa nomi kerak, izohi esa bo‘lmasligi mumkin. Ekran ikkala holatda ham tushunarli matn ko‘rsatishi kerak.",
    reflection: "? maydon o‘qilganda undefined’ni hisobga oling. Tekshiruv yoki standart qiymat qo‘llang.",
  },
  "ts-006": {
    goal: "Union qiymatini tarmoqlarga ajratib, har turga mos amal bajarish.",
    plain: "Kiritma son yoki matn bo‘lishi mumkin. Uzunlikni olishdan avval qaysi biri kelganini bilib oling.",
    reflection: "Bir nechta variant mavjud bo‘lsa, umumiy amalni ishlating yoki type guard bilan turni toraytiring.",
  },
  "ts-007": {
    goal: "Mumkin bo‘lgan qiymatlarni literal tur bilan cheklash.",
    plain: "Svetoforda faqat belgilangan uchta holat bor. Tasodifiy to‘rtinchi matn xato bo‘ladi.",
    reflection: "Holatlar oldindan aniq bo‘lsa, keng string o‘rniga literal union e’lon qiling.",
  },
  "ts-008": {
    goal: "Funksiya kirish parametrlari va qaytish turi uchun shartnoma tuzish.",
    plain: "Daqiqani sekundga aylantiradigan qurilma kirishda son kutadi va chiqishda ham son beradi.",
    reflection: "Parametrda qabul qilinadigan turni, chiqishda va’da qilingan natijani aniqlang. Kutilmagan qaytishlarni kompilyator bilan ushlang.",
  },
  "ts-009": {
    goal: "Interface orqali bir nechta realizatsiya bajaradigan obyekt shartnomasini yozish.",
    plain: "Ikki xil ombor ham buyurtmani topish xizmatini berishi mumkin. Chaqiruvchi ikkisi uchun bir xil amalni ishlatadi.",
    reflection: "Interface tashqi shaklni belgilaydi. Ichki tuzilmani realizatsiyaga qoldiring.",
  },
  "ts-010": {
    goal: "typeof, in yoki belgilovchi qiymat bilan union turni toraytirish.",
    plain: "Bir quti ichida matn yoki nomli yozuv bo‘lishi mumkin. Yozuvning nomini olishdan oldin qutida nima borligini tekshiring.",
    reflection: "Har branch’da kompilyator tasdiqlagan turga mos xossalarni o‘qing.",
  },
  "ts-011": {
    goal: "Generics orqali kirish va chiqish turlari orasidagi bog‘lanishni saqlash.",
    plain: "Qolipga qaysi turdagi qiymat kirsa, natijadan ham o‘sha turdagi ma’lumot olinadi.",
    reflection: "T bilan bog‘lanishni ifodalang. Funksiya faqat ma’lum xossaga muhtoj bo‘lsa constraint qo‘ying.",
  },
  "ts-012": {
    goal: "Readonly, Partial va Pick yordamida asl turdan maqsadli shakl olish.",
    plain: "Ro‘yxat uchun vazifaning hamma maydoni kerak emas. Tahrir holatida faqat o‘zgargan maydonlar yuborilishi mumkin.",
    reflection: "Pick tanlangan maydonlarni saqlaydi, Partial ularni ixtiyoriy qiladi. Readonly tur darajasida yozishni cheklaydi.",
  },
  "ts-013": {
    goal: "Async funksiyaning qaytish turini Promise ichida ifodalash.",
    plain: "Ombordan ro‘yxat hozir emas, yuklanish tugagach keladi. Kutib bo‘lgandan keyin ro‘yxat bilan ishlaysiz.",
    reflection: "Promise<T> kutilayotgan natijani belgilaydi. await qilinganda T bilan ishlaysiz, rad etilish uchun yo‘l qoldiring.",
  },
  "ts-014": {
    goal: "Holatni belgilovchi maydon orqali union variantini xavfsiz ajratish.",
    plain: "Yuklanish holatida ma’lumot yo‘q. Muvaffaqiyat bo‘lganda ro‘yxat, xato bo‘lganda tushuntirish mavjud.",
    reflection: "Har variantda bitta literal belgi va unga tegishli ma’lumot bo‘lsin. Barcha variantlarni switch’da qamrab oling.",
  },
  "ts-015": {
    goal: "Ishonchsiz qiymat uchun unknown va any orasidagi farqni amalda ko‘rish.",
    plain: "Tashqaridan kelgan quti ichida nima borligini bilmaymiz. Avval tekshiruvdan o‘tkazib, keyin kerakli asbobni ishlatamiz.",
    reflection: "unknown qiymatni ishlatishdan oldin toraytiring. any tanlovi kompilyatorning foydali tekshiruvlarini yo‘qotadi.",
  },
  "ts-016": {
    goal: "Task turi va holatlari bilan qo‘shish, topish hamda yakunlash oqimini yozish.",
    plain: "Vazifaning nomi bir xil bo‘lishi mumkin. Bajarilganini belgilash uchun nomga emas, noyob ID’ga qaraysiz.",
    reflection: "Yaratish va yangilash bir turdagi shartnomaga amal qilsin. Yo‘q ID uchun kutilgan xatti-harakatni belgilab sinang.",
  },
  "react-001": {
    goal: "Qayta ishlatiladigan React komponentini ma’lumotdan ajratib yozish.",
    plain: "Bitta karta qolipi har bir dars uchun boshqa nom va tafsilotlarni ko‘rsatishi mumkin.",
    reflection: "Kichik UI bo‘lagini komponentga oling, farqli ma’lumotni props orqali uzating.",
  },
  "react-002": {
    goal: "JSX ichida JavaScript ifodasini ko‘rsatish va elementlarni guruhlash.",
    plain: "Oddiy matn ichiga hisoblangan ballni qo‘yish uchun JSX maxsus qavsdan foydalanadi.",
    reflection: "Ifoda ichida qiymat hosil qiling. Yonma-yon elementlarni bitta ota element yoki fragment bilan qaytaring.",
  },
  "react-003": {
    goal: "Bir komponentni turli props qiymatlari bilan qayta ishlatish.",
    plain: "Bir dars kartasi “JavaScript”, boshqasi “React” deb ko‘rinadi. Karta tuzilishi bir xil qoladi.",
    reflection: "Props komponentga ma’lumot uzatadi. O‘zgarish kerak bo‘lsa, ota komponentga callback orqali xabar bering.",
  },
  "react-004": {
    goal: "State’ni yangilash va oldingi qiymatdan hisoblashni to‘g‘ri yozish.",
    plain: "Hisobni ketma-ket ikki oshirish uchun har safar eng so‘nggi raqam kerak.",
    reflection: "Oldingi qiymatga tayanadigan update’da functional setter ishlating. Obyekt yoki massivni joyida o‘zgartirmang.",
  },
  "react-005": {
    goal: "Hodisa ishlovchisini render vaqtida chaqirmasdan bog‘lash.",
    plain: "Qo‘ng‘iroq bosilganda jiringlashi kerak. Tugmani devorga o‘rnatayotgan paytda jiringlashi kutilmaydi.",
    reflection: "Handler’ni funksiya sifatida uzating. Bajarilishi kerak bo‘lgan amal hodisa kelganda boshlansin.",
  },
  "react-006": {
    goal: "Holatga qarab mos loading, empty, success yoki error ko‘rinishini tanlash.",
    plain: "Qidiruv javobi hali kelmaganida kutish ko‘rinadi. Javob kelib ro‘yxat bo‘sh bo‘lsa, bu boshqa holat.",
    reflection: "Bo‘sh natija va yuklanishni alohida ifodalang. Son ishlatiladigan shartda 0 ekranga chiqib ketmasin.",
  },
  "react-007": {
    goal: "Ro‘yxat qatorlariga qayta tartiblashda saqlanadigan key berish.",
    plain: "Kartalar joyi almashganda har bir kartaning o‘z yozuvi qolishi kerak. O‘rin raqami karta bilan birga ko‘chmaydi.",
    reflection: "Stable ID’ni key qiling. O‘chirish yoki saralashda indeks qiymati o‘zgarishini hisobga oling.",
  },
  "react-008": {
    goal: "Forma qiymatini state orqali boshqarish va yuborishda tekshirish.",
    plain: "Maydonga yozilgan narsa state’da saqlanadi. Ekran shu qiymatni qaytarib ko‘rsatadi.",
    reflection: "value va o‘zgarish handlerini bir manbaga bog‘lang. Yuborishda bo‘sh qiymat va chegaralarni tekshiring.",
  },
  "react-009": {
    goal: "Tashqi obunani useEffect ichida ochish va vaqtida yopish.",
    plain: "Kerakli kanalda tinglashni boshlaysiz. Ekran yopilganda tinglashni ham to‘xtatish kerak.",
    reflection: "Dependency o‘zgarsa avval eski cleanup ishlaydi. Taymer, so‘rov yoki obunani o‘z vaqtida tozalang.",
  },
  "react-010": {
    goal: "Takroriy holat mantiqini custom hook ichida qayta foydalanish.",
    plain: "Ikki ekran bir xil qidiruv tartibidan foydalansa ham, har biri o‘z matnini saqlaydi.",
    reflection: "Hook bir xil mantiqni ulashadi. Har chaqiruv o‘z holatini yuritadi va hook’lar doim bir tartibda ishlaydi.",
  },
  "react-011": {
    goal: "Bir qiymatga bog‘liq ikki ekranchani umumiy ota state’iga ulash.",
    plain: "Filtr va natija ro‘yxati bir xil tanlovni bilishi kerak. Tanlov ikkisiga umumiy joyda saqlanadi.",
    reflection: "Birgalikdagi state’ni eng yaqin umumiy ota komponentgacha ko‘taring. Hisoblab olinadigan qiymatni yana saqlamang.",
  },
  "react-012": {
    goal: "Context orqali chuqur joylashgan komponentlarga umumiy qiymat uzatish.",
    plain: "Mavzu ranglari butun ilovaga kerak. Har oraliq komponentga ranglarni qo‘lda uzatish o‘rniga bitta provider beradi.",
    reflection: "Context globalga yaqin umumiy qiymatlar uchun qulay. Tez yangilanadigan qiymat ko‘p consumer’ni qayta render qilishi mumkin.",
  },
  "react-013": {
    goal: "Renderga sabab bo‘lmaydigan reference saqlash va unga murojaat qilish.",
    plain: "Inputga fokus berish uchun uning reference’i kerak, fokus buyruği ekran matnini o‘zgartirmaydi.",
    reflection: "useRef qiymati renderlar orasida qoladi. Ekranda ko‘rinishi kerak bo‘lgan qiymatni state’da saqlang.",
  },
  "react-014": {
    goal: "Hisob yoki callback’ni dependency asosida memoizatsiya qilish mezonini tanlash.",
    plain: "Katta ro‘yxatni qayta filtrlash xarajatli bo‘lishi mumkin. Qidiruv so‘zi o‘zgarmasa, avvalgi natijadan foydalanish mumkin.",
    reflection: "Avval haqiqiy xarajatni o‘lchang. useMemo qiymat, useCallback funksiya reference’ini qayta ishlatadi.",
  },
  "react-015": {
    goal: "URL va ekranni route hamda dinamik parametr bilan bog‘lash.",
    plain: "Ro‘yxatdan 7-chi vazifani ochsangiz, URL’da 7 yoziladi. Shu manzil qayta ochilganda kerakli vazifa topilishi mumkin.",
    reflection: "Parametrni o‘qing va tekshiring. Topilmagan ID uchun alohida holat ko‘rsating.",
  },
  "react-016": {
    goal: "Forma, state va stable key orqali Todo List’ni birlashtirish.",
    plain: "Bir xil nomli ikkita vazifaga turli ID berilsa, faqat tanlanganini belgilash yoki o‘chirish oson.",
    reflection: "Qo‘shish, yakunlash va o‘chirishni immutable yangilanish bilan yozing. Bir xil nomli vazifalarni ID orqali farqlang.",
  },
} satisfies Record<string, LessonGuide>;

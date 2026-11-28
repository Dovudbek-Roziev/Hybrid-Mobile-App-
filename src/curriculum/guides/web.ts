import type { LessonGuide } from '../model';

export const webGuides = {
  "next-001": {
    goal: "app katalogidagi fayllarni App Router manzillariga bog‘lash.",
    plain: "Papkalar marshrut daraxtini, page fayli esa o‘sha manzilda ko‘rinadigan ekranni bildiradi.",
    reflection: "Har bir URL uchun mos segment va page’ni toping. Umumiy UI’ni layoutga joylang.",
  },
  "next-002": {
    goal: "Ichma-ich segmentlar yordamida ko‘p bosqichli URL tuzish.",
    plain: "Kurslar ichidagi JavaScript sahifasi uchun avval courses, keyin js papkasi kerak.",
    reflection: "Papkalar URL qismlarini ketma-ket beradi. O‘z sahifasi kerak bo‘lgan manzilda page bo‘lsin.",
  },
  "next-003": {
    goal: "Bir necha sahifaga umumiy layout va children joyini berish.",
    plain: "Kutubxonaning menyusi turli ichki sahifalarda bir xil. Faqat menyu yonidagi asosiy qism almashadi.",
    reflection: "Takrorlanadigan chegara UI’sini layoutda saqlang. Joriy sahifa children joyida ochiladi.",
  },
  "next-004": {
    goal: "Interaktivlik va server resurslariga qarab komponent chegarasini belgilash.",
    plain: "Sahifa ma’lumotni serverdan oladi. Tugmani bosgandagi holat esa foydalanuvchining brauzerida yangilanadi.",
    reflection: "State yoki browser API kerak bo‘lgan bo‘lakni Client Component qiling. Server sirlarini server qatlamida ushlang.",
  },
  "next-005": {
    goal: "Ichki sahifalar orasida Link bilan o‘tish.",
    plain: "Post sarlavhasini bosganda shu sayt ichidagi post manziliga o‘tasiz. Manzilni href belgilaydi.",
    reflection: "Ichki navigatsiya uchun Link ishlating. Href kerakli route bilan mosligini tekshiring.",
  },
  "next-006": {
    goal: "URL’dagi dinamik qismdan resursni tanlash va topilmaganini boshqarish.",
    plain: "Bir xil sahifa qolipi /blog/first va /blog/second uchun ishlaydi. Faqat postni tanlaydigan slug o‘zgaradi.",
    reflection: "Dinamik parametrni ma’lumot qidirish kaliti sifatida ishlating. Noma’lum slug uchun 404 ko‘rsating.",
  },
  "next-007": {
    goal: "Sekin yuklanish va bajarilishdagi xato uchun alohida UI berish.",
    plain: "Hali davom etayotgan ish uchun kutish ko‘rinadi. Ish xato bilan tugasa, qayta urinish imkoniyati kerak.",
    reflection: "Loading va error chegaralarini tegishli segmentga qo‘ying. Ikkalasini alohida sinab ko‘ring.",
  },
  "next-008": {
    goal: "Serverda ma’lumot olib, status va cache siyosatini boshqarish.",
    plain: "Server postlarni olib kelgach, foydalanuvchi tayyor natijani ko‘radi. Xizmat kaliti brauzerga yuborilmaydi.",
    reflection: "HTTP javobi va body turini tekshiring. Cache muddati ma’lumotning yangilik talabiga mos bo‘lsin.",
  },
  "next-009": {
    goal: "Route handler orqali HTTP metodiga mos javob yozish.",
    plain: "Bir endpoint ro‘yxatni GET bilan beradi, POST bilan yangi yozuv qabul qiladi.",
    reflection: "Metodga mos handler export qiling. Noto‘g‘ri input va muvaffaqiyat uchun alohida status qaytaring.",
  },
  "next-010": {
    goal: "FormData’ni Server Action orqali tekshirib, ruxsat bilan o‘zgartirish kiritish.",
    plain: "Tugma bosilganda forma serverga boradi. Server kelgan qiymatni va foydalanuvchi huquqini qayta tekshiradi.",
    reflection: "Server Action ichida input va ruxsatni tekshiring. Saqlangach, kerakli sahifa yangilanishini ta’minlang.",
  },
  "next-011": {
    goal: "Sahifaga mazmuniga mos title va description berish.",
    plain: "Qidiruv natijasida odam post matnidan oldin uning sarlavhasi va tavsifini ko‘rishi mumkin.",
    reflection: "Home va detail sahifalarga alohida metadata yozing. Dinamik tavsif haqiqiy kontentga mos bo‘lsin.",
  },
  "next-012": {
    goal: "Rasm o‘lchami, alt matni va yuklanishiga mos konfiguratsiya tanlash.",
    plain: "Rasm hali kelmagan bo‘lsa ham uning joyi ajratilsa, matn pastga sakramaydi.",
    reflection: "Rasm nisbatini oldindan belgilang. Mazmunli rasmga vazifasini tushuntiradigan alt bering.",
  },
  "next-013": {
    goal: "Server konfiguratsiyasi bilan browserga uzatiladigan qiymatni ajratish.",
    plain: "Ommaviy API manzilini brauzer bilishi mumkin, xizmatga kirish kaliti serverdagina kerak.",
    reflection: "Public qiymat bundleda mavjud bo‘lishini hisobga oling. Maxfiy qiymatlarni server muhitida saqlang.",
  },
  "next-014": {
    goal: "Cache tanlash va mutation’dan keyin eskirgan nusxani yangilash.",
    plain: "Yangiliklar ro‘yxati vaqtincha tayyor nusxadan chiqishi mumkin. Yangi post e’lon qilinsa, shu nusxa yangilanishi kerak.",
    reflection: "Yangilik talabi va foydalanuvchi doirasini belgilang. O‘zgarishdan keyin tegishli cache’ni qayta tekshiring.",
  },
  "next-015": {
    goal: "Production builddan keyin asosiy URL va xato yo‘llarini tekshirish.",
    plain: "Mahalliy dev rejimida ochilgan sahifa reliz konfiguratsiyasida boshqacha ishlashi mumkin.",
    reflection: "Build va ishga tushirishni alohida tekshiring. Home, detail va 404 uchun qisqa smoke test bajaring.",
  },
  "next-016": {
    goal: "Post ro‘yxati va slug bilan detail sahifani bitta mini-loyihaga ulash.",
    plain: "Gazetada sarlavhalar ro‘yxati bor, tanlaganingizda bitta maqola ochiladi. Noto‘g‘ri manzilga alohida javob beriladi.",
    reflection: "Bir xil post modelidan list va detailda foydalaning. Link, metadata va noma’lum slugni sinang.",
  },
  "backend-001": {
    goal: "Node.js runtime imkoniyatlarini brauzerdagi JavaScript bilan solishtirish.",
    plain: "Server kerakli faylni diskdan o‘qishi yoki tarmoqda so‘rov kutishi mumkin.",
    reflection: "Node’ning fayl va tarmoq API’laridan foydalaning. Kutish operatsiyalari uchun asinxron yo‘l tanlang.",
  },
  "backend-002": {
    goal: "package.json va lockfile vazifalarini ajratib, npm script yozish.",
    plain: "Bitta faylda nima kerakligi, ikkinchisida aynan qaysi versiyalar o‘rnatilgani yoziladi.",
    reflection: "Skript va kerakli dependency’ni package.json’da belgilang. Takrorlanuvchi o‘rnatishda lockfile’dan foydalaning.",
  },
  "backend-003": {
    goal: "CommonJS va ES module import/eksportini to‘g‘ri tanlash.",
    plain: "Bir modul require bilan, boshqasi import bilan ishlaydi. Fayl va loyiha sozlamasi qaysi yozuv kerakligini belgilaydi.",
    reflection: "Har modulni tanlangan loader formatiga mos yozing. Eksport shakli uni chaqiradigan kod bilan mos bo‘lsin.",
  },
  "backend-004": {
    goal: "Resource amali uchun HTTP metod va natijaga mos status tanlash.",
    plain: "Buyurtmani ko‘rish va yangisini yaratish har xil amal. Javob kodi esa har birining yakunini bildiradi.",
    reflection: "Metod so‘rov niyatini ifodalaydi. Statusni muvaffaqiyat, noto‘g‘ri kiritma yoki topilmagan resursga mos tanlang.",
  },
  "backend-005": {
    goal: "Express serverga birinchi route va JSON javob qo‘shish.",
    plain: "So‘rovning metodi va manzili mos kelganda, Express unga biriktirilgan ishni chaqiradi.",
    reflection: "Bitta endpoint bilan request va response yo‘lini tekshiring. Portni konfiguratsiyadan oling.",
  },
  "backend-006": {
    goal: "Path parameter’dan ID olish, validatsiya qilish va resurs qidirish.",
    plain: "/tasks/7 manzilida 7 alohida fayl emas, kerakli vazifaning kaliti.",
    reflection: "Parametr string bo‘lib keladi. Noto‘g‘ri formatni mavjud bo‘lmagan resursdan alohida boshqaring.",
  },
  "backend-007": {
    goal: "JSON body’ni parse qilish va kirish chegaralarini tekshirish.",
    plain: "Forma mazmuni serverga matn sifatida keladi. Uni avval o‘qiladigan obyektga aylantirish kerak.",
    reflection: "JSON parser’ni handlerdan oldin ulang. Body hajmi va maydon shaklini tekshiring.",
  },
  "backend-008": {
    goal: "Middleware ketma-ketligini tuzish va next qachon kerakligini aniqlash.",
    plain: "So‘rov avval raqamlanadi, keyin ruxsati tekshiriladi, so‘ng asosiy ishga yetadi.",
    reflection: "Middleware javobni yakunlasa zanjir tugaydi. Boshqa holatda next bilan keyingi bosqichga o‘ting.",
  },
  "backend-009": {
    goal: "Collection va detail resurslari uchun izchil REST contract tuzish.",
    plain: "Bitta URL butun vazifalar ro‘yxatini, ID qo‘shilgan URL esa bitta vazifani bildiradi.",
    reflection: "URL’larni resurslar uchun ishlating. Amalni metod va javob natijasini status orqali ifodalang.",
  },
  "backend-010": {
    goal: "Kirish ma’lumotini runtime’da tekshirib, tushunarli xato qaytarish.",
    plain: "Ilova “tayyor” yoki “yangi” holatini kutsa, uchinchi matnni kiritgan odamga aniq javob berishi kerak.",
    reflection: "Majburiy maydon, tur va qiymat chegaralarini yozing. Yaroqsiz so‘rov omborga yetib bormasin.",
  },
  "backend-011": {
    goal: "Express xatolarini yagona middleware orqali xavfsiz javobga aylantirish.",
    plain: "Foydalanuvchi uchun sabab tushunarli bo‘lsin, jamoa ichkaridagi hodisani request ID orqali topa olsin.",
    reflection: "Kutilgan va kutilmagan xatolarni ajrating. Ichki stack trace’ni server jurnalida saqlang.",
  },
  "backend-012": {
    goal: "Kimlikni tasdiqlash va resurs amaliga ruxsatni tekshirishni ajratish.",
    plain: "Bino kartasi kimligingizni bildiradi. Har bir xonaga kirish uchun alohida ruxsat kerak bo‘lishi mumkin.",
    reflection: "Avval kimlikni, keyin aynan shu amal va resursga ruxsatni tekshiring.",
  },
  "backend-013": {
    goal: "Parol saqlash va tekshirishda password hashing tamoyilini tushuntirish.",
    plain: "Kirishda server terilgan parolni saqlangan tekshiruv qiymati bilan solishtiradi. Xom parol bazada kerak bo‘lmaydi.",
    reflection: "Maxsus password hashing kutubxonasi bilan hash va verify ishlating. Parol qiymatlarini logga yozmang.",
  },
  "backend-014": {
    goal: "JWT claimlari mazmuni va tekshiruv chegaralarini farqlash.",
    plain: "Imzolangan kartada kimga va qachongacha berilgani yozilishi mumkin. Kartani oluvchi shu ma’lumot va imzoni tekshiradi.",
    reflection: "Imzo bilan birga issuer, audience va amal muddatini tekshiring. Payloadga maxfiy ma’lumot qo‘ymang.",
  },
  "backend-015": {
    goal: "Runtime konfiguratsiyasi va secret’larni source koddan tashqarida boshqarish.",
    plain: "Test bazasi bilan ishlab chiqarish bazasi manzili har xil, ammo dasturning kodi bir xil qoladi.",
    reflection: "Kerakli sozlamalarni ishga tushishda tekshiring. Misol fayliga faqat nomlar va ko‘rgazmali qiymatlarni kirit­ing.",
  },
  "backend-016": {
    goal: "Brauzer origin siyosati va so‘rov tezligi limitining vazifalarini tushuntirish.",
    plain: "Brauzer javobni qaysi saytdan o‘qish mumkinligini so‘raydi. Server esa bir mijoz qancha tezlikda so‘ray olishini cheklaydi.",
    reflection: "CORS’ni brauzer o‘qish qoidasi, rate limit’ni yuk nazorati sifatida sozlang. Resurs ruxsatini server alohida tekshiradi.",
  },
  "backend-017": {
    goal: "API handler bilan database ulanishi orasida repository chegarasini belgilash.",
    plain: "Handler vazifani olishni so‘raydi. Ulanuvchi qatlam uni qaysi bazadan topishni boshqaradi.",
    reflection: "Ulanish va timeout’ni bir joyda boshqaring. Repository tashqi chaqiruvchiga barqaror natija qaytarsin.",
  },
  "backend-018": {
    goal: "Async handler xatosini error middleware’ga uzatish va bitta javob bilan yakunlash.",
    plain: "Saqlash tugamaguncha natijani bilmaysiz. Saqlash rad etilsa, muvaffaqiyat javobi yuborilmasligi kerak.",
    reflection: "Async ishni kuting. Xato boshqaruv yo‘liga o‘tsin va bitta request faqat bitta javob olsin.",
  },
  "backend-019": {
    goal: "API testida status, body va saqlangan holatni birga tekshirish.",
    plain: "201 ko‘rish yaxshi, ammo yozuv ro‘yxatda haqiqatdan borligini ham tekshirish kerak.",
    reflection: "Oldindan ma’lum test ma’lumotidan boshlang. Yaroqli va yaroqsiz so‘rovda javob hamda database holatini tekshiring.",
  },
  "backend-020": {
    goal: "Task REST API’da validatsiya, ombor va xato boshqaruvini birlashtirish.",
    plain: "Vazifa yaratilib, keyin o‘qiladi va holati almashtiriladi. Har qadam mos endpointdan o‘tadi.",
    reflection: "Yaratish va yangilash contractlarini ajrating. Noma’lum ID, bo‘sh nom va noto‘g‘ri holatni sinang.",
  },
  "db-001": {
    goal: "Aloqador jadvallar va hujjat modelini so‘rov ehtiyojiga qarab tanlash.",
    plain: "Izohlar alohida jadvalga yozilishi yoki vazifaning ichida kelishi mumkin. Qaysi shakl qulayligini o‘qish va yozish tartibi belgilaydi.",
    reflection: "Avval ma’lumot qanday so‘ralishini va yaxlitlik talabi borligini aniqlang, keyin model tanlang.",
  },
  "db-002": {
    goal: "MongoDB collection, BSON document va _id rollarini tushuntirish.",
    plain: "Bitta javonda turli vazifa yozuvlari turadi. Har yozuvning o‘z belgilovchisi bor.",
    reflection: "Collection hujjatlar to‘plami. _id orqali shu to‘plamdagi hujjatni noyob ajrating.",
  },
  "db-003": {
    goal: "MongoDB driver ulanishini boshqarish va tarmoq xatosini ajratish.",
    plain: "Har so‘rov uchun yangi telefon liniyasi ochishga hojat yo‘q. Ishlab turgan ulanishlardan foydalanish mumkin.",
    reflection: "Ulanish qiymatlarini muhitdan oling. Client’ni qayta ishlating va noaniq ulanish xatolariga vaqt chegarasi qo‘ying.",
  },
  "db-004": {
    goal: "Bitta yoki ko‘p hujjat kiritib, hosil bo‘lgan ID’larni tekshirish.",
    plain: "Bitta vazifa qo‘shganda bitta ID, uchta vazifa jo‘natganda esa ular uchun alohida ID’lar kerak.",
    reflection: "Yozuvlar soniga mos insert metodini tanlang. Natijadagi ID va duplicate xatosiga tayyor bo‘ling.",
  },
  "db-005": {
    goal: "find va findOne orqali kerakli miqdordagi hujjatni olish.",
    plain: "Bitta ID bo‘yicha qidirish bilan guruhdagi hamma tugallangan ishlarni qidirish farq qiladi.",
    reflection: "findOne bitta hujjat yoki null beradi. find natijalarini cursor orqali o‘qing va kerakli hajm bilan cheklang.",
  },
  "db-006": {
    goal: "MongoDB fieldini almashtirish va qiymatini oshirishni mos operator bilan bajarish.",
    plain: "Sarlavha yangi matn oladi, hisoblagich esa hozirgi qiymatiga qo‘shiladi.",
    reflection: "Maydonni almashtirish uchun $set, sonni o‘zgartirish uchun $inc ishlating. Mos yozuv sonini tekshiring.",
  },
  "db-007": {
    goal: "O‘chirish doirasini filtr bilan aniq chegaralash.",
    plain: "Bitta vazifani tozalash bilan barcha tugallangan vazifalarni tozalash turli ko‘lamdagi amal.",
    reflection: "O‘chirishdan oldin filtrga tushadigan yozuvlarni biling. Ish ehtiyojiga mos deleteOne yoki deleteMany tanlang.",
  },
  "db-008": {
    goal: "Taqqoslash va variantlar ro‘yxatini query operatorlari bilan ifodalash.",
    plain: "Vazifa sanasi chegaradan keyin bo‘lishi hamda ikki holatdan biriga tegishli bo‘lishi mumkin.",
    reflection: "Chegara ichiga kirishini $gte kabi operator bilan aniq ifodalang. Ruxsatli qiymatlar uchun $in qo‘llang.",
  },
  "db-009": {
    goal: "Qaytadigan maydonlarni va saralashdagi tenglik qoidasini belgilash.",
    plain: "Kalendar ro‘yxati faqat nom va sanani ko‘rsatadi. Sana teng bo‘lsa, ID tartibni aniqlaydi.",
    reflection: "Projection bilan zarur maydonlarni oling. Barqaror tartib uchun noyob tie-breaker qo‘shing.",
  },
  "db-010": {
    goal: "Indeksni amaldagi filter va sort asosida baholash.",
    plain: "Kitoblar mundarijasi tegishli betni tez topishga yordam beradi. Yangi sahifalar qo‘shilganda mundarija ham yangilanadi.",
    reflection: "Indeksni taxmin bilan emas, query va explain natijasi bilan tanlang. Yozish xarajatini hisobga oling.",
  },
  "db-011": {
    goal: "Birga o‘qiladigan kichik ma’lumotni hujjatga joylash mezonini tanlash.",
    plain: "Kontakt sozlamalarini kontakt bilan olish qulay. Yillab to‘planadigan barcha tarix shu yozuvni haddan tashqari kattalashtiradi.",
    reflection: "Bog‘liq ma’lumot cheklangan va birga o‘qilsa embed qilish mantiqli. Cheksiz o‘sadigan tarixga alohida joy tanlang.",
  },
  "db-012": {
    goal: "Boshqa hujjatga havola berish va yo‘q target holatini boshqarish.",
    plain: "Vazifada foydalanuvchining butun profili o‘rniga uning ID’si turadi. Profil arxivlansa, vazifani ko‘rsatish qoidasi kerak.",
    reflection: "Reference ID orqali bog‘laydi. O‘chirilgan yoki topilmagan bog‘langan yozuv uchun natijani oldindan belgilang.",
  },
  "db-013": {
    goal: "Mongoose Schema va Model chegaralarini ajratish.",
    plain: "Schema vazifaning shaklini belgilaydi. Model esa shu shakldagi hujjatlarni bazada yaratish va topish imkonini beradi.",
    reflection: "Schema’da defaults va validatsiya yozing, CRUD uchun Model ishlating. API inputini alohida tekshiring.",
  },
  "db-014": {
    goal: "Mongoose CRUD’da update natijasi va validatsiyasini nazorat qilish.",
    plain: "Holatni o‘zgartirganda eski yoki yangi hujjat kerakligi chaqiruvchi vazifasiga bog‘liq.",
    reflection: "Update variantlarini aniq tanlang. Yaroqsiz qiymat va topilmagan yozuvni alohida sinab ko‘ring.",
  },
  "db-015": {
    goal: "Bir necha aggregation bosqichidan hisobot tuzish.",
    plain: "Avval kerakli ishlar tanlanadi, keyin ular holat bo‘yicha savatlarga ajratilib sanaladi.",
    reflection: "$match bilan to‘plamni chegaralang, $group bilan o‘lchang. Bosqich tartibini natijaga qarab tekshiring.",
  },
  "db-016": {
    goal: "Offset va cursor pagination orasida ma’lumot hajmiga mos tanlov qilish.",
    plain: "Keyingi sahifaga o‘tishda “nechta o‘tkazish” yoki “qaysi yozuvdan keyin boshlash” degan ikki yo‘l bor.",
    reflection: "Cursor uchun barqaror tartib va oxirgi yozuvning sort qiymatlarini saqlang. Teng sana bo‘lsa ID’dan foydalaning.",
  },
  "db-017": {
    goal: "Bog‘liq yozuvlarni tranzaksiyada birga tasdiqlash yoki bekor qilish.",
    plain: "Pul bir hisobdan ketib, ikkinchisiga bormasa natija buziladi. Ikkala amal birga bajarilishi kerak.",
    reflection: "Amallarni bitta session bilan bajaring. Ikkinchi yozuvda xato chiqqanda birinchisi ham bekor bo‘lishini sinang.",
  },
  "db-018": {
    goal: "Managed MongoDB’da ulanish va huquq chegaralarini sozlash.",
    plain: "Ilova foydalanuvchisi vazifalarni o‘qishi kerak, butun bazani boshqarish vakolati unga kerak emas.",
    reflection: "Test va production uchun alohida hisob ishlating. Kerakli tarmoq manzillarini va minimal huquqni belgilang.",
  },
  "db-019": {
    goal: "Backup nusxasini izolyatsiyalangan muhitda qayta tiklab tekshirish.",
    plain: "Arxiv faylining borligi yetarli dalil bo‘lmaydi. Qayta tiklangan yozuvlar haqiqatan o‘qilishi kerak.",
    reflection: "Zaxira nusxani xavfsiz saqlang. Restore sinovida yozuv soni va namunaviy so‘rov natijasini solishtiring.",
  },
  "db-020": {
    goal: "MongoDB task repository’da yozish va o‘qish contractlarini sinash.",
    plain: "Ekran faqat vazifa yaratish yoki topishni so‘raydi. MongoDB tafsilotlari repository ichida qoladi.",
    reflection: "CRUD amallarini saqlash qatlamiga joylang. Izolyatsiyalangan bazada valid, invalid va not-found holatlarini tekshiring.",
  },
} satisfies Record<string, LessonGuide>;

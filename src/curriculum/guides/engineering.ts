import type { LessonGuide } from '../model';

export const engineeringGuides = {
  "pea-10-01": {
    goal: "Funksiya va qiymatlarni vazifasi hamda birligi bilinadigan nom bilan atash.",
    plain: "Vaqt degan ustunda sekundmi yoki daqiqa yozilganini taxmin qilish qiyin. elapsedSeconds nomi buni darrov bildiradi.",
    reflection: "Nom mohiyatini va kerak bo‘lsa o‘lchov birligini ko‘rsatsin. Boolean nomini savol kabi o‘qing.",
  },
  "pea-10-02": {
    goal: "Modulning bir-biridan mustaqil o‘zgaradigan mas’uliyatlarini ajratish.",
    plain: "Chegirma qoidasi yangilanganda xat yuborish xizmatiga tegmaslik qulay. Hisoblash va yuborish turli sabab bilan o‘zgaradi.",
    reflection: "Hisob, saqlash va bildirishni ularning o‘zgarish sababiga qarab ajrating. Pure hisobni alohida sinang.",
  },
  "pea-10-03": {
    goal: "Yangi variantni Strategy orqali qo‘shish va umumiy chaqiruvni saqlash.",
    plain: "Yetkazish usuli turlicha, buyurtmaning hisoblash oqimi esa bir xil. Narx qoidasi alohida tanlanadi.",
    reflection: "Barqaror interface ustida har variantni alohida yozing. Yangi strategiyani avvalgi chaqiruvchilarga ta’sirini tekshiring.",
  },
  "pea-10-04": {
    goal: "Almashinadigan implementatsiyalar uchun kuzatiladigan contractni tekshirish.",
    plain: "Test ombori topilmagan yozuvga null qaytarsa, haqiqiy ombor ham chaqiruvchini shu natijaga tayyor qoldirishi kerak.",
    reflection: "Bir xil inputga bir xil contractni tekshiruvchi testdan o‘tkazing. Xato va bo‘sh natija siyosatiga ham qarang.",
  },
  "pea-10-05": {
    goal: "Consumer uchun zarur bo‘lgan kichik interface tanlash.",
    plain: "Hisobotchi ro‘yxatni o‘qiydi. Unga yozuv yaratish yoki o‘chirish uchun buyruqlar berish shart emas.",
    reflection: "O‘qiydigan va tahrirlaydigan consumer talablarini belgilang. Har biriga ishlatadigan contractni bering.",
  },
  "pea-10-06": {
    goal: "Use case’ga clock yoki repository’ni tashqaridan uzatish.",
    plain: "O‘qish rejasini testda “bugun qaysi kun” degan javobni belgilab sinash mumkin. Dastur shu javobni clock’dan oladi.",
    reflection: "Dependency’ni chaqiruvchidan qabul qiling. Test fixed clock, haqiqiy ilova system clock ishlatsin.",
  },
  "pea-10-07": {
    goal: "Takrorlanayotgan biznes qoidasi bilan tasodifan o‘xshash kodni farqlash.",
    plain: "Ikki joyda 70 yozilgani ularni bitta qoida qilmaydi. Biri imtihon, boshqasi saqlash limiti bo‘lishi mumkin.",
    reflection: "Bitta ma’nodagi qoida bitta manbadan olinsin. Boshqa sabab bilan o‘zgaradigan kodlarni mustaqil tuting.",
  },
  "pea-10-08": {
    goal: "Joriy talabga yetarli yechim tanlab, foydasi hali noma’lum kengaytmani kechiktirish.",
    plain: "Bitta offline profilga dastlab foydalanuvchi serveri shart bo‘lmasligi mumkin. Mahalliy baza hozirgi ishni bajaradi.",
    reflection: "Murakkablikni real talabga bog‘lang. Qo‘shiladigan qism uchun tekshiriladigan foyda bo‘lsin.",
  },
  "pea-10-09": {
    goal: "Tashqi shaklni ichki contractga aylantiradigan adapter yozish.",
    plain: "Saqlash katagidagi completed_at nomi UI modelida completedAt bo‘lishi mumkin. Moslashuv bitta chegarada bajariladi.",
    reflection: "Konversiyani alohida joyda saqlang. Yo‘q yoki yaroqsiz maydon qoidalarini ham tekshiring.",
  },
  "pea-10-10": {
    goal: "Obyektga kerakli qiymatlarni Factory orqali izchil berish.",
    plain: "Imtihon yozuvi yaratilganda ID, vaqt va o‘tish bali birgalikda kerak. Har ekran buni o‘zicha yig‘masligi qulay.",
    reflection: "Yaratish qoidasi takrorlansa Factory’ga joylang. Majburiy qiymatlar va default’larni aniq belgilang.",
  },
  "pea-10-11": {
    goal: "UI, use case va repository’ning javobgarligini ajratish.",
    plain: "Tugma “yakunla” deb so‘raydi, biznes qoidasi mumkinligini tekshiradi, ombor esa yozuvni saqlaydi.",
    reflection: "Har qatlam o‘z vazifasini bajarsin. SQL tafsilotini foydalanuvchi ekranidan tashqarida ushlang.",
  },
  "pea-10-12": {
    goal: "Domain’ni tashqi framework’lardan mustaqil saqlaydigan dependency yo‘nalishini belgilash.",
    plain: "Imtihon bahosini hisoblash ekranning qanday chizilishini bilmasdan ham ishlashi mumkin.",
    reflection: "Biznes qoidalarini ichki qatlamda yozing. Tashqi adapter ichki contractni bajaradi.",
  },
  "pea-10-13": {
    goal: "Unit test uchun kiritma, kutilgan qiymat va chegara holatini tanlash.",
    plain: "Kasrning foizini tekshirganda javobni avval qo‘lda hisoblaysiz. Sinov aynan shu qiymatni kutadi.",
    reflection: "Kutilgan natijani sinovdagi funksiyadan olmay, contract asosida belgilang. Oddiy va chegara holatini sinang.",
  },
  "pea-10-14": {
    goal: "Ikki haqiqiy qism orasidagi integratsiyani eski ma’lumot bilan tekshirish.",
    plain: "Bazaga eski formatda yozuv solib, migrationdan keyin ham o‘qilishini ko‘rasiz.",
    reflection: "Sinov fixture’si oldingi yozuvni aks ettirsin. Migratsiyadan keyin saqlangan qiymat va sxemani tekshiring.",
  },
  "pea-10-15": {
    goal: "E2E testida haqiqiy foydalanuvchi yo‘lini takrorlash.",
    plain: "Odam ilovani ochadi, darsni tugatadi va qayta ochganda natijasini ko‘radi. Test ham shu yo‘ldan boradi.",
    reflection: "Kritik oqim uchun ko‘rinadigan natijalarni tekshiring. Vaqt taxmini o‘rniga kerakli elementni kuting.",
  },
  "pea-10-16": {
    goal: "O‘zgarishlarni aniq Git commitlariga ajratish va tekshirish.",
    plain: "Bitta tuzatish bilan yuzta yangi dars alohida tarixda bo‘lsa, har biri mustaqil ko‘rib chiqiladi.",
    reflection: "Stage’da aynan kerakli diff turganini tekshiring. Har commit bitta mantiqiy maqsadni yopsin.",
  },
  "pea-10-17": {
    goal: "Review fikrini tekshirib bo‘ladigan misol va oqibat bilan yozish.",
    plain: "“Bu yoqmadi” degan fikrni tekshirish qiyin. Bir ID ikki marta yoziladigan holatni ko‘rsatish aniqroq.",
    reflection: "Avval contract, edge case va sinovlarni ko‘ring. Muammoni qayta ko‘rish uchun aniq shart yozing.",
  },
  "pea-10-18": {
    goal: "Bitta deployable ichida mustaqil modul contractlarini tuzish.",
    plain: "Bitta bino ichida bir necha bo‘lim ishlaydi. Har bo‘lim boshqasiga ma’lum xizmat yo‘li orqali murojaat qiladi.",
    reflection: "Bitta reliz ichida ham ownership va API chegarasi bo‘lsin. Modul ichki tafsilotini tashqariga chiqarmang.",
  },
  "pea-10-19": {
    goal: "Mustaqil service ajratishning foyda va operatsion xarajatlarini baholash.",
    plain: "Xat yuborish hajmi asosiy ilovadan boshqacha o‘ssa, unga alohida resurs kerak bo‘lishi mumkin.",
    reflection: "Ajratish uchun ownership va scaling dalilini toping. Tarmoq xatolari hamda ma’lumot mosligini hisoblang.",
  },
  "pea-10-20": {
    goal: "Health check bilan trafikni sog‘lom instance’lar orasida taqsimlash.",
    plain: "Bitta kassaning eshigi yopilsa, navbat qolgan ochiq kassalarga yo‘naltiriladi.",
    reflection: "Balancing faqat tayyor instance’larni tanlasin. Session boshqa instance’da ham ishlashi uchun manbasini rejalang.",
  },
  "pea-10-21": {
    goal: "Cache kaliti, yangilik muddati va invalidation hodisasini belgilash.",
    plain: "Tayyor katalog nusxasini tez ko‘rish mumkin. Katalog yangilansa, eski nusxadan vaqtida voz kechish kerak.",
    reflection: "Kalitga natijani o‘zgartiradigan parametrlarni kiriting. TTL va yozuvdan keyingi invalidationni aniq yozing.",
  },
  "pea-10-22": {
    goal: "Qayta yetkazilishi mumkin bo‘lgan job uchun idempotent consumer tuzish.",
    plain: "Ish bitib natija yozilgan paytda tasdiq yo‘qolishi mumkin. Navbat ayni ishni yana yuboradi.",
    reflection: "Job ID orqali takrorni taniting. Biznes natijasi va bajarilganlik belgisi izchil saqlansin.",
  },
  "pea-10-23": {
    goal: "Retry uchun barqaror idempotency key va boshqa payload siyosatini tanlash.",
    plain: "Yuborish tugmasi qayta bosilganda oldingi urinishni tanish uchun bir xil belgi kerak.",
    reflection: "Retry’da bir kalitni saqlang. Bir kalit bilan o‘zgacha payload kelganda aniq xato qoidasini belgilang.",
  },
  "pea-10-24": {
    goal: "Traffic, service time va resurs limitidan taxminiy capacity hisoblash.",
    plain: "Kuniga ming odam kelishi bir paytda nechta xizmat bandligini aytmaydi. Qisqa tig‘iz davrni alohida baholash kerak.",
    reflection: "O‘rtacha va peak yukni yozing. So‘ng bottleneck’ni CPU, baza yoki tarmoq kesimida o‘lchang.",
  },
  "pea-10-25": {
    goal: "Stale qiymatga chidamlilik bo‘yicha consistency talabini tanlash.",
    plain: "Tarixiy ko‘rilish soni bir necha soniya kechiksa ham bo‘ladi. Oxirgi joyni ikki kishi band qilishi esa muammo.",
    reflection: "Har amal uchun eskirgan natijaning oqibatini yozing. Kuchliroq consistency’ni biznesga zarur joyda tanlang.",
  },
  "pea-10-26": {
    goal: "Log, metric va trace yordamida foydalanuvchi ta’sirini kuzatish.",
    plain: "Grafik muammo borligini ko‘rsatadi, log tafsilot beradi, trace so‘rov qaysi xizmatdan o‘tganini ko‘rsatadi.",
    reflection: "SLI va uning maqsadini yozing. Alert chegarasini foydalanuvchiga seziladigan muammoga bog‘lang.",
  },
  "pea-10-27": {
    goal: "Study analytics uchun event yozish, hisoblash va read oqimini loyihalash.",
    plain: "O‘qish tugagach vaqt yoziladi. Haftalik ekran shu yozuvlardan yig‘indi chiqaradi.",
    reflection: "Talabdan boshlang, keyin event identifikatori va vaqt zonasini belgilang. Qayta yozuv duplicate bermasin.",
  },
  "pea-11-01": {
    goal: "Linux’dagi joriy, relative va absolute yo‘llarni ishonchli aniqlash.",
    plain: "Bir xil faylga joylashgan yeringizdan qisqa yo‘l yoki root’dan to‘liq yo‘l bilan borish mumkin.",
    reflection: "Relative yo‘l uchun pwd’ni bilib oling. Xizmat boshqa working directory’da ishlashi mumkin.",
  },
  "pea-11-02": {
    goal: "Shell argumentlarini quote bilan saqlash va commandlarni pipe orqali bog‘lash.",
    plain: "Bo‘shliqli fayl nomi bitta yuk. Quote bo‘lmasa shell uni ikki alohida argumentga ajratishi mumkin.",
    reflection: "Bo‘shliq va maxsus belgili qiymatlarni quote qiling. Pipe orqali bir buyruq chiqishini keyingisiga uzating.",
  },
  "pea-11-03": {
    goal: "Fayl ruxsati va xizmat foydalanuvchisini minimal huquqqa mos tanlash.",
    plain: "Zaxira nusxani faqat egasi ochishi kerak bo‘lsa, qolganlarga o‘qish huquqi berilmaydi.",
    reflection: "Owner, group va others uchun alohida ruxsatni belgilang. Xizmatga ishlashi uchun zarur darajani bering.",
  },
  "pea-11-04": {
    goal: "SIGTERM bilan yangi ishlarni to‘xtatib, faol amallarni yakunlash.",
    plain: "Do‘kon yopilganda yangi mijoz olinmaydi. Ichkaridagilar ishini tugatishi uchun biroz vaqt beriladi.",
    reflection: "Shutdown’da yangi requestni qabul qilmang. Faol ishni yakunlash uchun chegaralangan vaqt ajrating.",
  },
  "pea-11-05": {
    goal: "Working tree, staging va commit holatini git diff bilan tekshirish.",
    plain: "Ish daftaridagi barcha tahrirlar navbatdagi tarix yozuviga kirmaydi. Stage aynan nimalar kirishini belgilaydi.",
    reflection: "git diff va git diff --cached natijalarini alohida ko‘ring. Commit oldidan stage’ni qayta tekshiring.",
  },
  "pea-11-06": {
    goal: "Review uchun sabab, o‘zgarish va haqiqiy tekshiruvlarni tushuntiradigan PR yozish.",
    plain: "Reviewer o‘zgarish nimadan boshlanganini va qanday sinalganini bir joyda ko‘rishi kerak.",
    reflection: "PR’da vazifa sababini, diff doirasini va bajarilgan test natijasini yozing. Loglardan maxfiy qiymatlarni olib tashlang.",
  },
  "pea-11-07": {
    goal: "Docker image, container va persistent volume rolini ajratish.",
    plain: "Image ishga tushirish qolipi. Container shu qolipdan yurayotgan ish, muhim ma’lumot esa alohida volume’da qolishi mumkin.",
    reflection: "Qayta ishga tushadigan artefakt va doimiy ma’lumotni alohida rejalang. Volume’ni qayta ochib sinang.",
  },
  "pea-11-08": {
    goal: "Dockerfile qatlamlarini lockfile asosidagi build cache’ga mos tartiblash.",
    plain: "Kod tez o‘zgaradi, dependency ro‘yxati har safar o‘zgarmaydi. Ularni alohida qatlamga qo‘ysangiz, oldingi ish qayta ishlatiladi.",
    reflection: "Avval manifest va lockfile, keyin source nusxalansin. Build contextdan keraksiz fayllarni chiqaring.",
  },
  "pea-11-09": {
    goal: "Build vositalari va faqat ishlashga kerakli artefaktlarni ikki stage’da ajratish.",
    plain: "Oshxonada tayyorlash asboblari ko‘p, tayyor taomga esa tovog‘i yetadi. Runtime bosqichi faqat zarur fayllarni oladi.",
    reflection: "Builder’da kompilyatsiya qiling. Runtime’da artefakt va haqiqatan kerakli dependency’larni qoldiring.",
  },
  "pea-11-10": {
    goal: "Compose servislarini ichki DNS va volume orqali bog‘lash.",
    plain: "Har container ichidagi localhost o‘sha containerga tegishli. Boshqa xizmatga uning Compose nomi orqali boriladi.",
    reflection: "Containerlar o‘rtasida service nomidan foydalaning. Tashqi portni faqat hostga kerak bo‘lgan joyda oching.",
  },
  "pea-11-11": {
    goal: "Tirik jarayon bilan trafik qabul qilishga tayyor xizmatni farqlash.",
    plain: "Kassa chirog‘i yoniq, lekin hisob tizimi hali ishga tushayotgan bo‘lishi mumkin.",
    reflection: "Readiness asosida trafik yuboring. Probe xarajati va startup kutishini oldindan belgilang.",
  },
  "pea-11-12": {
    goal: "CI’da toza install, kod tekshiruvi va test zanjirini tuzish.",
    plain: "Yangi kompyuterda kimningdir eski node_modules’i bo‘lmaydi. Pipeline loyihani lockfile yordamida boshidan tiklaydi.",
    reflection: "Node versiyasi va lockfile’ni belgilang. Har o‘zgarish uchun bir xil typecheck va testlarni ishlating.",
  },
  "pea-11-13": {
    goal: "GitHub Actions trigger, job, step hamda minimal permissions tuzilishini yozish.",
    plain: "PR ochilganda runner ish boshlaydi va belgilangan tekshiruvlar ketma-ket yuradi.",
    reflection: "Workflow’ni kerakli eventga ulang. Test jobiga faqat zarur huquqni bering.",
  },
  "pea-11-14": {
    goal: "Bir xil build artefaktini muhitlar orasida o‘tkazish va rollback mezonini tanlash.",
    plain: "Tasdiqlangan paketni stagingdan productionga ko‘chirasiz. Xato chiqsa, aniq avvalgi paketni qayta tanlaysiz.",
    reflection: "Digest yoki boshqa o‘zgarmas identifikatorni yozib boring. Sxema avvalgi build bilan ishlashini hisobga oling.",
  },
  "pea-11-15": {
    goal: "Environment variable qiymatlarini startup’da tekshirish va muhitlarni ajratish.",
    plain: "Dasturning ichki kodi bir xil qoladi. U qaysi port va bazadan foydalanishini muhit belgilaydi.",
    reflection: "Majburiy config yaroqsiz bo‘lsa, sababni aniq bildiring. Secret qiymatini xabar ichiga qo‘shmang.",
  },
  "pea-11-16": {
    goal: "Secret foydalanish doirasi va almashtirish tartibini rejalash.",
    plain: "Xizmat faqat o‘z ishiga kerakli kalitni oladi. Kalit yangilanganda eski qiymat vaqtida bekor qilinadi.",
    reflection: "Yangi qiymatni joylashtiring va tekshiring, keyin eskisini bekor qiling. Log va artefaktlarda secret qolmasin.",
  },
  "pea-11-17": {
    goal: "IaaS, PaaS va serverless’da operatsion javobgarlikni solishtirish.",
    plain: "Bitta variantda mashinani o‘zingiz boshqarasiz. Boshqasida platforma ayrim ishlarni siz uchun bajaradi.",
    reflection: "Provider nima bilan shug‘ullanishini va jamoada qaysi vazifalar qolishini aniq yozing.",
  },
  "pea-11-18": {
    goal: "Deploydan keyin foydalanuvchiga muhim route’larni smoke testda tekshirish.",
    plain: "Dastur ishga tushgan bo‘lsa ham katalog ochilishi shart. Buni turgan jarayon emas, olingan javob tasdiqlaydi.",
    reflection: "Kritik read uchun aniq status, timeout va xatoda javobni belgilang. Testni yangi deployga qarshi bajaring.",
  },
  "pea-11-19": {
    goal: "Reverse proxy orqali so‘rov yo‘lini kerakli upstreamga uzatish.",
    plain: "Kiruvchi bitta domen ichida static fayl va API so‘rovlari turli serverlarga ketishi mumkin.",
    reflection: "Path, timeout va forwarding qoidalarini yozing. Proxy header’iga faqat nazorat qilinadigan chegarada ishoning.",
  },
  "pea-11-20": {
    goal: "HTTPS sertifikatining domen, chain va amal muddatini tekshirish.",
    plain: "Domen nomi to‘g‘ri deb tasdiqlangan hujjatning muddati ham tugashi mumkin. Renewal holati oldindan kuzatiladi.",
    reflection: "Sertifikatni client ko‘radigan manzil orqali tekshiring. Expiry uchun vaqtida ogohlantirish o‘rnating.",
  },
  "pea-11-21": {
    goal: "Error rate va p95 orqali foydalanuvchi sezadigan muammoni aniqlash.",
    plain: "O‘rtacha tezlik yaxshi ko‘rinsa ham, so‘rovlarning bir qismi uzoq kutishi mumkin.",
    reflection: "Taqsimotni ko‘ring va alertni minimal traffic bilan birga belgilang. Bir martalik shovqinni davomli muammodan ajrating.",
  },
  "pea-11-22": {
    goal: "Qidiriladigan structured log va bir so‘rovni bog‘laydigan ID yaratish.",
    plain: "API va worker yozuvlarida bitta ID bo‘lsa, bitta foydalanuvchi amali bo‘ylab nima bo‘lganini ko‘rish mumkin.",
    reflection: "Log fieldlarini barqaror tuting. Request ID va status kerak bo‘ladi, parol va tokenlar chiqarilmaydi.",
  },
  "pea-11-23": {
    goal: "RPO va RTO’ga mos backup va restore mashqini rejalash.",
    plain: "Nusxa borligi yaxshi. U bilan qanday vaqt ichida qancha ma’lumotni tiklash mumkinligi sinov bilan bilinadi.",
    reflection: "Yo‘qotilishi mumkin bo‘lgan vaqt va tiklash maqsadini yozing. Izolyatsiyalangan muhitda restore’ni o‘lchang.",
  },
  "pea-11-24": {
    goal: "Production muammosini dalil, kuzatuv va bitta hypothesis bilan tekshirish.",
    plain: "503 qaytishi turli sabablarga bog‘liq bo‘lishi mumkin. Avval qachon va kimda boshlanganini aniqlaysiz.",
    reflection: "Ta’sir doirasini toping, keyin bitta farazni signal bilan tekshiring. Tiklangach foydalanuvchi oqimini qayta bajaring.",
  },
  "pea-11-25": {
    goal: "Real yukdagi peak sarfga tayangan holda resurs chegaralarini tanlash.",
    plain: "Tinch turgan ilova kam xotira ishlatadi. Katta import vaqtida sarf keskin oshishi mumkin.",
    reflection: "Idle va peak holatlarini alohida o‘lchang. Limitga kuzatilgan sarf va zarur zaxirani hisoblab qo‘ying.",
  },
  "pea-11-26": {
    goal: "Release runbook’da bajaruvchi, tekshiruv va to‘xtash qoidalarini yozish.",
    plain: "Navbatchi oldingi muallif bo‘lmasa ham, relizni qayerda tekshirish va qachon ortga qaytishni bilishi kerak.",
    reflection: "Preflight, deploy, verification va rollback bosqichlarini aniq yozing. Har qadam uchun dalil ajrating.",
  },
  "pea-11-27": {
    goal: "API’ni Compose orqali yig‘ish va tayyorlik hamda persistence’ni sinash.",
    plain: "Yangi clone’da API va baza boshlanadi. Qayta ishga tushganda oldingi yozuv saqlanganini tekshirasiz.",
    reflection: "Image build, ready endpoint va haqiqiy read’ni tekshiring. Volume’ni restartdan keyin ham sinang.",
  },
  "pea-12-01": {
    goal: "SaaS uchun aniq auditoriya, takroriy muammo va o‘lchovli natijani belgilash.",
    plain: "O‘quv markazidagi mentor hisobotni har hafta qo‘lda yig‘adi. Maqsad ana shu ishni qancha tezlatish mumkinligini tekshirish.",
    reflection: "Bitta segment va aniq ish bilan boshlang. Yaxshilanish dalilini oldindan belgilang.",
  },
  "pea-12-02": {
    goal: "Functional talab va tekshiriladigan acceptance criterion yozish.",
    plain: "“Tez ochilsin” degan gapni hamma boshqacha tushunadi. Ma’lum yuk va vaqt chegarasini yozsangiz, natija o‘lchanadi.",
    reflection: "Given–When–Then orqali holat, amal va natijani bog‘lang. Sifat talabiga sonli chegara bering.",
  },
  "pea-12-03": {
    goal: "MVP’ni mustaqil ko‘rsatib bo‘ladigan vertical slice’larga bo‘lish.",
    plain: "Bitta vazifani UI’dan yaratib bazada saqlash kichik bo‘lsa ham tugallangan oqim. Keyingi hafta shu asosga taklif funksiyasi qo‘shiladi.",
    reflection: "Asosiy foydani avval to‘liq yetkazing. Har milestone uchun ko‘rsatish mumkin bo‘lgan natija tanlang.",
  },
  "pea-12-04": {
    goal: "Oqimning loading, empty, error holatlari va accessibility talablarini loyihalash.",
    plain: "Guruh bo‘sh bo‘lsa taklif tugmasi kerak. Icon tugma ovozli o‘qilganda foydalanuvchi nima qilishini tushunishi zarur.",
    reflection: "Har holat uchun kerakli amalni yozing. Fokus tartibi, matn va tugma nomini sinang.",
  },
  "pea-12-05": {
    goal: "UI vazifasi asosida tema tokenlari va kontrastni belgilash.",
    plain: "Fon va matn ranglari almashadi, lekin “fon” va “asosiy matn” vazifasi bir xil qoladi.",
    reflection: "Ranglarni vazifasi bo‘yicha token qiling. Yorug‘ va tungi mavzuda o‘qilishini tekshiring.",
  },
  "pea-12-06": {
    goal: "Workspace, membership va resource modelida tenant chegarasini ifodalash.",
    plain: "Ikki markaz bitta bazada ishlaydi, lekin guruhlar va vazifalarni faqat o‘z a’zolari ko‘radi.",
    reflection: "Har tenant yozuviga workspace scope bering. Boshqa markazdan murojaat rad etilishini test qiling.",
  },
  "pea-12-07": {
    goal: "Resource endpointlari uchun input, javob va xato contractlarini yozish.",
    plain: "Mijoz yangi vazifa yaratganda qaysi qiymatlar kerak va xato holatida qanday javob kelishini oldindan biladi.",
    reflection: "URL, method, body va statuslarni hujjatlashtiring. Ichki tafsilot o‘rniga aniq xato kodi qaytaring.",
  },
  "pea-12-08": {
    goal: "Login, session expiry va logout amallarini xavfsiz bog‘lash.",
    plain: "Foydalanuvchi kirganda server keyingi so‘rovlarini tanish uchun vaqtinchalik belgi beradi. Chiqishda bu belgi bekor qilinadi.",
    reflection: "Sessiyaning yaratilishi, muddati va bekor qilinishini yozing. Cookie huquqlari va maxfiyligini tekshiring.",
  },
  "pea-12-09": {
    goal: "Role va workspace bo‘yicha serverda resource ruxsatini tekshirish.",
    plain: "Mentor o‘z guruhida vazifa yaratishi mumkin, boshqa guruhda ayni rol unga ruxsat bermaydi.",
    reflection: "Amal, rol va target workspace’ni birga tekshiring. UI server tekshiruviga qo‘shimcha bo‘ladi.",
  },
  "pea-12-10": {
    goal: "Route almashganda kech kelgan javob yangi ekranni bosmasligini ta’minlash.",
    plain: "A guruhini ochib darhol B ga o‘tsangiz, A haqidagi sekin javob B ro‘yxatini to‘ldirmasligi kerak.",
    reflection: "Loading va empty holatini alohida yozing. Eski so‘rovni cancel qiling yoki natijasini inkor eting.",
  },
  "pea-12-11": {
    goal: "HTTP controller va bir nechta kirish yo‘li ishlatadigan use case’ni ajratish.",
    plain: "Vazifa qo‘lda ham, import orqali ham yaratiladi. Ikkalasida bir xil biznes qoidasi ishlaydi.",
    reflection: "Inputni HTTP qatlamida parse qiling. Biznes invariantni umumiy use case ichida saqlang.",
  },
  "pea-12-12": {
    goal: "Runtime inputini tur, bo‘sh qiymat va uzunlik bo‘yicha tekshirish.",
    plain: "Forma sarlavhasi tashqaridan keladi va istalgan qiymat bo‘lishi mumkin. Saqlashdan oldin tekshiriladi.",
    reflection: "Type assertion’dan keyin ham kiritma nazoratga muhtoj. Null, whitespace va uzunlik chegarasini sinang.",
  },
  "pea-12-13": {
    goal: "Avvalgi va yangi ilova versiyasi bilan mos schema migration yozish.",
    plain: "Ustun nomini almashtirishda eski ilova hali oldingi ustunni o‘qiyotgan bo‘lishi mumkin. Yangi ustun avval yoniga qo‘shiladi.",
    reflection: "Qo‘shish, ko‘chirish va tozalashni rollout bilan bog‘lang. Har bosqichda ikkala consumer’ni tekshiring.",
  },
  "pea-12-14": {
    goal: "Bog‘liq yozuvlarni atomik saqlash va retry’dagi duplicate’ni oldini olish.",
    plain: "Taklif va uning audit hodisasi juft bo‘lib saqlanishi kerak. Qayta yuborilgan taklif ikkinchi yozuv ochmasin.",
    reflection: "Bitta tranzaksiyada yozing va stable request ID uchun unique constraint ishlating. Qisman xatoni sinang.",
  },
  "pea-12-15": {
    goal: "Pagination uchun stable sort, cursor va filterga mos indeks tanlash.",
    plain: "Bir vaqtda yozilgan ikki vazifa bir xil sana oladi. ID ularning qaysi biri oldinligini aniq qiladi.",
    reflection: "Sort fieldlariga noyob tie-breaker qo‘shing. Cursor keyingi sahifada ikkala qiymatdan foydalansin.",
  },
  "pea-12-16": {
    goal: "Domain, storage va asosiy oqimga mos test darajasini tanlash.",
    plain: "Baholash kichik unit test bilan tekshiriladi. Ikki workspace ma’lumoti aralashmasligi esa haqiqiy baza bilan sinaladi.",
    reflection: "Xavfi yuqori qoida uchun aniq fixture qo‘ying. Tenant izolyatsiyasini kamida ikki mustaqil workspace bilan tekshiring.",
  },
  "pea-12-17": {
    goal: "Trust boundary va asset bo‘yicha himoya nazoratlarini aniqlash.",
    plain: "Matn maydoni foydalanuvchidan keladi. Ma’lumot bazasi uni query buyrug‘i emas, qiymat sifatida olishi kerak.",
    reflection: "Input validation, parametrli query va authorization qayerda ishlashini belgilang. Har nazoratni tegishli chegarada tekshiring.",
  },
  "pea-12-18": {
    goal: "Audit event uchun zarur maydon va retention siyosatini tanlash.",
    plain: "Rol o‘zgarganda kim, qaysi foydalanuvchi uchun va qachon o‘zgartirganini bilish muhim.",
    reflection: "Event turi, actor, target va vaqtni saqlang. Secret qiymatlarini chiqarib tashlang va retention belgilang.",
  },
  "pea-12-19": {
    goal: "Latency breakdown va query soni orqali performance bottleneck’ni topish.",
    plain: "Har vazifa qatoridan keyin username uchun alohida query ketsa, ro‘yxat o‘sganda kutish ortadi.",
    reflection: "Avval latency va query sonini o‘lchang. N+1’ni JOIN yoki cheklangan batch bilan kamaytirib, qayta solishtiring.",
  },
  "pea-12-20": {
    goal: "Staging va production uchun ma’lumot, secret hamda tashqi ta’sirlarni ajratish.",
    plain: "Test taklif xati haqiqiy o‘quvchiga bormasligi kerak. Staging avvaldan test adresga sozlanadi.",
    reflection: "Har muhitning DB va secret’i alohida bo‘lsin. Xabar yoki webhook qayerga chiqishini sinang.",
  },
  "pea-12-21": {
    goal: "Yangi contributor takrorlay oladigan setup, API namunalari va runbook yozish.",
    plain: "Yangi clone olgan odam bir nechta aniq buyruqdan keyin demo ma’lumot bilan test ishlata olishi kerak.",
    reflection: "README’ni toza clone’da tekshiring. API misollariga sun’iy identifikatorlar va maxfiy qiymatsiz config yozing.",
  },
  "pea-12-22": {
    goal: "System design yechimini talab, taxmin va trade-off bilan og‘zaki tushuntirish.",
    plain: "Hisobot eksporti kichik bo‘lsa darrov qaytariladi, katta bo‘lsa navbat va tayyor fayl qulay bo‘lishi mumkin.",
    reflection: "Avval yuk va kechikish talablari haqida aniqlik kiriting. Qaysi qaror nimaga mosligini hisob bilan asoslang.",
  },
  "pea-12-23": {
    goal: "Debugging suhbatida muammoni qayta ko‘rsatish va hypothesis’ni signal bilan sinash.",
    plain: "Faqat bitta rolda upload xato bersa, hamma tizimni o‘zgartirishdan oldin shu holatni takrorlash kerak.",
    reflection: "Minimal reproduksiya yarating. Bir farazni bitta signal bilan tekshiring va regression test yozing.",
  },
  "pea-12-24": {
    goal: "Portfolio case study’da qaror va natijalarni tekshiriladigan dalil bilan ko‘rsatish.",
    plain: "Ko‘riladigan demo va ism-sharifsiz ikki tenant sinovi ishlagan yechimni namoyish etadi.",
    reflection: "Muammo, rolingiz va o‘lchangan natijani yozing. Taxminlarni ochiq ayting va takrorlanadigan dalil qo‘shing.",
  },
  "pea-12-25": {
    goal: "Release oldidan compatibility va rollback mashqini o‘tkazish.",
    plain: "Yangi config ishlamasa, oldingi digest qayta tanlanadi. Shundan so‘ng eski mijoz bilan muhim oqim tekshiriladi.",
    reflection: "Rollback trigger va bajaruvchini yozing. Tiklanganini eng avval ta’sirlangan foydalanuvchi yo‘li bilan tasdiqlang.",
  },
  "pea-12-26": {
    goal: "Finalga tayyorlanishda recall, mini-task va xato tahlilidan foydalanish.",
    plain: "Savol javobini yoddan aytish bilan sababini misolda tushuntirish turli darajadagi bilimni ko‘rsatadi.",
    reflection: "Har xatoga sabab va edge case yozing. Qayta urinishda oldingi zaif mavzularni solishtiring.",
  },
  "pea-12-27": {
    goal: "Capstone natijasini dalilga asoslangan rubric bilan baholab, yaxshilash qadamini tanlash.",
    plain: "Demo mashq yaratishni, test tenant chegarasini, runbook esa tiklash qadamini ko‘rsatadi. Har dalil alohida mezonni yoritadi.",
    reflection: "Rubric bandiga ko‘rsatiladigan dalil biriktiring. Keyingi iteratsiyada eng katta kamchilikka o‘lchovli yaxshilash qo‘ying.",
  },
} satisfies Record<string, LessonGuide>;

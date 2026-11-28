# Personal Engineering Academy

Oflayn foydalanish uchun React Native va Expo ilovasi. Profil, o‘quv natijalari va sozlamalar qurilmadagi SQLite bazasida saqlanadi.

## Ilovadagi bo‘limlar

- 12 oy va 52 haftaga bo‘lingan 260 ta dasturlash darsi.
- Kod yozish, qoralama saqlash va yechim bilan mustaqil solishtirish uchun 100 ta mashq.
- A1–B2 darajalarida misol gap va o‘zbekcha tarjimasi bilan 1 000 ta lug‘at birligi, 224 ta mashq, 40 ta grammatika darsi va 20 ta texnik matn. Mashqlar javob tanlash, inglizcha tarjima yozish va so‘zlarni tartiblab gap tuzishni qamrab oladi.
- 12 ta amaliy loyiha, imtihonlar va javoblar tarixi.
- Kunlik reja, o‘qish taymeri, natijalar, yorug‘ va tungi mavzu, JSON orqali zaxiralash va tiklash.

## Papkalar

| Papka | Vazifasi |
| --- | --- |
| `app/` | Expo Router ekranlari va navigatsiya |
| `src/components/`, `src/theme/` | Umumiy UI komponentlari va mavzular |
| `src/curriculum/`, `src/english/` | O‘quv kataloglari va dars materiallari |
| `src/challenges/`, `src/exams/`, `src/projects/` | Mashqlar, imtihonlar va loyihalar |
| `src/database/` | SQLite ulanishi, migratsiyalar, saqlash va zaxira |
| `src/features/`, `src/services/` | Kunlik reja, sozlamalar, bosh sahifa va tahlil |
| `src/hooks/`, `src/utils/` | Ekranlar o‘rtasida ulashiladigan yordamchi kod |
| `tests/` | Katalog, imtihon va migratsiya testlari |

## Mahalliy ishga tushirish

Node.js 24 bilan loyiha ildizida quyidagi buyruqlarni bajaring.

```sh
npm ci
npm run typecheck
npm test
npx expo install --check
npx expo-doctor
npx expo start
```

## Android Preview APK

`eas.json` ichidagi `preview` profili ichki tarqatish uchun APK yig‘adi. Quyidagi buyruqni Expo akkaunti bilan ishga tushiring. EAS build uchun akkaunt kvotasi qo‘llanadi.

```sh
npx eas-cli build --platform android --profile preview
```

Qurilmadagi oflayn ishlash, qayta ochilganda natijalar saqlanishi va Android’da JSON eksport hamda tiklashni relizdan oldin sinang. Joriy tekshiruvlar va ochiq bandlar [PROJECT_STATUS.md](PROJECT_STATUS.md) faylida.

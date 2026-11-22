# Personal Engineering Academy

A personal **offline-first** React Native learning app. No account, login, backend or cloud sync is required.

## Features currently implemented in source
- First-launch onboarding (name, programming level, English level, learning goal).
- Dashboard and 12-month roadmap; planned months are clearly marked in the course catalog.
- One hundred and twenty-five offline lessons: 21 JavaScript fundamentals, 16 advanced JavaScript, 16 TypeScript, 16 React, 16 Next.js, 20 Backend Engineering and 20 MongoDB & Databases, each with examples and a quick check.
- Course catalog with lesson completion status.
- Daily 60-minute checklist (25m programming, 15m practice, 15m English, 5m review).
- English Academy: nine starter exercises across A1, A2, B1 and B2.
- Five-question JavaScript weekly quiz and saved attempt history.
- Local progress dashboard.
- Expo SQLite stores profile, lesson completions, English progress, daily tasks and quiz attempts.

## Stack
Expo SDK 58 target, React Native, TypeScript, Expo Router and Expo SQLite.

## Local setup and verification
```bash
npm install
npm run typecheck
npx expo-doctor
npx expo install --check
```
If Expo reports incompatible dependency versions, inspect the output before running `npx expo install --fix`. Do not assume package versions are correct just because `npm install` succeeded.

To launch after the checks:
```bash
npx expo start
```
Use Expo Go on an Android phone, test first launch, lessons, quiz, English exercises, daily checklist, app restart and airplane mode.

## Current limitations
- **Not yet validated** with TypeScript, Expo Doctor or on a physical Android device.
- The full 52-week curriculum beyond the first seven months, monthly exams, XP/streaks, reminders, offline code execution and AI tutor are **not implemented**.
- Quiz currently covers one sample JavaScript week.
- Progress is stored on this device; uninstalling the app may delete it. No export/backup yet.
- SDK 58 dependency compatibility must be confirmed by local tooling.
- Earlier project versions remain in Git history.

## Next milestones
1. Fix all TypeScript and Expo Doctor findings, confirm Android launch.
2. Refine navigation, accessibility and UI.
3. Author the 52-week curriculum with coding exercises and English practice.
4. Add monthly assessments, learning analytics and manual data export.
5. Complete offline QA and produce an Android build.

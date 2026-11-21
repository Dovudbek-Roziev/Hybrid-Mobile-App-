# Personal Engineering Academy

A clean restart of the existing repository. **Single-user, offline-first mobile learning app.**

## Product principles
- No registration, login, password, JWT, MongoDB, or mandatory backend.
- First launch: first name, last name, programming level, English level and learning goal.
- Expo SQLite stores the profile and completed lessons locally.
- Bundled lessons and quizzes run in airplane mode.
- Dark, accessible UI with a single shared color palette.

## Stack
React Native, Expo SDK 58 target, TypeScript, Expo Router, Expo SQLite.

## Run
1. Install Node.js and run `npm install`.
2. Run `npx expo install --fix` to resolve SDK-compatible versions.
3. Run `npm run typecheck` and `npx expo start`.
4. Test in Expo Go on Android, including airplane mode and relaunch.

**Important:** Expo SDK 58 package compatibility and device runtime have not yet been verified. Current curriculum includes three working sample lessons, not the full 52-week course. The roadmap lists planned months; they are not yet authored. No AI teacher or code execution is claimed. Offline progress is device-local and may be lost on uninstall. Prior repository history remains available in Git history.

## Roadmap
1. Validate install, typecheck and Android runtime.
2. Expand daily lesson content and English practice.
3. Add weekly quizzes, monthly exams and analytics.
4. Add manual backup/export and import.
5. Add accessibility, unit tests, QA and APK release.

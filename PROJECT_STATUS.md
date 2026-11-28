# Personal Engineering Academy — project status

## Repository audit

- Upstream baseline: `144b2dc` on `origin/main`. The workspace was 22 commits behind and was fast-forwarded.
- Baseline contains 125 programming lessons across months 1–7, nine English exercises, five weekly quiz questions, profile onboarding, lesson search and completion, and a daily checklist.
- Expo SDK 58 and React Native 0.88 were already selected. Native modules had mostly unbounded versions and the npm lockfile was untracked.
- The baseline TypeScript check failed in `app/catalog.tsx` due to an incorrect JSX closing tag.
- The existing `academy.db` stores profile settings, lesson and English completions, quiz attempts, and a daily checklist. Compatibility with those rows is required for upgrades.
- Android tooling was not found on PATH during audit. Android runtime and airplane-mode checks remain release gates until performed on a device or emulator.

## Work underway

The implementation will extend the existing routes and database. Remaining gates include on-device validation, content coverage and review, backup import and export, and Android build configuration.

## Stage 1 — Architecture

- Fixed the catalog parser error and unsupported React Native font weights. Locked SDK 58.1-compatible packages and resolved the React DOM peer mismatch.
- Added reusable screen, card, button, input, progress and loading components. Added a persisted React Context theme and reorganized the existing tabs without changing their URL paths.
- Registered versioned SQLite migrations. They retain the existing database filename, profile key, tables and completion IDs.
- TypeScript, Expo dependency check, Expo Doctor (20/20), and the legacy SQL migration fixture passed. The fixture exercises SQL through Node SQLite. Expo SQLite still needs an Android runtime check.
- Android platform tools and the emulator were found outside PATH. No device was connected and no AVD was configured at audit time.

## Stage 2 — Dashboard and onboarding

- Connected all five tabs, improved profile onboarding, and added Settings for display language, theme, font size, name, study duration and rest days.
- Home shows the next unfinished lesson and real SQLite completion, checklist, activity streak and study-session totals.
- Home, Settings, onboarding and the daily plan have Uzbek Latin and English UI. Older screen labels and course text are being updated in their respective stages.
- The Practice tab currently connects to original lesson practice and weekly quiz flows. The dedicated challenge catalog is scheduled for stage 5.
- TypeScript and the SQLite migration fixture passed.

## Stage 3 — Lesson engine

- Added curriculum week and difficulty metadata while keeping all original lesson IDs.
- Added a virtualized week-grouped catalog, searchable lesson titles and completion filters. The lesson reader supports copyable code, practical tasks, quiz feedback, completion revisits and next-lesson navigation.
- The new data model supports goal, plain-language explanation, real example, common mistakes, tailored practice and reflection. The original 125 lessons are preserved and still need editorial enrichment and translation.
- TypeScript and the SQLite migration fixture passed.

## Stage 4 — 52-week curriculum

- Added 135 offline lessons for months 8–12. The catalog now contains 260 lessons in 12 months and 52 consecutive weeks.
- Kept all 125 original IDs, code examples, English theory and quiz items. Added Uzbek Latin theory and a topic-specific practical task to each original lesson.
- New lessons carry Uzbek Latin explanations, examples, common mistakes, practical tasks and knowledge checks. Technical terminology stays in English.
- TypeScript and three automated tests passed. The curriculum tests check counts, ID preservation, week coverage, and the integrity of lesson and question data. They do not execute the code examples.
- Legacy quiz prompts and choices retain their original English. Android runtime verification remains pending.

## Stage 5 — Coding Challenges (in progress)

- Added 100 Uzbek-language challenges with starter code, hints and reference solutions.
- Added searchable difficulty-filtered Practice catalog and a challenge editor with explicit draft saving and self-reviewed completion in SQLite.
- User code is not executed or automatically graded. Completion is self-assessed.
- Remaining: add topic filters, review solutions, add tests, verify TypeScript and Android runtime.

Catalog verification: 100 unique IDs; 47 easy, 40 medium, 13 hard. Reference solutions and Android runtime have not been tested.

## Release candidate preparation

Implemented catalogs: 260 lessons, 100 challenges, 1000 vocabulary words, 200 English exercises, 40 grammar lessons, 20 readings and 12 projects. Exam engine, analytics, study timer and JSON backup/restore have been added. Challenge lists are paginated; lesson answers are shuffled. Content and exam tests and GitHub Actions quality checks are configured. EAS preview APK and production Android bundle profiles are configured.

**Release gate:** latest TypeScript, automated tests, Expo Doctor, dependency compatibility, Android smoke tests and backup/restore round trip have not been verified. No APK has been built. Challenges are self-reviewed, not executed. Full content and translation review remains pending.

Local verification: `npm ci`, `npm run typecheck`, `npm test`, `npx expo install --check`, `npx expo-doctor`, `npx expo start`. After successful verification, an authenticated Expo account can run `npx eas-cli build --platform android --profile preview` (subject to build quota/cost).

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

**Release gate:** Android device smoke tests, airplane-mode behavior and the device backup/restore round trip still need verification. No APK has been built. Challenges are self-reviewed. Full content and translation review remains pending.

Local verification: `npm ci`, `npm run typecheck`, `npm test`, `npx expo install --check`, `npx expo-doctor`, `npx expo start`. After successful verification, an authenticated Expo account can run `npx eas-cli build --platform android --profile preview` (subject to build quota/cost).

## Workspace and source organization

- The primary workspace now tracks the latest GitHub history directly. The nested clone and the earlier local exam draft were archived beside the workspace.
- Grouped the curriculum, English exercises, exam question bank, SQLite access, preferences and theme by responsibility. The original lesson data is separate from the assembled curriculum catalog. Existing route paths, SQLite tables and content IDs are preserved.
- Fixed the missing challenge screen content and the exam test import collision. TypeScript, all nine automated tests, Expo dependency checks, Expo Doctor (20/20) and the Android JavaScript export passed after the refactor.
- The Android export verifies bundling. APK installation and on-device SQLite, backup and offline flows remain pending.

## Backup and restore verification

- Version 1 backups retain the same format and columns. The validator now rejects invalid timestamps and calendar dates, duplicate keys or exam questions, and answers whose attempt is missing. Invalid study preference fields are also rejected.
- Restore checks database references before committing the replacement transaction. Failure rolls back to the existing data. The backup screen shows import and export errors in Uzbek or English.
- Node SQLite integration tests round-trip all 11 backup tables and verify that an invalid input or an inconsistent write preserves the original state. TypeScript, all 11 automated tests, Expo Doctor (20/20), dependency checks and Android JavaScript export passed. Native file-picker and share-sheet flows still need an Android device test.

## Exam settings

- Settings stores an exam pass score from 1 to 100. Each new exam captures the selected threshold and records it with the result so history stays accurate after a settings change.
- The exam setup offers timed and untimed attempts. Timed attempts submit at their deadline. Untimed attempts can be submitted manually.
- TypeScript, all 13 automated tests, Expo dependency checks, Expo Doctor (20/20) and Android JavaScript export passed. The SQLite integration test verifies that two attempts with the same score retain different pass thresholds through a backup round trip. Phone interaction remains unverified.

## Exam topic analysis

- Exam history displays correct, incorrect and unanswered counts by curriculum topic for a single attempt or across all saved attempts. Each known topic expands to lesson results with a direct link for review.
- Existing answers use the stored lesson ID or, for older snapshots, the lesson prefix in the question ID. Answers with no matching lesson are counted in an unknown-topic group.
- TypeScript, all 13 automated tests, Expo dependency checks, Expo Doctor (20/20) and Android JavaScript export passed. SQLite integration covers both scopes, all answer categories and older snapshots. Android device interaction remains pending.

## Local study reminders

- Settings schedules a local reminder at the selected device time on each saved study day. Rest-day or language changes update the schedule. Tapping the notification opens the daily plan.
- Permission is requested from the enable action. The app uses Android best-effort delivery, which can be delayed by the operating system. Reminder settings stay in the existing backup format and are reconciled after restore or app startup.
- TypeScript, all 16 automated tests, Expo dependency checks, Expo Doctor (20/20), Android config introspection and Android JavaScript export passed. Tests cover weekday mapping, duplicate prevention, permission flow and failed schedule replacement with a simulated native adapter. Android delivery and tap routing still need a device test.

## Reset learning progress

- Settings offers a reset behind an explicit destructive confirmation. One SQLite transaction clears the ten learning tables, including challenge drafts and exam history. Profile, study preferences, notifications and schema migration history are preserved.
- SQLite integration verifies rollback after a simulated deletion failure, safe repeated resets and restoring the original backup afterward. TypeScript, all 17 automated tests, Expo dependency checks, Expo Doctor (20/20) and Android JavaScript export passed. The confirmation dialog still needs a device smoke test.

## English Academy and weekly quiz localization

- Localized the English Academy tab, exercise instructions and progress feedback, and the legacy weekly JavaScript quiz in English and Uzbek Latin. English learning examples and technical language stay visible where the exercises use them.
- Replaced the legacy Cyrillic Uzbek translations with Uzbek Latin. Original exercise IDs, option positions and the weekly quiz attempt ID are preserved.
- TypeScript, all 18 automated tests, Expo dependency checks, Expo Doctor (20/20) and Android JavaScript export passed. Language switching on an Android device remains unverified.

# Offline-only personal academy: product decision

This app is for one person on one device. No login, registration, passwords, JWT, server or MongoDB are required for core features.

## First launch
Ask for first name, last name, programming level, English level and learning goal. Save locally in Expo SQLite. On later launches, open Dashboard without onboarding.

## Offline requirements
Bundle authored lessons, quizzes and English exercises with the application; store profile, lesson completions, exam attempts and settings in SQLite. No network request is needed to start, learn or review progress.

## Privacy and backup
No profile data is uploaded by default. Reinstalling the app or clearing app data can erase local progress. A future manual export/import feature is recommended.

## Optional future additions
AI tutoring requires internet unless an on-device model is implemented. The existing backend is legacy prototype code and is not part of the offline-first core. Remove unused account UI and server dependencies from the mobile user journey.

## Quality gates
Test first launch, relaunch, airplane mode, app restart, database migrations, accessibility and release build on a real Android device.

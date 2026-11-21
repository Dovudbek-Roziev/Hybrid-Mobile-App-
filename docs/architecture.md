# Hybrid Mobile App architecture and delivery plan

## Technology targets
- Expo SDK 58 / React Native 0.88 / React 19.3 / TypeScript 5.9 (compatibility to validate)
- Expo Router navigation
- Expo SQLite for device-local progress
- Express 4 / Node 22 / PostgreSQL 17 / JWT / bcryptjs / Zod
- AI service through server only, with credentials never shipped in the mobile app

## Modules
1. Dashboard and navigation
2. 12-month curriculum / 52-week schedule
3. Coding practice and English Academy
4. Weekly quizzes and monthly examinations
5. Offline lessons, SQLite progress and conflict-aware sync
6. Authentication and protected API
7. AI teacher and feedback
8. Portfolio projects and analytics

## Daily study
25 minutes programming theory, 15 minutes coding, 15 minutes English, 5 minutes review.

## Delivery gates
1. Resolve dependency compatibility and clean TypeScript builds.
2. Run PostgreSQL migration and test auth / progress endpoints.
3. Test SQLite on Android and airplane mode.
4. Implement authenticated sync and test reconnect/conflicts.
5. Complete authored curriculum and assessments with answer validation.
6. Add AI tutor with usage limits, abuse protection and privacy safeguards.
7. Add automated tests, accessibility checks and release APK.

## Current limitations
Only the first lesson has authored content. AI, full quizzes, English curriculum and server sync are not yet implemented. Backend and mobile have not been integration-tested. Avoid claiming the app is production-ready until release gates pass.

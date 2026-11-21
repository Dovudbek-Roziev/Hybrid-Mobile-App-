# Hybrid Roadmap API

Express + TypeScript + PostgreSQL starter backend.

## Local setup
1. Install Node.js and PostgreSQL.
2. Run `npm install` inside `backend/`.
3. Copy `.env.example` to `.env` and replace the sample credentials and JWT secret.
4. Create a database named `hybrid_roadmap`.
5. Apply `sql/001_init.sql` to that database using psql or your PostgreSQL GUI.
6. Run `npm run dev`.

## Routes
- `GET /api/health`
- `GET /api/modules`
- `GET /api/lessons`
- `POST /api/auth/register` — email, password, displayName
- `POST /api/auth/login` — email, password; returns JWT
- `GET /api/progress` — Bearer JWT
- `PUT /api/progress/:lessonId` — Bearer JWT

**Status:** starter implementation only, not deployed or production hardened. No rate limiting, email verification, password reset, AI integration, or complete curriculum yet. Never commit `.env` or real secrets.

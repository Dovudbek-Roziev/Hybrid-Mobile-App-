# Mobile + Backend local setup

1. Create PostgreSQL database `hybrid_roadmap` and apply `backend/sql/001_init.sql`.
2. In `backend/`, copy `.env.example` to `.env`, fill database credentials and a random JWT_SECRET (32+ characters).
3. In `backend/`, run `npm install` and `npm run dev`.
4. In project root, run `npm install` and `npx expo install --fix`.
5. Copy root `.env.example` to `.env`. Set EXPO_PUBLIC_API_URL to your laptop LAN IP on port 4000, not localhost (phone and laptop must share Wi-Fi).
6. Run `npx expo start --clear`. Open the Account tab to register, sign in, and mark lesson js-001 complete.

This integration is not tested on a device yet. No offline synchronization or AI chat is implemented. Never commit credentials. Use HTTPS for a deployed backend.

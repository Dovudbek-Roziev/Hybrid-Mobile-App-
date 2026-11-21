import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { randomUUID } from 'node:crypto';
import bcrypt from 'bcryptjs';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { z } from 'zod';
import { getDb } from './db.js';
import { modules, lessons } from './data.js';

const app = express();
app.disable('x-powered-by');
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') ?? false }));
app.use(express.json({ limit: '16kb' }));

const credentials = z.object({ email: z.string().email().max(254).transform(v => v.toLowerCase()), password: z.string().min(8).max(128) });
const registration = credentials.extend({ displayName: z.string().trim().min(2).max(80) });
const lessonIdSchema = z.string().regex(/^[a-z0-9-]{1,60}$/);

function secret() {
  const value = process.env.JWT_SECRET;
  if (!value || value.length < 32) throw new Error('JWT_SECRET must be at least 32 characters');
  return value;
}

function auth(req: express.Request, res: express.Response, next: express.NextFunction) {
  const token = /^Bearer (.+)$/.exec(req.header('authorization') ?? '')?.[1];
  if (!token) { res.status(401).json({ error: 'Authentication required' }); return; }
  try {
    const payload = jwt.verify(token, secret()) as JwtPayload;
    if (typeof payload.sub !== 'string') throw new Error('Invalid token subject');
    res.locals.userId = payload.sub;
    next();
  } catch { res.status(401).json({ error: 'Invalid or expired token' }); }
}

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'hybrid-roadmap-api' }));
app.get('/api/modules', (_req, res) => res.json({ modules }));
app.get('/api/lessons', (_req, res) => res.json({ lessons }));

app.post('/api/auth/register', async (req, res, next) => {
  const parsed = registration.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: 'Invalid registration details' }); return; }
  try {
    const { email, password, displayName } = parsed.data;
    const passwordHash = await bcrypt.hash(password, 12);
    const id = randomUUID();
    await getDb().query('INSERT INTO users (id, email, password_hash, display_name) VALUES ($1,$2,$3,$4)', [id, email, passwordHash, displayName]);
    res.status(201).json({ user: { id, email, displayName } });
  } catch (error) {
    if ((error as { code?: string }).code === '23505') { res.status(409).json({ error: 'Email already registered' }); return; }
    next(error);
  }
});

app.post('/api/auth/login', async (req, res, next) => {
  const parsed = credentials.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: 'Invalid credentials' }); return; }
  try {
    const result = await getDb().query('SELECT id, email, password_hash, display_name FROM users WHERE email=$1', [parsed.data.email]);
    const user = result.rows[0];
    if (!user || !(await bcrypt.compare(parsed.data.password, user.password_hash))) {
      res.status(401).json({ error: 'Invalid email or password' }); return;
    }
    const token = jwt.sign({}, secret(), { subject: user.id, expiresIn: '7d' });
    res.json({ token, user: { id: user.id, email: user.email, displayName: user.display_name } });
  } catch (error) { next(error); }
});

app.get('/api/progress', auth, async (_req, res, next) => {
  try {
    const result = await getDb().query('SELECT lesson_id AS "lessonId", completed_at AS "completedAt" FROM lesson_progress WHERE user_id=$1 ORDER BY completed_at DESC', [res.locals.userId]);
    res.json({ progress: result.rows });
  } catch (error) { next(error); }
});

app.put('/api/progress/:lessonId', auth, async (req, res, next) => {
  const parsed = lessonIdSchema.safeParse(req.params.lessonId);
  if (!parsed.success || !lessons.some(l => l.id === parsed.data)) {
    res.status(400).json({ error: 'Unknown lesson' }); return;
  }
  try {
    await getDb().query('INSERT INTO lesson_progress (user_id, lesson_id) VALUES ($1,$2) ON CONFLICT (user_id, lesson_id) DO NOTHING', [res.locals.userId, parsed.data]);
    res.json({ lessonId: parsed.data, completed: true });
  } catch (error) { next(error); }
});

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Request failed', error);
  res.status(500).json({ error: 'Internal server error' });
});

const port = Number(process.env.PORT ?? 4000);
app.listen(port, () => console.log(`API listening on port ${port}`));

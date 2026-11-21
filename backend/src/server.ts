import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bcrypt from 'bcryptjs';
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { z } from 'zod';
import mongoose from 'mongoose';
import { connectDb } from './db.js';
import { User, LessonProgress } from './models.js';
import { modules, lessons } from './data.js';

const app = express();
app.disable('x-powered-by');
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN?.split(',') ?? false }));
app.use(express.json({ limit: '16kb' }));

const credentials = z.object({
  email: z.string().email().max(254).transform(v => v.toLowerCase()),
  password: z.string().min(8).max(128),
});
const registration = credentials.extend({ displayName: z.string().trim().min(2).max(80) });
const lessonIdSchema = z.string().regex(/^[a-z0-9-]{1,60}$/);

function secret(): string {
  const value = process.env.JWT_SECRET;
  if (!value || value.length < 32) throw new Error('JWT_SECRET must be at least 32 characters');
  return value;
}

function auth(req: express.Request, res: express.Response, next: express.NextFunction) {
  const token = /^Bearer (.+)$/.exec(req.header('authorization') ?? '')?.[1];
  if (!token) { res.status(401).json({ error: 'Authentication required' }); return; }
  try {
    const payload = jwt.verify(token, secret()) as JwtPayload;
    if (typeof payload.sub !== 'string' || !mongoose.isValidObjectId(payload.sub)) throw new Error('Invalid subject');
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
    const user = await User.create({ email, passwordHash, displayName });
    res.status(201).json({ user: { id: user.id, email: user.email, displayName: user.displayName } });
  } catch (error) {
    if ((error as { code?: number }).code === 11000) { res.status(409).json({ error: 'Email already registered' }); return; }
    next(error);
  }
});

app.post('/api/auth/login', async (req, res, next) => {
  const parsed = credentials.safeParse(req.body);
  if (!parsed.success) { res.status(400).json({ error: 'Invalid credentials' }); return; }
  try {
    const user = await User.findOne({ email: parsed.data.email });
    if (!user || !(await bcrypt.compare(parsed.data.password, user.passwordHash))) {
      res.status(401).json({ error: 'Invalid email or password' }); return;
    }
    const token = jwt.sign({}, secret(), { subject: user.id, expiresIn: '7d' });
    res.json({ token, user: { id: user.id, email: user.email, displayName: user.displayName } });
  } catch (error) { next(error); }
});

app.get('/api/progress', auth, async (_req, res, next) => {
  try {
    const rows = await LessonProgress.find({ userId: res.locals.userId }).sort({ completedAt: -1 }).lean();
    res.json({ progress: rows.map(row => ({ lessonId: row.lessonId, completedAt: row.completedAt })) });
  } catch (error) { next(error); }
});

app.put('/api/progress/:lessonId', auth, async (req, res, next) => {
  const parsed = lessonIdSchema.safeParse(req.params.lessonId);
  if (!parsed.success || !lessons.some(l => l.id === parsed.data)) {
    res.status(400).json({ error: 'Unknown lesson' }); return;
  }
  try {
    await LessonProgress.updateOne(
      { userId: res.locals.userId, lessonId: parsed.data },
      { $setOnInsert: { completedAt: new Date() } },
      { upsert: true },
    );
    res.json({ lessonId: parsed.data, completed: true });
  } catch (error) { next(error); }
});

app.use((error: unknown, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Request failed', error);
  res.status(500).json({ error: 'Internal server error' });
});

const port = Number(process.env.PORT ?? 4000);
async function start() {
  secret();
  await connectDb();
  app.listen(port, () => console.log(`API listening on port ${port}`));
}
start().catch(error => { console.error('Startup failed', error); process.exitCode = 1; });

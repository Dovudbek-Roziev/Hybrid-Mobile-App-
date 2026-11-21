import pg from 'pg';
import 'dotenv/config';

let pool: pg.Pool | undefined;
export function getDb(): pg.Pool {
  if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is required');
  pool ??= new pg.Pool({ connectionString: process.env.DATABASE_URL, max: 10 });
  return pool;
}

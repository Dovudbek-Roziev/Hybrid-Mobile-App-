import { db } from '../database/connection';
import type { DailyTask } from '../database/storage';
import { defaultPassScore, isPassScore } from '../exams/options';
import { isReminderTime } from '../notifications/reminder-plan';

export type Preferences = {
  theme: 'dark' | 'light';
  language: 'en' | 'uz';
  fontSize: number;
  minutes: Record<DailyTask, number>;
  rest: number[];
  reminder: string | null;
  pass: number;
};

export const defaults: Preferences = {
  theme: 'dark',
  language: 'uz',
  fontSize: 1,
  minutes: { programming: 25, practice: 15, english: 15, review: 5 },
  rest: [],
  reminder: null,
  pass: defaultPassScore,
};

export function isPreferences(input: unknown): input is Preferences {
  if (!input || typeof input !== 'object') return false;
  const value = input as Preferences;
  return (
    ['dark', 'light'].includes(value.theme) &&
    ['en', 'uz'].includes(value.language) &&
    [1, 1.15, 1.3].includes(value.fontSize) &&
    value.minutes !== null &&
    typeof value.minutes === 'object' &&
    !Array.isArray(value.minutes) &&
    Object.keys(value.minutes).length ===
      Object.keys(defaults.minutes).length &&
    Object.keys(defaults.minutes).every((key) => {
      const minutes = value.minutes[key as DailyTask];
      return Number.isInteger(minutes) && minutes >= 1 && minutes <= 180;
    }) &&
    Array.isArray(value.rest) &&
    value.rest.every((day) => Number.isInteger(day) && day >= 0 && day <= 6) &&
    (value.reminder === null || isReminderTime(value.reminder)) &&
    isPassScore(value.pass)
  );
}

export async function loadPreferences() {
  const row = await (
    await db()
  ).getFirstAsync<{ value: string }>(
    "SELECT value FROM settings WHERE key = 'preferences'",
  );
  if (!row) return defaults;
  try {
    const value: unknown = JSON.parse(row.value);
    return isPreferences(value) ? value : defaults;
  } catch {
    return defaults;
  }
}

export async function savePreferences(value: Preferences) {
  if (!isPreferences(value))
    throw Error('Check the study times, pass score and reminder time.');
  await (
    await db()
  ).runAsync(
    "INSERT INTO settings(key, value) VALUES('preferences', ?) ON CONFLICT(key) DO UPDATE SET value = excluded.value",
    JSON.stringify(value),
  );
}

import type { Preferences } from '../features/preferences';

export type ReminderSettings = Pick<
  Preferences,
  'reminder' | 'rest' | 'language'
>;
export const reminderPrefix = 'academy-study-reminder/';

export function isReminderTime(value: unknown): value is string {
  return typeof value === 'string' && /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
}

export function studyReminderPlan({
  reminder,
  rest,
  language,
}: ReminderSettings) {
  if (!isReminderTime(reminder)) return [];
  const [hour, minute] = reminder.split(':').map(Number);
  return Array.from({ length: 7 }, (_, day) => day)
    .filter((day) => !rest.includes(day))
    .map((day) => ({
      identifier: reminderPrefix + [language, day, reminder].join('/'),
      weekday: day + 1,
      hour,
      minute,
    }));
}

export function reminderScheduleChanges(
  settings: ReminderSettings,
  scheduled: readonly string[],
) {
  const plan = studyReminderPlan(settings);
  const expected = new Set(plan.map((item) => item.identifier));
  const existing = new Set(scheduled);
  return {
    add: plan.filter((item) => !existing.has(item.identifier)),
    remove: scheduled.filter(
      (id) => id.startsWith(reminderPrefix) && !expected.has(id),
    ),
  };
}

import assert from 'node:assert/strict';
import { registerHooks } from 'node:module';
import test from 'node:test';
import {
  isReminderTime,
  reminderScheduleChanges,
  studyReminderPlan,
} from '../src/notifications/reminder-plan.ts';

const weekdays = { reminder: '19:05', rest: [0, 6], language: 'uz' };

test('a reminder schedules the selected local time on study days', () => {
  const plan = studyReminderPlan(weekdays);
  assert.deepEqual(
    plan.map(({ weekday, hour, minute }) => [weekday, hour, minute]),
    [
      [2, 19, 5],
      [3, 19, 5],
      [4, 19, 5],
      [5, 19, 5],
      [6, 19, 5],
    ],
  );
  assert.equal(studyReminderPlan({ ...weekdays, rest: [] }).length, 7);
  assert.deepEqual(
    studyReminderPlan({ ...weekdays, rest: [0, 1, 2, 3, 4, 5, 6] }),
    [],
  );
  assert.deepEqual(studyReminderPlan({ ...weekdays, reminder: null }), []);
  for (const invalid of ['24:00', '12:60', '7:00', '11:1', null]) {
    assert.equal(isReminderTime(invalid), false);
  }
  assert.equal(isReminderTime('00:00'), true);
  assert.equal(isReminderTime('23:59'), true);
});

test('reapplying a schedule is idempotent and turning it off leaves other notifications intact', () => {
  const ids = studyReminderPlan(weekdays).map((item) => item.identifier);
  const existing = [...ids, 'unrelated'];
  assert.deepEqual(reminderScheduleChanges(weekdays, existing), {
    add: [],
    remove: [],
  });
  assert.deepEqual(
    reminderScheduleChanges({ ...weekdays, reminder: null }, existing),
    { add: [], remove: ids },
  );
  const localized = reminderScheduleChanges(
    { ...weekdays, language: 'en' },
    existing,
  );
  assert.equal(localized.add.length, 5);
  assert.deepEqual(localized.remove, ids);
});

test('native reminder adapter requests permission explicitly and replaces schedules safely', async () => {
  const notifications = new Map([['unrelated', { identifier: 'unrelated' }]]);
  let granted = false;
  let prompts = 0;
  let channelExists = false;
  let failAtWeekday;
  globalThis.reminderTestApi = {
    AndroidImportance: { DEFAULT: 3, NONE: 0 },
    SchedulableTriggerInputTypes: { WEEKLY: 'weekly' },
    async setNotificationChannelAsync() {
      channelExists = true;
    },
    async getNotificationChannelAsync() {
      return { importance: 3 };
    },
    async getPermissionsAsync() {
      return { granted, canAskAgain: true };
    },
    async requestPermissionsAsync() {
      assert.equal(channelExists, true);
      prompts++;
      granted = true;
      return { granted };
    },
    async getAllScheduledNotificationsAsync() {
      return [...notifications.values()];
    },
    async scheduleNotificationAsync(request) {
      if (request.trigger.weekday === failAtWeekday)
        throw Error('simulated OS error');
      notifications.set(request.identifier, request);
      return request.identifier;
    },
    async cancelScheduledNotificationAsync(id) {
      notifications.delete(id);
    },
  };
  const keys = Object.keys(globalThis.reminderTestApi);
  const exports = keys
    .map(
      (key) => 'export const ' + key + ' = globalThis.reminderTestApi.' + key,
    )
    .join('\n');
  const hooks = registerHooks({
    resolve(specifier, context, nextResolve) {
      if (specifier === 'react-native')
        return {
          url: 'data:text/javascript,export const Platform={OS:"android"}',
          shortCircuit: true,
        };
      if (specifier === 'expo-notifications')
        return {
          url: 'data:text/javascript,' + encodeURIComponent(exports),
          shortCircuit: true,
        };
      try {
        return nextResolve(specifier, context);
      } catch (error) {
        if (error.code !== 'ERR_MODULE_NOT_FOUND' || !specifier.startsWith('.'))
          throw error;
        return nextResolve(specifier + '.ts', context);
      }
    },
  });
  try {
    const { requestStudyReminderPermission, syncStudyReminders } = await import(
      '../src/notifications/study-reminders.ts'
    );
    await syncStudyReminders(weekdays);
    assert.equal(prompts, 0);
    assert.equal(notifications.size, 1);
    assert.equal(await requestStudyReminderPermission('uz'), true);
    await syncStudyReminders(weekdays);
    assert.equal(notifications.size, 6);
    assert.equal(prompts, 1);
    const previous = [...notifications.keys()];
    failAtWeekday = 4;
    await assert.rejects(
      syncStudyReminders({ ...weekdays, reminder: '21:00' }),
      /simulated OS error/,
    );
    assert.deepEqual([...notifications.keys()], previous);
    failAtWeekday = undefined;
    await syncStudyReminders({ ...weekdays, rest: [0, 1, 6], language: 'en' });
    const owned = [...notifications.values()].filter(
      (item) => item.identifier !== 'unrelated',
    );
    assert.deepEqual(
      owned.map((item) => item.trigger.weekday),
      [3, 4, 5, 6],
    );
    assert.ok(owned.every((item) => item.content.title === 'Time to study'));
    await syncStudyReminders({ ...weekdays, reminder: null });
    assert.deepEqual([...notifications.keys()], ['unrelated']);
  } finally {
    hooks.deregister();
    delete globalThis.reminderTestApi;
  }
});

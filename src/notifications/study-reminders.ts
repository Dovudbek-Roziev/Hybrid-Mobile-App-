import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';
import {
  reminderScheduleChanges,
  type ReminderSettings,
} from './reminder-plan';

const channelId = 'academy-study-reminders';
export const supportsStudyReminders =
  Platform.OS === 'android' || Platform.OS === 'ios';

async function ensureChannel(language: ReminderSettings['language']) {
  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync(channelId, {
      name: language === 'uz' ? 'O‘qish eslatmalari' : 'Study reminders',
      importance: Notifications.AndroidImportance.DEFAULT,
    });
  }
}

async function canDeliver(
  language: ReminderSettings['language'],
  prompt: boolean,
) {
  if (!supportsStudyReminders) return false;
  await ensureChannel(language);
  let permissions = await Notifications.getPermissionsAsync();
  if (prompt && !permissions.granted && permissions.canAskAgain) {
    permissions = await Notifications.requestPermissionsAsync({
      ios: { allowAlert: true, allowSound: true },
    });
  }
  const channel =
    Platform.OS === 'android'
      ? await Notifications.getNotificationChannelAsync(channelId)
      : null;
  return (
    permissions.granted &&
    channel?.importance !== Notifications.AndroidImportance.NONE
  );
}

export function requestStudyReminderPermission(
  language: ReminderSettings['language'],
) {
  return canDeliver(language, true);
}

async function applySchedule(settings: ReminderSettings) {
  if (!supportsStudyReminders) return;
  const scheduled = await Notifications.getAllScheduledNotificationsAsync();
  const changes = reminderScheduleChanges(
    settings,
    scheduled.map((item) => item.identifier),
  );
  const added: string[] = [];
  try {
    if (changes.add.length && (await canDeliver(settings.language, false))) {
      const uz = settings.language === 'uz';
      for (const { identifier, weekday, hour, minute } of changes.add) {
        added.push(
          await Notifications.scheduleNotificationAsync({
            identifier,
            content: {
              title: uz ? 'O‘qish vaqti' : 'Time to study',
              body: uz
                ? 'Bugungi o‘qish rejangizni oching.'
                : 'Open your study plan for today.',
              data: { academyStudyReminder: true },
            },
            trigger: {
              type: Notifications.SchedulableTriggerInputTypes.WEEKLY,
              channelId,
              weekday,
              hour,
              minute,
            },
          }),
        );
      }
    }
    for (const id of changes.remove)
      await Notifications.cancelScheduledNotificationAsync(id);
  } catch (error) {
    await Promise.allSettled(
      added.map((id) => Notifications.cancelScheduledNotificationAsync(id)),
    );
    throw error;
  }
}

let scheduledUpdate: Promise<void> = Promise.resolve();
export function syncStudyReminders(settings: ReminderSettings) {
  const update = scheduledUpdate.then(() => applySchedule(settings));
  scheduledUpdate = update.catch(() => {});
  return update;
}

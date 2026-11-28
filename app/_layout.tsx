import { useEffect, useRef } from 'react';
import { router, Stack, useRootNavigationState } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as Notifications from 'expo-notifications';
import { ThemeProvider, useTheme } from '../src/theme';
import { supportsStudyReminders } from '../src/notifications/study-reminders';

if (supportsStudyReminders) {
  Notifications.setNotificationHandler({
    async handleNotification(notification) {
      const show =
        notification.request.content.data?.academyStudyReminder === true;
      return {
        shouldShowBanner: show,
        shouldShowList: show,
        shouldPlaySound: show,
        shouldSetBadge: false,
      };
    },
  });
}

function ReminderLink() {
  const response = Notifications.useLastNotificationResponse();
  const navigation = useRootNavigationState();
  const lastHandled = useRef('');
  useEffect(() => {
    if (
      !navigation?.key ||
      response?.actionIdentifier !== Notifications.DEFAULT_ACTION_IDENTIFIER
    )
      return;
    const { date, request } = response.notification;
    if (request.content.data?.academyStudyReminder !== true) return;
    const key = request.identifier + '/' + date;
    if (lastHandled.current === key) return;
    lastHandled.current = key;
    Notifications.clearLastNotificationResponse();
    router.navigate('/daily');
  }, [navigation?.key, response]);
  return null;
}

function Navigation() {
  const { colors, preferences } = useTheme();
  return (
    <>
      <StatusBar style={preferences.theme === 'dark' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          contentStyle: { backgroundColor: colors.bg },
        }}
      />
      {supportsStudyReminders && <ReminderLink />}
    </>
  );
}
export default function RootLayout() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}

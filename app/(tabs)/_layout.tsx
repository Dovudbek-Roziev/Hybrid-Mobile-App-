import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useTheme } from '../../src/theme';

export default function AcademyTabs() {
  const { colors, t } = useTheme();
  return <Tabs screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.muted,
    tabBarStyle: { backgroundColor: colors.surface, borderTopColor: colors.border, paddingTop: 6 },
    tabBarLabelStyle: {fontSize: 11, fontWeight: '600'},
    tabBarHideOnKeyboard: true,
    sceneStyle: { backgroundColor: colors.bg },
  }}>
    <Tabs.Screen name="index" options={{title: t('Home', 'Bosh sahifa'), tabBarIcon: ({size, focused}) => <Ionicons size={size} color={focused ? colors.primary : colors.muted} name={focused ? "home" : "home-outline"}/>}}/>
    <Tabs.Screen name="catalog" options={{title: t('Academy', 'Akademiya'), tabBarIcon: ({size, focused}) => <Ionicons size={size} color={focused ? colors.primary : colors.muted} name={focused ? "library" : "library-outline"}/>}}/>
    <Tabs.Screen name="practice" options={{title: t('Practice', 'Amaliyot'), tabBarIcon: ({size, focused}) => <Ionicons size={size} color={focused ? colors.primary : colors.muted} name="code-slash-outline"/>}}/>
    <Tabs.Screen name="english" options={{title: t('English', 'Ingliz tili'), tabBarIcon: ({size, focused}) => <Ionicons size={size} color={focused ? colors.primary : colors.muted} name="language-outline"/>}}/>
    <Tabs.Screen name="progress" options={{title: t('Progress', 'Natijalar'), tabBarIcon: ({size, focused}) => <Ionicons size={size} color={focused ? colors.primary : colors.muted} name={focused ? "stats-chart" : "stats-chart-outline"}/>}}/>
  </Tabs>;
}

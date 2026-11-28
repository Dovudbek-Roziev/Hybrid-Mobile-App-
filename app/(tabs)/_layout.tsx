import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Text, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '../../src/theme';

export default function AcademyTabs() {
  const { colors, preferences, t } = useTheme();
  const { fontScale } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();
  const maxLabelScale = 1.5;
  const labelLineHeight = 14 * preferences.fontSize;
  const labelHeight = Math.ceil(labelLineHeight * Math.min(fontScale, maxLabelScale));
  const tabContentHeight = 38 + labelHeight * 2;

  return <Tabs screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: colors.primary,
    tabBarInactiveTintColor: colors.muted,
    tabBarStyle: {
      backgroundColor: colors.surface,
      borderTopColor: colors.border,
      height: tabContentHeight + bottom,
    },
    tabBarLabelPosition: 'below-icon',
    tabBarLabel: ({ children, color }) => (
      <Text
        maxFontSizeMultiplier={maxLabelScale}
        numberOfLines={2}
        style={{
          color,
          fontSize: 11 * preferences.fontSize,
          fontWeight: '600',
          includeFontPadding: false,
          lineHeight: labelLineHeight,
          marginTop: 3,
          textAlign: 'center',
        }}
      >
        {children}
      </Text>
    ),
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

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider, useTheme } from '../src/theme';

function Navigation() {
  const {colors, preferences} = useTheme();
  return <><StatusBar style={preferences.theme === 'dark' ? 'light' : 'dark'}/><Stack screenOptions={{
    headerShown: false, animation: 'fade', contentStyle: {backgroundColor: colors.bg},
  }}/></>;
}
export default function RootLayout() {
  return <ThemeProvider><Navigation/></ThemeProvider>;
}

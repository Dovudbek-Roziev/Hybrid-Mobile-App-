import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#60A5FA',
      tabBarInactiveTintColor: '#94A3B8',
      tabBarStyle: { backgroundColor: '#101B2D', borderTopColor: '#24324A', height: 64, paddingBottom: 8 },
    }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="roadmap" options={{ title: 'Learn', tabBarIcon: ({ color, size }) => <Ionicons name="book-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="practice" options={{ title: 'Practice', tabBarIcon: ({ color, size }) => <Ionicons name="code-slash-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="ai" options={{ title: 'AI Tutor', tabBarIcon: ({ color, size }) => <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile', tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="offline" options={{ title: 'Offline', tabBarIcon: ({ color, size }) => <Ionicons name="cloud-offline-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="onboarding" options={{ href: null, tabBarStyle: { display: "none" } }} />
      <Tabs.Screen name="lesson" options={{ href: null }} />
    </Tabs>
  );
}

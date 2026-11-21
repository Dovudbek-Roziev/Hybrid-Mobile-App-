import { Link, router } from 'expo-router';
import { useEffect, useState } from 'react';
import { getProfile, type Profile } from '../lib/profile';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const months = [
  'JavaScript Fundamentals', 'Advanced JavaScript', 'TypeScript',
  'Advanced React', 'Next.js', 'Backend Engineering',
  'Database Engineering', 'Computer Science', 'Data Structures & Algorithms',
  'Engineering Practices', 'DevOps & Cloud', 'Final Capstone',
];

export default function HomeScreen() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    let active = true;
    getProfile().then(value => {
      if (!active) return;
      if (!value) router.replace('/onboarding');
      else setProfile(value);
    }).catch(error => console.warn('Profile loading failed', error))
      .finally(() => { if (active) setReady(true); });
    return () => { active = false; };
  }, []);
  if (!ready || !profile) return <View style={styles.screen} />;
  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>YOUR LEARNING JOURNEY</Text>
        <Text style={styles.title}>Hello, {profile.firstName}!</Text>
        <Text style={styles.subtitle}>{profile.goal.toUpperCase()} · {profile.codingLevel} · English {profile.englishLevel.toUpperCase()}</Text>
        <Text style={styles.sectionTitle}>Software Engineer Roadmap</Text>
        <Text style={styles.subtitle}>12 months · 52 weeks · One step at a time</Text>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>TODAY'S LESSON</Text>
          <Text style={styles.cardTitle}>JavaScript Variables</Text>
          <Text style={styles.cardText}>Learn → Understand → Practice → Build</Text>
          <Link href="/lesson" style={styles.button}>Start Learning  →</Link>
        </View>
        <Text style={styles.sectionTitle}>Your roadmap</Text>
        {months.map((month, index) => (
          <View key={month} style={styles.month}>
            <Text style={styles.monthNumber}>{String(index + 1).padStart(2, '0')}</Text>
            <Text style={styles.monthText}>{month}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0B1220' },
  content: { paddingHorizontal: 22, paddingTop: 65, paddingBottom: 48 },
  eyebrow: { color: '#60A5FA', fontSize: 12, fontWeight: '700', letterSpacing: 2 },
  title: { color: '#F8FAFC', fontSize: 32, fontWeight: '800', marginTop: 12 },
  subtitle: { color: '#94A3B8', fontSize: 14, marginTop: 10 },
  card: { backgroundColor: '#172338', padding: 22, borderRadius: 20, marginTop: 30 },
  cardLabel: { color: '#60A5FA', fontSize: 12, fontWeight: '700' },
  cardTitle: { color: 'white', fontSize: 23, fontWeight: '700', marginTop: 10 },
  cardText: { color: '#CBD5E1', marginTop: 10 },
  button: { color: '#FFFFFF', backgroundColor: '#2563EB', overflow: 'hidden', borderRadius: 12, padding: 14, marginTop: 20, textAlign: 'center', fontWeight: '700' },
  sectionTitle: { color: 'white', fontSize: 20, fontWeight: '700', marginTop: 30, marginBottom: 14 },
  month: { flexDirection: 'row', alignItems: 'center', padding: 15, borderRadius: 12, backgroundColor: '#111C2E', marginBottom: 9 },
  monthNumber: { color: '#60A5FA', fontWeight: '800', width: 42 },
  monthText: { color: '#E2E8F0', fontSize: 15, flex: 1 },
});

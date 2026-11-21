import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const modules = ['JavaScript Fundamentals', 'Advanced JavaScript', 'TypeScript', 'Advanced React', 'Next.js', 'Backend Engineering', 'Database Engineering', 'Computer Science', 'Data Structures & Algorithms', 'Software Engineering Practices', 'DevOps & Cloud', 'Final Capstone Project'];

export default function RoadmapScreen() {
  return <ScrollView style={s.page} contentContainerStyle={s.content}>
    <Text style={s.title}>Learning Roadmap</Text>
    <Text style={s.subtitle}>12 months · 52 weeks · Build real skills</Text>
    {modules.map((name, index) => <View key={name} style={s.card}>
      <Text style={s.number}>MONTH {String(index + 1).padStart(2, '0')}</Text>
      <Text style={s.name}>{name}</Text>
      {index === 0 ? <Link href="/lesson" style={s.link}>Open first lesson →</Link> : <Text style={s.locked}>Coming soon</Text>}
    </View>)}
  </ScrollView>;
}
const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#0B1220' },
  content: { padding: 22, paddingTop: 65, paddingBottom: 50 },
  title: { color: '#F8FAFC', fontSize: 29, fontWeight: '800' },
  subtitle: { color: '#94A3B8', marginTop: 8, marginBottom: 22 },
  card: { backgroundColor: '#172338', padding: 18, borderRadius: 16, marginBottom: 12 },
  number: { color: '#60A5FA', fontSize: 11, fontWeight: '800', letterSpacing: 1 },
  name: { color: '#F8FAFC', fontSize: 18, fontWeight: '700', marginTop: 8 },
  link: { color: '#93C5FD', marginTop: 12, fontWeight: '700' },
  locked: { color: '#64748B', marginTop: 12 },
});

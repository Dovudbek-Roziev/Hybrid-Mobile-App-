import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function LessonScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <StatusBar style="light" />
      <Link href="/" style={styles.back}>← Dashboard</Link>
      <Text style={styles.label}>DAY 1 · JAVASCRIPT FUNDAMENTALS</Text>
      <Text style={styles.title}>Variables</Text>
      <Text style={styles.body}>A variable gives a name to a value. In modern JavaScript, use const by default and let when you need to reassign.</Text>
      <View style={styles.code}>
        <Text style={styles.codeText}>{'const name = "Developer";\nlet age = 15;\nage = 16;\nconsole.log(name, age);'}</Text>
      </View>
      <Text style={styles.heading}>Practice</Text>
      <Text style={styles.body}>Create variables for your name, age, profession, and experience. Change your age and print the results.</Text>
      <Text style={styles.heading}>English · 15 minutes</Text>
      <Text style={styles.body}>I am a developer. · You are a student. · We are learning.</Text>
      <Text style={styles.note}>Coming next: offline progress, quizzes, and AI tutor.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#0B1220' },
  content: { paddingHorizontal: 22, paddingTop: 65, paddingBottom: 48 },
  back: { color: '#60A5FA', marginBottom: 30, fontSize: 16 },
  label: { color: '#60A5FA', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  title: { color: '#F8FAFC', fontSize: 34, fontWeight: '800', marginTop: 12 },
  heading: { color: 'white', fontSize: 21, fontWeight: '700', marginTop: 28 },
  body: { color: '#CBD5E1', fontSize: 16, lineHeight: 26, marginTop: 14 },
  code: { backgroundColor: '#172338', borderRadius: 16, padding: 18, marginTop: 20 },
  codeText: { color: '#93C5FD', fontSize: 14, lineHeight: 24 },
  note: { color: '#94A3B8', marginTop: 32 },
});

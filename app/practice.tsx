import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function PracticeScreen() {
  const [code, setCode] = useState('// Write your JavaScript here\nconst name = "";');
  return <ScrollView style={s.page} contentContainerStyle={s.content}>
    <Text style={s.title}>Coding Practice</Text>
    <Text style={s.subtitle}>Task 1 · Developer Profile</Text>
    <View style={s.card}>
      <Text style={s.heading}>Your challenge</Text>
      <Text style={s.body}>Create variables for your name, age, profession and experience. Change your age and log the values.</Text>
    </View>
    <Text style={s.heading}>Code editor (draft)</Text>
    <TextInput multiline value={code} onChangeText={setCode} autoCapitalize="none" autoCorrect={false} style={s.editor} textAlignVertical="top" />
    <Text style={s.note}>Code execution and persistent saving will be added in a later phase. Do not paste secrets.</Text>
  </ScrollView>;
}
const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#0B1220' }, content: { padding: 22, paddingTop: 65 },
  title: { color: '#F8FAFC', fontSize: 29, fontWeight: '800' }, subtitle: { color: '#94A3B8', marginTop: 8, marginBottom: 22 },
  card: { backgroundColor: '#172338', borderRadius: 16, padding: 20 },
  heading: { color: '#F8FAFC', fontSize: 18, fontWeight: '700', marginBottom: 12 },
  body: { color: '#CBD5E1', lineHeight: 24 },
  editor: { minHeight: 220, backgroundColor: '#101B2D', color: '#93C5FD', padding: 18, borderRadius: 14, fontSize: 15, marginTop: 10, fontFamily: 'monospace' },
  note: { color: '#94A3B8', marginTop: 14, lineHeight: 21 },
});

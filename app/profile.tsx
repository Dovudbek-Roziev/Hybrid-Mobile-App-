import { ScrollView, StyleSheet, Text, View } from 'react-native';

const rows = [['Programming', 'Not assessed'], ['English', 'Not assessed'], ['Computer Science', 'Not assessed'], ['Projects', '0 completed'], ['Weekly exams', 'Not started']];

export default function ProfileScreen() {
  return <ScrollView style={s.page} contentContainerStyle={s.content}>
    <Text style={s.title}>My Progress</Text>
    <Text style={s.subtitle}>Track your growth as a Software Engineer</Text>
    {rows.map(([name, value]) => <View key={name} style={s.row}><Text style={s.label}>{name}</Text><Text style={s.value}>{value}</Text></View>)}
    <Text style={s.note}>Progress storage and account sync are planned. No scores are fabricated.</Text>
  </ScrollView>;
}
const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#0B1220' }, content: { padding: 22, paddingTop: 65 },
  title: { color: '#F8FAFC', fontSize: 29, fontWeight: '800' }, subtitle: { color: '#94A3B8', marginTop: 8, marginBottom: 22 },
  row: { backgroundColor: '#172338', padding: 18, borderRadius: 14, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', gap: 8 },
  label: { color: '#F8FAFC', fontWeight: '700' }, value: { color: '#94A3B8' },
  note: { color: '#94A3B8', marginTop: 20, lineHeight: 22 },
});

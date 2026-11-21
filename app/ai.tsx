import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AiScreen() {
  return <View style={s.page}>
    <Ionicons name="chatbubble-ellipses-outline" size={48} color="#60A5FA" />
    <Text style={s.title}>AI Teacher</Text>
    <Text style={s.body}>Your personal Uzbek-speaking coding tutor is coming in a future phase.</Text>
    <Text style={s.note}>AI requires internet and a secure backend. This screen is a placeholder, not a working chatbot.</Text>
  </View>;
}
const s = StyleSheet.create({
  page: { flex: 1, backgroundColor: '#0B1220', padding: 28, alignItems: 'center', justifyContent: 'center' },
  title: { color: '#F8FAFC', fontSize: 28, fontWeight: '800', marginTop: 18 },
  body: { color: '#CBD5E1', textAlign: 'center', lineHeight: 25, marginTop: 12 },
  note: { color: '#94A3B8', textAlign: 'center', lineHeight: 22, marginTop: 20 },
});

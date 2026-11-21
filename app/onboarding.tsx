import { useState } from 'react';
import { router } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { saveProfile, type Profile } from '../lib/profile';

const codingLevels: { value: Profile['codingLevel']; label: string }[] = [
  { value: 'beginner', label: 'Beginner' }, { value: 'junior', label: 'Junior' },
  { value: 'intermediate', label: 'Intermediate' }, { value: 'advanced', label: 'Advanced' },
];
const englishLevels: Profile['englishLevel'][] = ['a1', 'a2', 'b1', 'b2'];
const goals: { value: Profile['goal']; label: string }[] = [
  { value: 'fullstack', label: 'Fullstack Developer' },
  { value: 'mobile', label: 'Mobile Developer' },
  { value: 'software', label: 'Software Engineer' },
];

export default function Onboarding() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [codingLevel, setCodingLevel] = useState<Profile['codingLevel']>('junior');
  const [englishLevel, setEnglishLevel] = useState<Profile['englishLevel']>('a1');
  const [goal, setGoal] = useState<Profile['goal']>('software');
  const [saving, setSaving] = useState(false);

  async function finish() {
    if (!firstName.trim() || !lastName.trim() || saving) return;
    setSaving(true);
    try {
      await saveProfile({ firstName: firstName.trim(), lastName: lastName.trim(), codingLevel, englishLevel, goal });
      router.replace('/');
    } catch (error) {
      Alert.alert('Save failed', error instanceof Error ? error.message : 'Please try again');
    } finally { setSaving(false); }
  }

  return <ScrollView style={s.page} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
    <Text style={s.eyebrow}>WELCOME TO YOUR ACADEMY</Text>
    <Text style={s.title}>Build your future.</Text>
    <Text style={s.subtitle}>No account. No internet. Just your personal learning journey.</Text>
    <Text style={s.label}>First name</Text>
    <TextInput style={s.input} value={firstName} onChangeText={setFirstName} placeholder="Your first name" placeholderTextColor="#94A3B8" autoCapitalize="words" />
    <Text style={s.label}>Last name</Text>
    <TextInput style={s.input} value={lastName} onChangeText={setLastName} placeholder="Your last name" placeholderTextColor="#94A3B8" autoCapitalize="words" />
    <Text style={s.label}>Programming level</Text>
    <View style={s.choices}>{codingLevels.map(item => <Pressable key={item.value} onPress={() => setCodingLevel(item.value)} style={[s.chip, codingLevel === item.value && s.selected]}><Text style={s.chipText}>{item.label}</Text></Pressable>)}</View>
    <Text style={s.label}>English level</Text>
    <View style={s.choices}>{englishLevels.map(level => <Pressable key={level} onPress={() => setEnglishLevel(level)} style={[s.chip, englishLevel === level && s.selected]}><Text style={s.chipText}>{level.toUpperCase()}</Text></Pressable>)}</View>
    <Text style={s.label}>Your goal</Text>
    <View style={s.choices}>{goals.map(item => <Pressable key={item.value} onPress={() => setGoal(item.value)} style={[s.chip, goal === item.value && s.selected]}><Text style={s.chipText}>{item.label}</Text></Pressable>)}</View>
    <Pressable onPress={finish} disabled={saving || !firstName.trim() || !lastName.trim()} style={[s.button, (saving || !firstName.trim() || !lastName.trim()) && s.disabled]}><Text style={s.buttonText}>{saving ? 'Saving...' : 'Start learning →'}</Text></Pressable>
    <Text style={s.note}>Your information stays on this device in SQLite. You can start from month one at any level.</Text>
  </ScrollView>;
}

const s = StyleSheet.create({
  page:{flex:1,backgroundColor:'#0B1220'},content:{paddingHorizontal:22,paddingTop:65,paddingBottom:60},
  eyebrow:{color:'#60A5FA',fontSize:12,fontWeight:'800',letterSpacing:1.5},
  title:{color:'#F8FAFC',fontSize:32,fontWeight:'800',marginTop:12},
  subtitle:{color:'#94A3B8',fontSize:15,lineHeight:23,marginTop:12,marginBottom:22},
  label:{color:'#F8FAFC',fontWeight:'700',marginTop:22,marginBottom:10},
  input:{backgroundColor:'#172338',color:'#F8FAFC',padding:15,borderRadius:12,fontSize:16},
  choices:{flexDirection:'row',flexWrap:'wrap',gap:9},
  chip:{backgroundColor:'#172338',borderColor:'#30435D',borderWidth:1,borderRadius:12,paddingHorizontal:14,paddingVertical:12},
  selected:{backgroundColor:'#1D4ED8',borderColor:'#60A5FA'},
  chipText:{color:'#F8FAFC',fontWeight:'600'},
  button:{backgroundColor:'#2563EB',borderRadius:14,padding:17,alignItems:'center',marginTop:35},
  disabled:{opacity:0.5},buttonText:{color:'white',fontWeight:'800',fontSize:16},
  note:{color:'#94A3B8',fontSize:13,lineHeight:21,marginTop:20},
});

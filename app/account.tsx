import { useState } from 'react';
import { ActivityIndicator, Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { api, type AuthResponse } from '../lib/api';

export default function Account() {
  const [register, setRegister] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [session, setSession] = useState<AuthResponse | null>(null);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit() {
    if (loading) return;
    setLoading(true);
    try {
      if (register) {
        await api.register(email.trim(), password, name.trim());
        setRegister(false);
        Alert.alert('Success', 'Account created. Sign in now.');
      } else {
        const auth = await api.login(email.trim(), password);
        setSession(auth);
        setPassword('');
        const result = await api.progress(auth.token);
        setDone(result.progress.some(item => item.lessonId === 'js-001'));
      }
    } catch (error) {
      Alert.alert('Error', error instanceof Error ? error.message : 'Request failed');
    } finally { setLoading(false); }
  }

  async function complete() {
    if (!session || loading) return;
    setLoading(true);
    try {
      await api.complete(session.token, 'js-001');
      setDone(true);
      Alert.alert('Saved', 'Progress saved to the backend');
    } catch (error) {
      Alert.alert('Error', error instanceof Error ? error.message : 'Request failed');
    } finally { setLoading(false); }
  }

  return <ScrollView style={s.page} contentContainerStyle={s.content}>
    <Text style={s.title}>Account & Sync</Text>
    <Text style={s.subtitle}>Backend authentication and lesson progress</Text>
    {session ? <View style={s.card}>
      <Text style={s.heading}>Hello, {session.user.displayName}</Text>
      <Text style={s.body}>First lesson: {done ? 'Completed' : 'Not completed'}</Text>
      <Pressable style={s.button} disabled={loading} onPress={complete}><Text style={s.buttonText}>Mark lesson complete</Text></Pressable>
      <Pressable style={s.secondary} onPress={() => { setSession(null); setDone(false); }}><Text style={s.link}>Sign out</Text></Pressable>
    </View> : <View style={s.card}>
      <Text style={s.heading}>{register ? 'Create account' : 'Sign in'}</Text>
      {register && <TextInput style={s.input} placeholder="Name" placeholderTextColor="#94A3B8" value={name} onChangeText={setName} />}
      <TextInput style={s.input} placeholder="Email" placeholderTextColor="#94A3B8" autoCapitalize="none" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={s.input} placeholder="Password" placeholderTextColor="#94A3B8" secureTextEntry value={password} onChangeText={setPassword} />
      <Pressable style={s.button} disabled={loading} onPress={submit}>{loading ? <ActivityIndicator color="white"/> : <Text style={s.buttonText}>{register ? 'Register' : 'Sign in'}</Text>}</Pressable>
      <Pressable style={s.secondary} onPress={() => setRegister(!register)}><Text style={s.link}>{register ? 'Already have an account?' : 'Create an account'}</Text></Pressable>
    </View>}
    <Text style={s.note}>Demo only: the JWT is kept in memory and is cleared on restart. Offline sync and secure persistent sessions are not yet implemented.</Text>
  </ScrollView>;
}
const s = StyleSheet.create({
  page:{flex:1,backgroundColor:'#0B1220'},content:{padding:22,paddingTop:65,paddingBottom:50},
  title:{color:'white',fontSize:29,fontWeight:'800'},subtitle:{color:'#94A3B8',marginTop:8,marginBottom:22},
  card:{backgroundColor:'#172338',padding:20,borderRadius:16},heading:{color:'white',fontSize:22,fontWeight:'700',marginBottom:15},
  body:{color:'#CBD5E1'},input:{backgroundColor:'#0B1220',color:'white',padding:14,borderRadius:10,marginBottom:12},
  button:{backgroundColor:'#2563EB',padding:15,borderRadius:12,alignItems:'center',marginTop:8},
  buttonText:{color:'white',fontWeight:'700'},secondary:{padding:15,alignItems:'center'},link:{color:'#93C5FD'},
  note:{color:'#94A3B8',marginTop:24,lineHeight:22},
});

import { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { completeLessonOffline, listOfflineProgress } from '../lib/offline';

export default function OfflineScreen() {
  const [completed, setCompleted] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const reload = useCallback(async () => {
    setLoading(true);
    try { setCompleted(await listOfflineProgress()); }
    catch (error) { Alert.alert('Offline storage error', error instanceof Error ? error.message : 'Unknown error'); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { void reload(); }, [reload]);

  async function finish() {
    try {
      await completeLessonOffline('js-001');
      await reload();
    } catch (error) { Alert.alert('Save failed', error instanceof Error ? error.message : 'Unknown error'); }
  }

  return <ScrollView style={s.page} contentContainerStyle={s.content}>
    <Text style={s.title}>Offline Learning</Text>
    <Text style={s.subtitle}>Your progress is saved locally on this device.</Text>
    <View style={s.card}>
      <Text style={s.heading}>JavaScript · Variables</Text>
      <Text style={s.body}>Practice const and let, then mark the lesson complete.</Text>
      {loading ? <ActivityIndicator color="#60A5FA" /> : <Text style={s.status}>{completed.includes('js-001') ? '✓ Completed offline' : 'Not completed yet'}</Text>}
      <Pressable onPress={finish} style={s.button} disabled={loading}><Text style={s.buttonText}>Complete offline</Text></Pressable>
    </View>
    <Text style={s.note}>Local SQLite storage works without an internet connection. Automatic server synchronization is not implemented yet. Reinstalling the app may delete local progress.</Text>
  </ScrollView>;
}
const s = StyleSheet.create({
  page:{flex:1,backgroundColor:'#0B1220'},content:{padding:22,paddingTop:65,paddingBottom:50},
  title:{color:'white',fontSize:29,fontWeight:'800'},subtitle:{color:'#94A3B8',marginTop:8,marginBottom:22},
  card:{backgroundColor:'#172338',padding:20,borderRadius:16},heading:{color:'white',fontSize:21,fontWeight:'700'},
  body:{color:'#CBD5E1',marginTop:12,lineHeight:23},status:{color:'#93C5FD',marginTop:20,fontWeight:'700'},
  button:{backgroundColor:'#2563EB',padding:15,borderRadius:12,alignItems:'center',marginTop:20},
  buttonText:{color:'white',fontWeight:'700'},note:{color:'#94A3B8',marginTop:24,lineHeight:22},
});

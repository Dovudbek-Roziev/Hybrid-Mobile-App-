import { useCallback, useState } from 'react';
import { useFocusEffect, router } from 'expo-router';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { loadProfile, completedLessons, type Profile } from '../src/storage';
import { colors } from '../src/theme';
import { lessons, months } from '../src/curriculum';
export default function Home(){
 const [profile,setProfile]=useState<Profile|null>(null);const [done,setDone]=useState<string[]>([]);const [loading,setLoading]=useState(true);const [error,setError]=useState('');
 useFocusEffect(useCallback(()=>{let active=true;(async()=>{try{const p=await loadProfile();if(!active)return;if(!p){router.replace('/onboarding');return;}setProfile(p);setDone(await completedLessons());setError('')}catch(e){if(active)setError(e instanceof Error?e.message:'Unable to load data')}finally{if(active)setLoading(false)}})();return()=>{active=false}},[]));
 if(loading)return <View style={s.center}><ActivityIndicator color={colors.primary}/></View>;
 if(error)return <View style={s.center}><Text style={s.body}>{error}</Text><Pressable onPress={()=>router.replace('/onboarding')}><Text style={s.link}>Open setup</Text></Pressable></View>;
 if(!profile)return null;
 const next=lessons.find(x=>!done.includes(x.id));
 return <ScrollView style={s.page} contentContainerStyle={s.content}>
 <Text style={s.kicker}>PERSONAL ACADEMY</Text><Text style={s.title}>Салом, {profile.firstName} 👋</Text>
 <Text style={s.body}>{profile.goal.toUpperCase()} · {profile.codingLevel} · English {profile.englishLevel.toUpperCase()}</Text>
 <View style={s.card}><Text style={s.cardTitle}>Your progress</Text><Text style={s.metric}>{done.length} / {lessons.length}</Text><Text style={s.body}>Lessons completed on this device</Text></View>
 <Text style={s.section}>Continue learning</Text>
 {next?<Pressable style={s.card} onPress={()=>router.push({pathname:'/lesson',params:{id:next.id}})}><Text style={s.kicker}>MONTH {next.month} · {next.minutes} MIN</Text><Text style={s.cardTitle}>{next.title}</Text><Text style={s.link}>Start lesson →</Text></Pressable>:<View style={s.card}><Text style={s.cardTitle}>All available lessons complete 🎉</Text></View>}
 <Text style={s.section}>12-month roadmap</Text>
 {months.map((m,i)=><View style={s.month} key={m}><Text style={s.monthNumber}>{String(i+1).padStart(2,'0')}</Text><Text style={s.monthText}>{m}</Text></View>)}
 <Text style={s.footer}>Offline-first · No login · Data stored locally</Text>
 </ScrollView>
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:colors.bg},content:{padding:24,paddingTop:65,paddingBottom:50},center:{flex:1,justifyContent:'center',alignItems:'center',padding:24},kicker:{color:colors.primary,fontSize:12,fontWeight:'800',letterSpacing:1.4},title:{color:colors.text,fontSize:30,fontWeight:'800',marginTop:10,marginBottom:8},body:{color:colors.muted,fontSize:14,lineHeight:22},card:{backgroundColor:colors.surface,borderColor:colors.border,borderWidth:1,borderRadius:20,padding:22,marginTop:22},cardTitle:{color:colors.text,fontSize:19,fontWeight:'750',marginTop:8},metric:{color:colors.text,fontSize:35,fontWeight:'800',marginTop:12},section:{color:colors.text,fontSize:20,fontWeight:'800',marginTop:30},link:{color:colors.primary,fontWeight:'800',marginTop:15},month:{flexDirection:'row',alignItems:'center',gap:15,paddingVertical:17,borderBottomWidth:1,borderColor:colors.border},monthNumber:{color:colors.primary,fontWeight:'800'},monthText:{color:colors.text,fontSize:15,flex:1},footer:{color:colors.muted,marginTop:32,textAlign:'center'}})

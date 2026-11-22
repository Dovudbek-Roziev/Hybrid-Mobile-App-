import { useCallback, useState } from 'react';
import { useFocusEffect, router } from 'expo-router';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { loadProfile, completedLessons, type Profile } from '../src/storage';
import { colors } from '../src/theme';
import { lessons, months } from '../src/curriculum';
export default function Home(){
 const [profile,setProfile]=useState<Profile|null>(null);const [done,setDone]=useState<string[]>([]);const [loading,setLoading]=useState(true);const [error,setError]=useState('');const [retry,setRetry]=useState(0);
 useFocusEffect(useCallback(()=>{let active=true;(async()=>{try{const p=await loadProfile();if(!active)return;if(!p){router.replace('/onboarding');return;}setProfile(p);setDone(await completedLessons());setError('')}catch(e){if(active)setError(e instanceof Error?e.message:'Unable to load data')}finally{if(active)setLoading(false)}})();return()=>{active=false}},[retry]));
 if(loading)return <View style={s.center}><ActivityIndicator color={colors.primary}/></View>;
 if(error)return <View style={s.center}><Text style={s.body}>{error}</Text><Pressable onPress={()=>{setLoading(true);setError('');setRetry(v=>v+1)}}><Text style={s.link}>Retry loading</Text></Pressable></View>;
 if(!profile)return null;
 const next=lessons.find(x=>!done.includes(x.id));
 const percent=lessons.length?Math.round(done.filter(id=>lessons.some(l=>l.id===id)).length/lessons.length*100):0;
 return <ScrollView style={s.page} contentContainerStyle={s.content}>
 <Text style={s.kicker}>PERSONAL ACADEMY</Text><Text style={s.title}>Салом, {profile.firstName} 👋</Text>
 <Text style={s.body}>{profile.goal.toUpperCase()} · {profile.codingLevel} · English {profile.englishLevel.toUpperCase()}</Text>
 <View style={s.card}><Text style={s.cardTitle}>Your progress</Text><Text style={s.metric}>{done.length} / {lessons.length}</Text><Text style={s.body}>Available lessons completed · {percent}%</Text><View style={s.track}><View style={[s.fill,{width:`${percent}%`}]}/></View></View>
 <Pressable style={s.card} onPress={()=>router.push('/daily')}><Text style={s.kicker}>YOUR DAILY ROUTINE</Text><Text style={s.cardTitle}>60-minute study plan</Text><Text style={s.body}>25m programming · 15m practice · 15m English · 5m review</Text><Text style={s.link}>Open today's plan →</Text></Pressable>
 <Text style={s.section}>Continue learning</Text>
 {next?<Pressable style={s.card} onPress={()=>router.push({pathname:'/lesson',params:{id:next.id}})}><Text style={s.kicker}>MONTH {next.month} · {next.minutes} MIN</Text><Text style={s.cardTitle}>{next.title}</Text><Text style={s.link}>Start lesson →</Text></Pressable>:<View style={s.card}><Text style={s.cardTitle}>All available lessons complete 🎉</Text></View>}
 <Text style={s.section}>Quick access</Text>
 <View style={s.quickRow}>
 <Pressable accessibilityRole="button" accessibilityLabel="Open English Academy" style={s.quickCard} onPress={()=>router.push('/english')}><Text style={s.quickEmoji}>🌍</Text><Text style={s.quickTitle}>English</Text><Text style={s.quickHint}>A1–B2</Text></Pressable>
 <Pressable accessibilityRole="button" accessibilityLabel="Open weekly quiz" style={s.quickCard} onPress={()=>router.push('/quiz')}><Text style={s.quickEmoji}>🧠</Text><Text style={s.quickTitle}>Quiz</Text><Text style={s.quickHint}>5 questions</Text></Pressable>
 <Pressable accessibilityRole="button" accessibilityLabel="View progress" style={s.quickCard} onPress={()=>router.push('/progress')}><Text style={s.quickEmoji}>📈</Text><Text style={s.quickTitle}>Progress</Text><Text style={s.quickHint}>Your stats</Text></Pressable>
 </View>
 <Text style={s.section}>Your academy</Text>
 <Pressable style={s.card} onPress={()=>router.push('/english')}><Text style={s.kicker}>LANGUAGES</Text><Text style={s.cardTitle}>English Academy</Text><Text style={s.body}>A1–B2 · Vocabulary · Grammar · Offline</Text><Text style={s.link}>Open English →</Text></Pressable>
 <Pressable style={s.card} onPress={()=>router.push('/quiz')}><Text style={s.kicker}>ASSESSMENT</Text><Text style={s.cardTitle}>Weekly Quiz</Text><Text style={s.body}>JavaScript · 5 questions · Save your score</Text><Text style={s.link}>Start quiz →</Text></Pressable>
 <Pressable style={s.card} onPress={()=>router.push('/progress')}><Text style={s.kicker}>YOUR RESULTS</Text><Text style={s.cardTitle}>Progress & Analytics</Text><Text style={s.body}>Lessons · English · Quiz history</Text><Text style={s.link}>View progress →</Text></Pressable>
 <Pressable onPress={()=>router.push('/catalog')} style={s.card}><Text style={s.kicker}>COURSE LIBRARY</Text><Text style={s.cardTitle}>All available lessons</Text><Text style={s.body}>Browse topics, revisit examples and practice at your own pace.</Text><Text style={s.link}>Browse lessons →</Text></Pressable>
 <Text style={s.section}>12-month roadmap</Text>
 {months.map((m,i)=>{const available=lessons.filter(l=>l.month===i+1);const finished=available.filter(l=>done.includes(l.id)).length;return <Pressable accessibilityRole="button" accessibilityLabel={`${m}, ${available.length?finished+' of '+available.length+' available lessons completed':'coming soon'}`} onPress={()=>router.push('/catalog')} style={s.month} key={m}><Text style={s.monthNumber}>{String(i+1).padStart(2,'0')}</Text><View style={{flex:1}}><Text style={s.monthText}>{m}</Text><Text style={s.monthHint}>{available.length?`${finished}/${available.length} available lessons`:'Coming soon'}</Text></View><Text style={s.monthArrow}>›</Text></Pressable>})}
 <Text style={s.footer}>Offline-first · No login · Data stored locally</Text>
 </ScrollView>
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:colors.bg},content:{padding:24,paddingTop:65,paddingBottom:50},center:{flex:1,justifyContent:'center',alignItems:'center',padding:24},kicker:{color:colors.primary,fontSize:12,fontWeight:'800',letterSpacing:1.4},title:{color:colors.text,fontSize:30,fontWeight:'800',marginTop:10,marginBottom:8},body:{color:colors.muted,fontSize:14,lineHeight:22},card:{backgroundColor:colors.surface,borderColor:colors.border,borderWidth:1,borderRadius:20,padding:22,marginTop:22},cardTitle:{color:colors.text,fontSize:19,fontWeight:'750',marginTop:8},metric:{color:colors.text,fontSize:35,fontWeight:'800',marginTop:12},section:{color:colors.text,fontSize:20,fontWeight:'800',marginTop:30},link:{color:colors.primary,fontWeight:'800',marginTop:15},month:{flexDirection:'row',alignItems:'center',gap:15,paddingVertical:17,borderBottomWidth:1,borderColor:colors.border},monthNumber:{color:colors.primary,fontWeight:'800'},monthText:{color:colors.text,fontSize:15,flex:1},footer:{color:colors.muted,marginTop:32,textAlign:'center'},track:{height:8,backgroundColor:colors.border,borderRadius:10,overflow:'hidden',marginTop:17},fill:{height:'100%',backgroundColor:colors.success},quickRow:{flexDirection:'row',gap:10,marginTop:16},quickCard:{flex:1,backgroundColor:colors.surface,borderColor:colors.border,borderWidth:1,borderRadius:17,padding:12,minHeight:112},quickEmoji:{fontSize:23},quickTitle:{color:colors.text,fontSize:14,fontWeight:'800',marginTop:10},quickHint:{color:colors.muted,fontSize:11,marginTop:5},monthHint:{color:colors.muted,fontSize:12,marginTop:5},monthArrow:{color:colors.primary,fontSize:24}})

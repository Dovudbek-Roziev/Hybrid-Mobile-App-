import { useCallback, useState } from 'react';
import { router, useFocusEffect } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { lessons, months } from '../src/curriculum';
import { completedLessons } from '../src/storage';
import { colors } from '../src/theme';
export default function Catalog(){
 const [done,setDone]=useState<string[]>([]);
 useFocusEffect(useCallback(()=>{let active=true;completedLessons().then(ids=>{if(active)setDone(ids)}).catch(e=>Alert.alert('Storage error',String(e)));return()=>{active=false}},[]));
 return <ScrollView style={s.page} contentContainerStyle={s.content}>
 <Pressable onPress={()=>router.back()}><Text style={s.link}>← Dashboard</Text></Pressable>
 <Text style={s.kicker}>LEARNING LIBRARY</Text><Text style={s.title}>Programming lessons</Text>
 <Text style={s.muted}>Explore your lessons. Completed topics stay saved on your device.</Text>
 <View style={s.summary}><Text style={s.summaryNumber}>{done.length} / {lessons.length}</Text><Text style={s.muted}>Available lessons completed</Text></View>
 {months.map((month,i)=>{const list=lessons.filter(x=>x.month===i+1);return <View key={month} style={s.section}>
 <Text style={s.month}>MONTH {String(i+1).padStart(2,'0')}</Text><Text style={s.heading}>{month}</Text>
 {list.length?list.map((lesson,j)=><Pressable key={lesson.id} accessibilityRole="button" onPress={()=>router.push({pathname:'/lesson',params:{id:lesson.id}})} style={s.item}><View style={s.number}><Text style={s.numberText}>{done.includes(lesson.id)?'✓':String(j+1).padStart(2,'0')}</Text></View><View style={s.flex}><Text style={s.itemTitle}>{lesson.title}</Text><Text style={s.muted}>{lesson.minutes} min · {done.includes(lesson.id)?'Completed':'Ready to learn'}</Text></View><Text style={s.arrow}>›</Text></Press>):<Text style={s.pending}>Content planned — not available yet</Text>}
 </View>})}
 </ScrollView>
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:colors.bg},content:{padding:24,paddingTop:62,paddingBottom:60},link:{color:colors.primary,fontWeight:'800'},kicker:{color:colors.primary,fontSize:12,fontWeight:'800',letterSpacing:1,marginTop:26},title:{color:colors.text,fontSize:30,fontWeight:'800',marginTop:10},muted:{color:colors.muted,fontSize:13,lineHeight:20,marginTop:5},summary:{backgroundColor:colors.surface,borderWidth:1,borderColor:colors.border,borderRadius:18,padding:20,marginTop:25},summaryNumber:{color:colors.text,fontSize:28,fontWeight:'800'},section:{marginTop:27},month:{color:colors.primary,fontSize:12,fontWeight:'800',letterSpacing:1},heading:{color:colors.text,fontSize:20,fontWeight:'800',marginTop:7,marginBottom:10},item:{backgroundColor:colors.surface,borderWidth:1,borderColor:colors.border,borderRadius:15,padding:15,marginTop:10,flexDirection:'row',alignItems:'center',gap:12},number:{width:38,height:38,borderRadius:12,backgroundColor:'#263B68',alignItems:'center',justifyContent:'center'},numberText:{color:colors.primary,fontWeight:'800'},flex:{flex:1},itemTitle:{color:colors.text,fontWeight:'750',fontSize:15},arrow:{color:colors.primary,fontSize:24},pending:{color:colors.muted,fontStyle:'italic',marginTop:8}})

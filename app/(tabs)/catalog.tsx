import { useCallback, useMemo, useState } from 'react';
import { router, useFocusEffect } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { lessons, months } from '../../src/curriculum';
import { completedLessons } from '../../src/storage';
import { useTheme, type colors as palette } from '../../src/theme';
export default function Catalog(){
 const {colors} = useTheme(); const s = styles(colors);
 const [done,setDone]=useState<string[]>([]);
 const [search,setSearch]=useState('');
 const [filter,setFilter]=useState<'all'|'todo'|'done'>('all');
 const visible=useMemo(()=>lessons.filter(l=>(!search.trim()||(l.title+' '+months[l.month-1]).toLowerCase().includes(search.trim().toLowerCase()))&&(filter==='all'||(filter==='done'?done.includes(l.id):!done.includes(l.id)))),[search,filter,done]);
 useFocusEffect(useCallback(()=>{let active=true;completedLessons().then(ids=>{if(active)setDone(ids)}).catch(e=>Alert.alert('Storage error',String(e)));return()=>{active=false}},[]));
 return <ScrollView style={s.page} contentContainerStyle={s.content}>
 <Pressable onPress={()=>router.back()}><Text style={s.link}>← Dashboard</Text></Pressable>
 <Text style={s.kicker}>LEARNING LIBRARY</Text><Text style={s.title}>Programming lessons</Text>
 <Text style={s.muted}>Explore your lessons. Completed topics stay saved on your device.</Text>
 <View style={s.summary}><Text style={s.summaryNumber}>{lessons.filter(l=>done.includes(l.id)).length} / {lessons.length}</Text><Text style={s.muted}>Available lessons completed</Text></View>
 <TextInput accessibilityLabel="Search programming lessons" placeholder="Search lessons or months…" placeholderTextColor={colors.muted} value={search} onChangeText={setSearch} autoCapitalize="none" style={s.search}/>
 <View style={s.filters}>{([["all","All"],["todo","To learn"],["done","Completed"]] as const).map(([key,label])=><Pressable key={key} accessibilityRole="button" accessibilityState={{selected:filter===key}} onPress={()=>setFilter(key)} style={[s.filter,filter===key&&s.selected]}><Text style={s.filterText}>{label}</Text></Pressable>)}</View>
 <Text style={s.muted}>{visible.length} matching lessons</Text>
 {months.map((month,i)=>{const list=visible.filter(x=>x.month===i+1);if(!list.length&&(search.trim()||filter!=='all'))return null;return <View key={month} style={s.section}>
 <Text style={s.month}>MONTH {String(i+1).padStart(2,'0')}</Text><Text style={s.heading}>{month}</Text>
 {list.length?list.map((lesson,j)=><Pressable key={lesson.id} accessibilityRole="button" onPress={()=>router.push({pathname:'/lesson',params:{id:lesson.id}})} style={s.item}><View style={s.number}><Text style={s.numberText}>{done.includes(lesson.id)?'✓':String(j+1).padStart(2,'0')}</Text></View><View style={s.flex}><Text style={s.itemTitle}>{lesson.title}</Text><Text style={s.muted}>{lesson.minutes} min · {done.includes(lesson.id)?'Completed':'Ready to learn'}</Text></View><Text style={s.arrow}>›</Text></Pressable>):<Text style={s.pending}>Content planned — not available yet</Text>}
 </View>})}
 {visible.length===0&&<View style={s.empty}><Text style={s.heading}>No matching lessons</Text><Text style={s.muted}>Try another keyword or choose All.</Text></View>}
 </ScrollView>
}
const styles=(colors:typeof palette)=>StyleSheet.create({page:{flex:1,backgroundColor:colors.bg},content:{padding:24,paddingTop:62,paddingBottom:60},link:{color:colors.primary,fontWeight:'800'},kicker:{color:colors.primary,fontSize:12,fontWeight:'800',letterSpacing:1,marginTop:26},title:{color:colors.text,fontSize:30,fontWeight:'800',marginTop:10},muted:{color:colors.muted,fontSize:13,lineHeight:20,marginTop:5},summary:{backgroundColor:colors.surface,borderWidth:1,borderColor:colors.border,borderRadius:18,padding:20,marginTop:25},summaryNumber:{color:colors.text,fontSize:28,fontWeight:'800'},section:{marginTop:27},month:{color:colors.primary,fontSize:12,fontWeight:'800',letterSpacing:1},heading:{color:colors.text,fontSize:20,fontWeight:'800',marginTop:7,marginBottom:10},item:{backgroundColor:colors.surface,borderWidth:1,borderColor:colors.border,borderRadius:15,padding:15,marginTop:10,flexDirection:'row',alignItems:'center',gap:12},number:{width:38,height:38,borderRadius:12,backgroundColor:colors.selected,alignItems:'center',justifyContent:'center'},numberText:{color:colors.primary,fontWeight:'800'},flex:{flex:1},itemTitle:{color:colors.text,fontWeight:'700',fontSize:15},arrow:{color:colors.primary,fontSize:24},pending:{color:colors.muted,fontStyle:'italic',marginTop:8},search:{backgroundColor:colors.surface,color:colors.text,borderColor:colors.border,borderWidth:1,borderRadius:14,paddingHorizontal:16,paddingVertical:14,fontSize:15,marginTop:20},filters:{flexDirection:'row',gap:8,marginTop:14},filter:{paddingVertical:11,paddingHorizontal:14,borderRadius:12,borderColor:colors.border,borderWidth:1,backgroundColor:colors.surface},selected:{borderColor:colors.primary,backgroundColor:colors.selected},filterText:{color:colors.text,fontWeight:'700',fontSize:12},empty:{padding:22,marginTop:20,backgroundColor:colors.surface,borderRadius:16}})

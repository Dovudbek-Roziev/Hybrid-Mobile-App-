import { useState } from 'react';
import { router } from 'expo-router';
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { saveProfile, type Profile } from '../src/storage';
import { colors } from '../src/theme';
type Choice<T extends string>={value:T;label:string};
function Choices<T extends string>({items,value,onChange}:{items:Choice<T>[];value:T;onChange:(v:T)=>void}){return <View style={s.options}>{items.map(x=><Pressable key={x.value} onPress={()=>onChange(x.value)} style={[s.chip,value===x.value&&s.active]}><Text style={s.chipText}>{x.label}</Text></Pressable>)}</View>}
export default function Onboarding(){
 const [firstName,setFirstName]=useState('');const [lastName,setLastName]=useState('');
 const [codingLevel,setCodingLevel]=useState<Profile['codingLevel']>('junior');const [englishLevel,setEnglishLevel]=useState<Profile['englishLevel']>('a1');const [goal,setGoal]=useState<Profile['goal']>('software');const [busy,setBusy]=useState(false);
 async function submit(){if(!firstName.trim()||!lastName.trim()||busy)return;setBusy(true);try{await saveProfile({firstName:firstName.trim(),lastName:lastName.trim(),codingLevel,englishLevel,goal});router.replace('/')}catch(e){Alert.alert('Could not save',e instanceof Error?e.message:'Try again')}finally{setBusy(false)}}
 return <ScrollView style={s.page} contentContainerStyle={s.content} keyboardShouldPersistTaps="handled">
 <Text style={s.kicker}>WELCOME · STEP 1 OF 1</Text><Text style={s.title}>Your journey starts here.</Text><Text style={s.body}>Set up your personal academy. No account, no password, no internet required.</Text>
 <Text style={s.label}>First name</Text><TextInput style={s.input} placeholder="First name" placeholderTextColor={colors.muted} value={firstName} onChangeText={setFirstName}/>
 <Text style={s.label}>Last name</Text><TextInput style={s.input} placeholder="Last name" placeholderTextColor={colors.muted} value={lastName} onChangeText={setLastName}/>
 <Text style={s.label}>Programming level</Text><Choices items={[{value:'beginner',label:'Beginner'},{value:'junior',label:'Junior'},{value:'intermediate',label:'Intermediate'},{value:'advanced',label:'Advanced'}]} value={codingLevel} onChange={setCodingLevel}/>
 <Text style={s.label}>English level</Text><Choices items={[{value:'a1',label:'A1'},{value:'a2',label:'A2'},{value:'b1',label:'B1'},{value:'b2',label:'B2'}]} value={englishLevel} onChange={setEnglishLevel}/>
 <Text style={s.label}>Main goal</Text><Choices items={[{value:'software',label:'Software Engineer'},{value:'fullstack',label:'Fullstack'},{value:'mobile',label:'Mobile Developer'}]} value={goal} onChange={setGoal}/>
 <Pressable style={[s.button,(!firstName.trim()||!lastName.trim()||busy)&&{opacity:0.5}]} disabled={!firstName.trim()||!lastName.trim()||busy} onPress={submit}><Text style={s.buttonText}>{busy?'Saving...':'Start my academy →'}</Text></Pressable>
 <Text style={s.note}>Your profile is stored only on your device.</Text>
 </ScrollView>
}
const s=StyleSheet.create({page:{flex:1,backgroundColor:colors.bg},content:{padding:24,paddingTop:65,paddingBottom:60},kicker:{color:colors.primary,fontSize:12,fontWeight:'800',letterSpacing:1.3},title:{color:colors.text,fontSize:32,fontWeight:'800',marginTop:14},body:{color:colors.muted,lineHeight:23,marginTop:12},label:{color:colors.text,fontWeight:'750',marginTop:24,marginBottom:10},input:{backgroundColor:colors.surface,borderColor:colors.border,borderWidth:1,color:colors.text,padding:15,borderRadius:12,fontSize:16},options:{flexDirection:'row',flexWrap:'wrap',gap:9},chip:{backgroundColor:colors.surface,borderWidth:1,borderColor:colors.border,borderRadius:12,padding:12},active:{backgroundColor:'#294A9C',borderColor:colors.primary},chipText:{color:colors.text,fontWeight:'650'},button:{backgroundColor:colors.primary,padding:17,borderRadius:14,alignItems:'center',marginTop:32},buttonText:{color:'#081022',fontWeight:'800',fontSize:16},note:{color:colors.muted,textAlign:'center',marginTop:18}})

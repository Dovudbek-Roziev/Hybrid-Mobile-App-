import { vocabulary } from './vocabulary';
export type EnglishExercise={id:string;level:'a1'|'a2'|'b1'|'b2';topic:string;word:string;translation:string;example:string;question:string;options:readonly string[];answer:number};
const originalExercises:EnglishExercise[]=[
{id:'en-a1-01',level:'a1',topic:'Introductions',word:'Hello',translation:'Салом',example:'Hello, I am a developer.',question:'How do you say “Салом” in English?',options:['Goodbye','Hello','Thanks'],answer:1},
{id:'en-a1-02',level:'a1',topic:'Daily words',word:'Learn',translation:'Ўрганмоқ',example:'I learn JavaScript every day.',question:'What does “learn” mean?',options:['Ўрганмоқ','Югурмоқ','Ухламоқ'],answer:0},
{id:'en-a1-03',level:'a1',topic:'Grammar',word:'I am',translation:'Мен ...ман',example:'I am a student.',question:'Choose the correct sentence.',options:['I is a student','I am a student','I are student'],answer:1},
{id:'en-a2-01',level:'a2',topic:'Past simple',word:'Built',translation:'Қурди / яратди',example:'I built an app yesterday.',question:'Which is the past form of “build”?',options:['Builded','Building','Built'],answer:2},
{id:'en-a2-02',level:'a2',topic:'Technical English',word:'Bug',translation:'Дастурдаги хато',example:'I fixed a bug in my code.',question:'A “bug” in software is...',options:['A feature','An error','A database'],answer:1},
{id:'en-b1-01',level:'b1',topic:'Conditionals',word:'Unless',translation:'...маса / агар ... бўлмаса',example:'The app works unless the battery is empty.',question:'Which word means “if not”?',options:['Unless','Although','Because'],answer:0},
{id:'en-b1-02',level:'b1',topic:'Development',word:'Deploy',translation:'Ишга тушириш',example:'We deploy the website on Friday.',question:'To deploy an app means to...',options:['Delete it','Release it','Translate it'],answer:1},
{id:'en-b2-01',level:'b2',topic:'Architecture',word:'Scalability',translation:'Кенгайиш имконияти',example:'Scalability matters as traffic grows.',question:'Scalability is the ability to...',options:['Handle growth','Remove tests','Avoid updates'],answer:0},
{id:'en-b2-02',level:'b2',topic:'Engineering',word:'Trade-off',translation:'Муроса / танловдаги йўқотиш',example:'There is a trade-off between speed and accuracy.',question:'A trade-off is...',options:['A syntax error','A compromise','A backup'],answer:1},
];

const generated: EnglishExercise[] = vocabulary.slice(0,191).map((w,index) => {
 const alternatives = vocabulary.filter(v => v.level === w.level && v.id !== w.id && v.translation !== w.translation);
 const first = alternatives[index % alternatives.length];
 const distinct = alternatives.filter(v => v.id !== first.id && v.translation !== first.translation);
 const second = distinct[(index * 17 + 11) % distinct.length];
 const answer = [...w.id].reduce((hash,ch)=>(Math.imul(hash,31)+ch.charCodeAt(0))>>>0,2166136261) % 3;
 const options = [first.word, second.word];
 options.splice(answer,0,w.word);
 return {id:'exercise-'+w.id,level:w.level,topic:'Vocabulary',word:'',translation:'',example:'',question:'Choose the English word for: '+w.translation,options,answer};
});
export const exercises: EnglishExercise[] = [...originalExercises,...generated];

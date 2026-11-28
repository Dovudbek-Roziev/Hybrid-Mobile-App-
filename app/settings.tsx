import { router } from 'expo-router';
import { useState } from 'react';
import { Linking, View } from 'react-native';
import { Button, Card, Field, Label, LoadState, Screen } from '../src/components/ui';
import { taskNames } from '../src/features/tasks';
import { useLocalData } from '../src/hooks/useLocalData';
import { loadProfile, saveProfile, type DailyTask, type Profile } from '../src/database/storage';
import { useTheme } from '../src/theme';
import { isPassScore } from '../src/exams/options';
import { isReminderTime, studyReminderPlan } from '../src/notifications/reminder-plan';
import { requestStudyReminderPermission, supportsStudyReminders, syncStudyReminders } from '../src/notifications/study-reminders';

function PreferenceFields({profile}: {profile: Profile}) {
  const {preferences, update, t} = useTheme();
  const [first, setFirst] = useState(profile.firstName);
  const [last, setLast] = useState(profile.lastName);
  const [minutes, setMinutes] = useState(() => Object.fromEntries(taskNames.map(({id}) => [id, String(preferences.minutes[id])])) as Record<DailyTask, string>);
  const [rest, setRest] = useState(preferences.rest);
  const [draftPass, setDraftPass] = useState<string | null>(null);
  const [passMessage, setPassMessage] = useState('');
  const [draftReminder, setDraftReminder] = useState<string | null>(null);
  const [reminderMessage, setReminderMessage] = useState('');
  const [reminderBlocked, setReminderBlocked] = useState(false);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const valid = first.trim() && last.trim() && taskNames.every(({id}) => /^\d+$/.test(minutes[id]) && Number(minutes[id]) >= 1 && Number(minutes[id]) <= 180);
  const passInput = draftPass ?? String(preferences.pass);
  const candidatePass = Number(passInput);
  const validPass = /^\d{1,3}$/.test(passInput) && isPassScore(candidatePass);
  const reminderInput = draftReminder ?? preferences.reminder ?? '19:00';
  const validReminder = isReminderTime(reminderInput);
  const reminderDays = studyReminderPlan({...preferences, reminder: reminderInput}).length;
  async function save() {
    if (!valid || busy) return;
    setBusy(true);
    setMessage('');
    try {
      await saveProfile({...profile, firstName: first.trim(), lastName: last.trim()});
      const values = Object.fromEntries(taskNames.map(({id}) => [id, Number(minutes[id])])) as Record<DailyTask, number>;
      await update({...preferences, minutes: values, rest});
      setMessage(t('Saved', 'Saqlandi'));
    } catch {
      setMessage(t('Could not save settings.', 'Sozlamalarni saqlab bo‘lmadi.'));
    } finally {
      setBusy(false);
    }
  }
  async function display(patch: Partial<typeof preferences>) {
    if (busy) return;
    setBusy(true);
    setMessage('');
    try { await update({...preferences, ...patch}); }
    catch { setMessage(t('Could not save settings.', 'Sozlamalarni saqlab bo‘lmadi.')); }
    finally { setBusy(false); }
  }
  async function savePassScore() {
    if (!validPass || busy) return;
    setBusy(true);
    setPassMessage('');
    try {
      await update({...preferences, pass: candidatePass});
      setDraftPass(null);
      setPassMessage(t('Pass score saved.', 'O‘tish bali saqlandi.'));
    } catch {
      setPassMessage(t('Could not save the pass score.', 'O‘tish balini saqlab bo‘lmadi.'));
    } finally {
      setBusy(false);
    }
  }
  async function saveReminder(time: string | null) {
    if (busy || (time !== null && (!isReminderTime(time) || !reminderDays))) return;
    setBusy(true);
    setReminderMessage('');
    setReminderBlocked(false);
    try {
      if (time !== null && !(await requestStudyReminderPermission(preferences.language))) {
        setReminderBlocked(true);
        setReminderMessage(t('Allow notifications in your device settings.', 'Qurilma sozlamalarida bildirishnomalarga ruxsat bering.'));
        return;
      }
      const next = {...preferences, reminder: time};
      if (time === preferences.reminder) await syncStudyReminders(next);
      else await update(next);
      setDraftReminder(null);
      setReminderMessage(time === null ? t('Reminder turned off.', 'Eslatma o‘chirildi.') : t('Reminder saved.', 'Eslatma saqlandi.'));
    } catch {
      setReminderMessage(t('Could not update the reminder.', 'Eslatmani yangilab bo‘lmadi.'));
    } finally {
      setBusy(false);
    }
  }
  const weekdays = t('Mon Tue Wed Thu Fri Sat Sun', 'Du Se Chor Pay Ju Shan Yak').split(' ');
  return <>
    <Card>
      <Label kind="heading">{t('Profile', 'Profil')}</Label>
      <Label>{t('First name', 'Ism')}</Label>
      <Field accessibilityLabel={t('First name', 'Ism')} value={first} onChangeText={setFirst} maxLength={60}/>
      <Label>{t('Last name', 'Familiya')}</Label>
      <Field accessibilityLabel={t('Last name', 'Familiya')} value={last} onChangeText={setLast} maxLength={60}/>
    </Card>
    <Card>
      <Label kind="heading">{t('Appearance', 'Ko‘rinish')}</Label>
      <View style={{flexDirection:'row', flexWrap:'wrap', gap:8}}>
        <Button disabled={busy} chosen={preferences.theme === 'dark'} onPress={() => display({theme: 'dark'})}>{t('Dark', 'Tungi')}</Button>
        <Button disabled={busy} chosen={preferences.theme === 'light'} onPress={() => display({theme: 'light'})}>{t('Light', 'Yorug‘')}</Button>
      </View>
      <Label>{t('Language', 'Til')}</Label>
      <View style={{flexDirection:'row', flexWrap:'wrap', gap:8}}>
        <Button disabled={busy} chosen={preferences.language === 'uz'} onPress={() => display({language: 'uz'})}>O‘zbekcha</Button>
        <Button disabled={busy} chosen={preferences.language === 'en'} onPress={() => display({language: 'en'})}>English</Button>
      </View>
      <Label>{t('Text size', 'Matn o‘lchami')}</Label>
      <View style={{flexDirection:'row', flexWrap:'wrap', gap:8}}>
        {[1, 1.15, 1.3].map(fontSize => <Button key={fontSize} disabled={busy} chosen={preferences.fontSize === fontSize} onPress={() => display({fontSize})}>{Math.round(fontSize * 100)}%</Button>)}
      </View>
    </Card>
    <Card>
      <Label kind="heading">{t('Daily study goal', 'Kunlik o‘qish maqsadi')}</Label>
      {taskNames.map(({id, en, uz}) => <View key={id} style={{gap:6}}>
        <Label>{t(en, uz)} · {t('minutes', 'daqiqa')}</Label>
        <Field accessibilityLabel={t(en, uz)} inputMode="numeric" maxLength={3} value={minutes[id]} onChangeText={value => setMinutes(old => ({...old, [id]: value}))}/>
      </View>)}
      <Label>{t('Rest days', 'Dam olish kunlari')}</Label>
      <View style={{flexDirection:'row', flexWrap:'wrap', gap:8}}>
        {weekdays.map((name, index) => {
          const day = (index + 1) % 7;
          return <Button key={day} chosen={rest.includes(day)} onPress={() => setRest(old => old.includes(day) ? old.filter(value => value !== day) : [...old, day])}>{name}</Button>;
        })}
      </View>
      <Button chosen disabled={busy || !valid} onPress={save}>{t('Save profile and plan', 'Profil va rejani saqlash')}</Button>
      {message && <Label>{message}</Label>}
    </Card>
    {supportsStudyReminders && <Card>
      <Label kind="heading">{t('Study reminders', 'O‘qish eslatmalari')}</Label>
      {preferences.reminder !== null && <Label>{t('Saved time', 'Saqlangan vaqt')} · {preferences.reminder}</Label>}
      <Label>{t('Device time in 24-hour format. Rest days are skipped.', 'Qurilma vaqti, 24 soatlik format. Dam olish kunlarida eslatma kelmaydi.')}</Label>
      <Field
        accessibilityLabel={t('Reminder time', 'Eslatma vaqti')}
        placeholder="19:00"
        value={reminderInput}
        maxLength={5}
        editable={!busy}
        onChangeText={value => { setDraftReminder(value); setReminderMessage(''); }}
      />
      {!validReminder && <Label>{t('Enter a time like 19:00.', 'Vaqtni 19:00 shaklida kiriting.')}</Label>}
      {validReminder && reminderDays === 0 && <Label>{t('Choose at least one study day in the daily plan.', 'Kunlik rejada kamida bitta o‘qish kunini belgilang.')}</Label>}
      <Button disabled={busy || !validReminder || reminderDays === 0} onPress={() => void saveReminder(reminderInput)}>
        {t('Save reminder', 'Eslatmani saqlash')}
      </Button>
      {preferences.reminder !== null && <Button disabled={busy} onPress={() => void saveReminder(null)}>
        {t('Turn off reminder', 'Eslatmani o‘chirish')}
      </Button>}
      {reminderMessage && <Label>{reminderMessage}</Label>}
      {reminderBlocked && <Button onPress={() => void Linking.openSettings().catch(() => {})}>
        {t('Open device settings', 'Qurilma sozlamalarini ochish')}
      </Button>}
    </Card>}
    <Card>
      <Label kind="heading">{t('Exams', 'Imtihonlar')}</Label>
      <Label>{t('Pass score for new exams (1–100)', 'Yangi imtihonlar uchun o‘tish bali (1–100)')}</Label>
      <Field
        accessibilityLabel={t('Exam pass score', 'Imtihon o‘tish bali')}
        inputMode="numeric"
        maxLength={3}
        editable={!busy}
        value={passInput}
        onChangeText={value => {
          setDraftPass(value);
          setPassMessage('');
        }}
      />
      {!validPass && <Label>{t('Enter a whole number from 1 to 100.', '1 dan 100 gacha butun son kiriting.')}</Label>}
      <Button disabled={busy || !validPass || candidatePass === preferences.pass} onPress={savePassScore}>
        {t('Save pass score', 'O‘tish balini saqlash')}
      </Button>
      {passMessage && <Label>{passMessage}</Label>}
    </Card>
    <Card><Label kind="heading">{t('About', 'Ilova haqida')}</Label><Label>Personal Engineering Academy · 0.1.0</Label><Label>{t('Your learning data stays on this device.', 'O‘quv ma’lumotlaringiz shu qurilmada saqlanadi.')}</Label></Card>
  </>;
}

export default function Settings() {
  const state = useLocalData(loadProfile);
  const {t} = useTheme();
  return <Screen title={t('Settings', 'Sozlamalar')} back>
    <LoadState {...state}/>
    <Button onPress={()=>router.push('/backup')}>{t('Backup & Restore','Zaxira va tiklash')}</Button>
    {state.data && <PreferenceFields profile={state.data}/>}
    {state.data === null && <Label>{t('Set up your profile first.', 'Avval profilingizni yarating.')}</Label>}
  </Screen>;
}

import { useState } from 'react';
import { View } from 'react-native';
import { Button, Card, Field, Label, LoadState, Screen } from '../src/components/ui';
import { taskNames } from '../src/features/tasks';
import { useLocalData } from '../src/hooks/useLocalData';
import { loadProfile, saveProfile, type DailyTask, type Profile } from '../src/storage';
import { useTheme } from '../src/theme';

function PreferenceFields({profile}: {profile: Profile}) {
  const {preferences, update, t} = useTheme();
  const [first, setFirst] = useState(profile.firstName);
  const [last, setLast] = useState(profile.lastName);
  const [minutes, setMinutes] = useState(() => Object.fromEntries(taskNames.map(({id}) => [id, String(preferences.minutes[id])])) as Record<DailyTask, string>);
  const [rest, setRest] = useState(preferences.rest);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const valid = first.trim() && last.trim() && taskNames.every(({id}) => /^\d+$/.test(minutes[id]) && Number(minutes[id]) >= 1 && Number(minutes[id]) <= 180);
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
    <Card><Label kind="heading">{t('About', 'Ilova haqida')}</Label><Label>Personal Engineering Academy · 0.1.0</Label><Label>{t('Your learning data stays on this device.', 'O‘quv ma’lumotlaringiz shu qurilmada saqlanadi.')}</Label></Card>
  </>;
}

export default function Settings() {
  const state = useLocalData(loadProfile);
  const {t} = useTheme();
  return <Screen title={t('Settings', 'Sozlamalar')} back>
    <LoadState {...state}/>
    {state.data && <PreferenceFields profile={state.data}/>}
    {state.data === null && <Label>{t('Set up your profile first.', 'Avval profilingizni yarating.')}</Label>}
  </Screen>;
}

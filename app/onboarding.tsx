import { useState } from 'react';
import { router } from 'expo-router';
import { View } from 'react-native';
import { Button, Field, Label, Screen } from '../src/components/ui';
import { saveProfile, type Profile } from '../src/database/storage';
import { useTheme } from '../src/theme';

const codingLevels = [['beginner', 'Beginner', 'Boshlang‘ich'], ['junior', 'Junior', 'Junior'], ['intermediate', 'Intermediate', 'O‘rta'], ['advanced', 'Advanced', 'Yuqori']] as const;
const goals = [['software', 'Software Engineer'], ['fullstack', 'Fullstack Developer'], ['mobile', 'Mobile Developer']] as const;
const englishLevels = ['a1', 'a2', 'b1', 'b2'] as const;

export default function Onboarding() {
  const {preferences, t, update} = useTheme();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [codingLevel, setCodingLevel] = useState<Profile['codingLevel']>('junior');
  const [englishLevel, setEnglishLevel] = useState<Profile['englishLevel']>('a1');
  const [goal, setGoal] = useState<Profile['goal']>('software');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(false);
  const valid = firstName.trim() && lastName.trim();
  async function changeLanguage(language: 'en' | 'uz') {
    setBusy(true);
    setError(false);
    try { await update({...preferences, language}); }
    catch { setError(true); }
    finally { setBusy(false); }
  }
  async function submit() {
    if (!valid || busy) return;
    setBusy(true);
    setError(false);
    try {
      await saveProfile({firstName: firstName.trim(), lastName: lastName.trim(), codingLevel, englishLevel, goal});
      router.replace('/');
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  }
  return <Screen title="Personal Engineering Academy">
    <Label>{t('Set up your offline learning profile.', 'Oflayn o‘qish profilingizni sozlang.')}</Label>
    <View style={{flexDirection: 'row', gap: 8}}>
      {(['uz', 'en'] as const).map(language => <Button key={language} disabled={busy} chosen={preferences.language === language} onPress={() => changeLanguage(language)}>
        {language === 'uz' ? 'O‘zbekcha' : 'English'}
      </Button>)}
    </View>
    <Field accessibilityLabel={t('First name', 'Ism')} placeholder={t('First name', 'Ism')} value={firstName} onChangeText={setFirstName} maxLength={60} autoComplete="given-name"/>
    <Field accessibilityLabel={t('Last name', 'Familiya')} placeholder={t('Last name', 'Familiya')} value={lastName} onChangeText={setLastName} maxLength={60} autoComplete="family-name"/>
    <Label kind="heading">{t('Programming level', 'Dasturlash darajasi')}</Label>
    <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 8}}>
      {codingLevels.map(([key, en, uz]) => <Button key={key} chosen={codingLevel === key} onPress={() => setCodingLevel(key)}>{t(en, uz)}</Button>)}
    </View>
    <Label kind="heading">{t('English level', 'Ingliz tili darajasi')}</Label>
    <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 8}}>
      {englishLevels.map(level => <Button key={level} chosen={englishLevel === level} onPress={() => setEnglishLevel(level)}>{level.toUpperCase()}</Button>)}
    </View>
    <Label kind="heading">{t('Study goal', 'O‘quv maqsadi')}</Label>
    <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 8}}>
      {goals.map(([key, label]) => <Button key={key} chosen={goal === key} onPress={() => setGoal(key)}>{label}</Button>)}
    </View>
    {error && <Label>{t('Could not save. Try again.', 'Saqlab bo‘lmadi. Qayta urinib ko‘ring.')}</Label>}
    <Button chosen disabled={!valid || busy} onPress={submit}>{busy ? t('Saving…', 'Saqlanmoqda…') : t('Start learning', 'O‘qishni boshlash')}</Button>
  </Screen>;
}

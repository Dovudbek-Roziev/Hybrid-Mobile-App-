import type { ReactNode } from 'react';
import { router } from 'expo-router';
import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View, type TextInputProps } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../theme';

export function Label({ children, kind = 'body' }: {children: ReactNode; kind?: 'title' | 'heading' | 'body' | 'accent' }) {
  const { colors, preferences } = useTheme();
  const size = { title: 29, heading: 18, body: 15, accent: 13 }[kind] * preferences.fontSize;
  return <Text accessibilityRole={kind === 'title' || kind === 'heading' ? 'header' : undefined} style={{
    color: kind === 'body' ? colors.muted : kind === 'accent' ? colors.accent : colors.text,
    fontSize: size, lineHeight: size * 1.45, fontWeight: kind === 'body' ? '400' : '700',
  }}>{children}</Text>;
}

export function Card({ children }: {children: ReactNode}) {
  const {colors} = useTheme();
  return <View style={{ backgroundColor: colors.surface, borderColor: colors.border, borderWidth: 1, padding: 18, borderRadius: 20, gap: 12 }}>{children}</View>;
}

export function Button({ children, onPress, disabled, chosen }: {children: ReactNode; onPress: () => void; disabled?: boolean; chosen?: boolean}) {
  const { colors, preferences } = useTheme();
  return <Pressable accessibilityRole="button" accessibilityState={{disabled, selected: chosen}} disabled={disabled} onPress={onPress}
    style={({pressed}) => ({ backgroundColor: chosen ? colors.selected : colors.surface, borderColor: chosen ? colors.primary : colors.border,
      borderWidth: 1, borderRadius: 12, padding: 14, minHeight: 48, justifyContent: 'center', opacity: disabled ? 0.45 : pressed ? 0.75 : 1 })}>
    <Text style={{ color: colors.primary, fontWeight:'700', fontSize: 14 * preferences.fontSize }}>{children}</Text>
  </Pressable>;
}

export function Field(props: TextInputProps) {
  const {colors, preferences} = useTheme();
  return <TextInput placeholderTextColor={colors.muted} {...props} style={[{
    minHeight: 46, padding: 12, borderRadius: 12, borderColor: colors.border, borderWidth: 1,
    backgroundColor: colors.surface, color: colors.text, fontSize: 15 * preferences.fontSize,
  }, props.style]}/>;
}

export function Screen({title, children, back}: {title: string; children: ReactNode; back?: boolean}) {
  const {colors, t} = useTheme();
  return <SafeAreaView edges={back ? ['top', 'bottom', 'left', 'right'] : ['top','left','right']} style={{flex: 1, backgroundColor: colors.bg}}>
    <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{padding: 20, paddingBottom: 32, gap: 16, width: '100%', maxWidth: 760, alignSelf: 'center'}}>
      {back && <Button onPress={() => router.canGoBack() ? router.back() : router.replace('/')}>{t('‹ Back', '‹ Orqaga')}</Button>}
      <Label kind="title">{title}</Label>{children}
    </ScrollView>
  </SafeAreaView>;
}

export function Meter({value, total}: {value: number; total: number}) {
  const {colors} = useTheme();
  const percent = Number.isFinite(value) && Number.isFinite(total) && total > 0 ? Math.min(100, Math.max(0, Math.round(value * 100 / total))) : 0;
  return <View accessibilityRole="progressbar" accessibilityValue={{ min: 0, max: 100, now: percent }} style={{height: 9, backgroundColor: colors.border, borderRadius: 9, overflow: 'hidden'}}>
    <View style={{width: `${percent}%`, height:'100%', backgroundColor: colors.success}}/>
  </View>;
}

export function LoadState({loading, error, retry}: {loading: boolean; error: string | null; retry: () => void}) {
  const { t, colors } = useTheme();
  return loading ? <ActivityIndicator color={colors.primary} accessibilityLabel={t('Loading', 'Yuklanmoqda')}/> :
    error ? <Card><Label kind="heading">{t('Could not load data','Ma’lumotlarni yuklab bo‘lmadi')}</Label><Label>{error}</Label><Button onPress={retry}>{t('Retry', 'Qayta urinish')}</Button></Card> : null;
}

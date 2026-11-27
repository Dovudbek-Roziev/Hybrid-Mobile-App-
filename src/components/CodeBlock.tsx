import { useState } from 'react';
import * as Clipboard from 'expo-clipboard';
import { ScrollView, Text, View } from 'react-native';
import { Button, Label } from './ui';
import { useTheme } from '../theme';

export function CodeBlock({code}: {code: string}) {
  const {colors, preferences, t} = useTheme();
  const [message, setMessage] = useState('');
  async function copy() {
    try {
      if (!await Clipboard.setStringAsync(code)) throw Error('Clipboard write failed.');
      setMessage(t('Copied', 'Nusxalandi'));
    } catch { setMessage(t('Could not copy code.', 'Kodni nusxalab bo‘lmadi.')); }
  }
  return <View style={{backgroundColor: colors.code, borderColor: colors.border, borderWidth: 1, borderRadius: 14, padding: 12, gap: 10}}>
    <Button onPress={copy}>{t('Copy code', 'Kodni nusxalash')}</Button>
    {message && <Label>{message}</Label>}
    <ScrollView horizontal>
      <Text selectable style={{fontFamily: 'monospace', color: colors.success, fontSize: 13 * preferences.fontSize, lineHeight: 22 * preferences.fontSize}}>{code}</Text>
    </ScrollView>
  </View>;
}

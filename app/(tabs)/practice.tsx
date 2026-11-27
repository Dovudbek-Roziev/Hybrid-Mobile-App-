import { router } from 'expo-router';
import { Button, Card, Label, Screen } from '../../src/components/ui';
import { useTheme } from '../../src/theme';

export default function Practice() {
  const {t} = useTheme();
  return <Screen title={t('Practice', 'Amaliyot')}>
    <Card>
      <Label kind="heading">{t('Practice with a lesson', 'Dars misoli bilan mashq qilish')}</Label>
      <Label>{t('Read a lesson’s code example, predict the result, then answer its question.', 'Darsdagi kodni o‘qing, natijasini taxmin qiling va savoliga javob bering.')}</Label>
      <Button onPress={() => router.push('/catalog')}>{t('Choose a lesson', 'Dars tanlash')}</Button>
    </Card>
    <Button onPress={() => router.push('/quiz')}>{t('Weekly quiz', 'Haftalik test')}</Button>
  </Screen>;
}

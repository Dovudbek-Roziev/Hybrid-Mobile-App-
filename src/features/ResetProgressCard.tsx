import { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { Button, Card, Label } from '../components/ui';
import { resetLearningProgress } from '../database/reset-progress';
import { useTheme } from '../theme';

export function ResetProgressCard() {
  const { t } = useTheme();
  const locked = useRef(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');

  async function reset() {
    setBusy(true);
    setMessage('');
    try {
      await resetLearningProgress();
      setMessage(
        t('Learning progress was cleared.', 'O‘quv natijalari o‘chirildi.'),
      );
    } catch {
      setMessage(
        t(
          'Could not clear progress. Your data was kept.',
          'Natijalarni o‘chirib bo‘lmadi. Ma’lumotlaringiz saqlandi.',
        ),
      );
    } finally {
      locked.current = false;
      setBusy(false);
    }
  }

  function confirm() {
    if (locked.current) return;
    locked.current = true;
    Alert.alert(
      t('Start over?', 'O‘qishni noldan boshlaysizmi?'),
      t(
        'This removes saved lesson, English, project and exam results, challenge drafts, and your study history. Your profile and settings are kept. You can export a backup first.',
        'Dars, ingliz tili, loyiha va imtihon natijalari, mashq qoralamalari hamda o‘qish tarixi o‘chiriladi. Profil va sozlamalar saqlanadi. Istasangiz, avval zaxira nusxasini yarating.',
      ),
      [
        {
          text: t('Cancel', 'Bekor qilish'),
          style: 'cancel',
          onPress: () => {
            locked.current = false;
          },
        },
        {
          text: t('Clear progress', 'Natijalarni o‘chirish'),
          style: 'destructive',
          onPress: () => void reset(),
        },
      ],
      { cancelable: false },
    );
  }

  return (
    <Card>
      <Label kind="heading">{t('Learning progress', 'O‘quv natijalari')}</Label>
      <Label>
        {t(
          'Clear your saved results and start learning again.',
          'Saqlangan natijalarni o‘chirib, o‘qishni qayta boshlang.',
        )}
      </Label>
      <Button disabled={busy} onPress={confirm}>
        {busy
          ? t('Clearing progress…', 'Natijalar o‘chirilmoqda…')
          : t('Reset progress', 'Noldan boshlash')}
      </Button>
      {!!message && <Label>{message}</Label>}
    </Card>
  );
}

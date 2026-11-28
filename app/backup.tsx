import { useRef, useState } from 'react';
import { Alert } from 'react-native';
import { File, Paths } from 'expo-file-system';
import * as DocumentPicker from 'expo-document-picker';
import * as Sharing from 'expo-sharing';
import { Button, Card, Label, Screen } from '../src/components/ui';
import { useTheme } from '../src/theme';
import {
  exportBackup,
  maxBackupSize,
  validateBackup,
  restoreBackup,
} from '../src/database/backup';

export default function Backup() {
  const { t, reload } = useTheme();
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  const [pending, setPending] = useState<{
    raw: string;
    name: string;
    count: number;
  } | null>(null);
  const lock = useRef(false);
  async function run(action: () => Promise<void>, failure: string) {
    if (lock.current) return;
    lock.current = true;
    setBusy(true);
    setMessage('');
    try {
      await action();
    } catch {
      setMessage(failure);
    } finally {
      lock.current = false;
      setBusy(false);
    }
  }
  function share() {
    void run(
      async () => {
        if (!(await Sharing.isAvailableAsync())) {
          setMessage(
            t('File sharing unavailable', 'Fayl ulashish mavjud emas'),
          );
          return;
        }
        const contents = await exportBackup();
        const file = new File(
          Paths.cache,
          'academy-backup-' + Date.now() + '.json',
        );
        try {
          file.create();
          file.write(contents);
          await Sharing.shareAsync(file.uri, {
            mimeType: 'application/json',
            dialogTitle: t('Save backup', 'Zaxirani saqlash'),
          });
        } finally {
          if (file.exists) file.delete();
        }
      },
      t(
        'Could not export the backup.',
        'Zaxira faylini eksport qilib bo‘lmadi.',
      ),
    );
  }
  function pick() {
    setPending(null);
    void run(
      async () => {
        const result = await DocumentPicker.getDocumentAsync({
          type: ['application/json', 'text/plain'],
          copyToCacheDirectory: true,
        });
        if (result.canceled) return;
        const asset = result.assets[0];
        const file = new File(asset.uri);
        try {
          if ((asset.size ?? file.size ?? 0) > maxBackupSize) {
            setMessage(t('File too large', 'Fayl juda katta'));
            return;
          }
          const raw = await file.text();
          const tables = validateBackup(raw);
          setPending({
            raw,
            name: asset.name,
            count: Object.values(tables).reduce(
              (n, rows) => n + rows.length,
              0,
            ),
          });
        } finally {
          if (file.exists) file.delete();
        }
      },
      t(
        'This backup could not be read or contains invalid data.',
        'Zaxira faylini o‘qib bo‘lmadi yoki unda yaroqsiz ma’lumot bor.',
      ),
    );
  }
  function confirm() {
    if (!pending || busy) return;
    const raw = pending.raw;
    Alert.alert(
      t('Replace local data?', 'Mahalliy ma’lumotlar almashtirilsinmi?'),
      t(
        'All current learning data and settings will be replaced. Export a backup first.',
        'Barcha joriy natijalar va sozlamalar almashtiriladi. Avval zaxira nusxasini saqlang.',
      ),
      [
        { text: t('Cancel', 'Bekor qilish'), style: 'cancel' },
        {
          text: t('Restore', 'Tiklash'),
          style: 'destructive',
          onPress: () =>
            void run(
              async () => {
                await restoreBackup(raw);
                setPending(null);
                setMessage(
                  t(
                    'Data restored. Reopen the app to refresh all screens.',
                    'Ma’lumotlar tiklandi. Barcha ekranlarni yangilash uchun ilovani qayta oching.',
                  ),
                );
                try {
                  await reload();
                } catch {
                  setMessage(
                    t(
                      'Data restored. Restart the app to refresh settings.',
                      'Ma’lumotlar tiklandi. Sozlamalarni yangilash uchun ilovani qayta oching.',
                    ),
                  );
                }
              },
              t(
                'Could not restore the backup. Existing data was kept.',
                'Zaxirani tiklab bo‘lmadi. Joriy ma’lumotlar saqlandi.',
              ),
            ),
        },
      ],
    );
  }
  return (
    <Screen title={t('Backup & Restore', 'Zaxira va tiklash')} back>
      <Card>
        <Label kind="heading">{t('Export backup', 'Zaxira yaratish')}</Label>
        <Label>
          {t(
            'The JSON contains your profile and learning history. Keep it private.',
            'JSON faylda profil va o‘qish tarixi bor. Uni maxfiy saqlang.',
          )}
        </Label>
        <Button disabled={busy} onPress={share}>
          {t('Export JSON', 'JSON eksport qilish')}
        </Button>
      </Card>
      <Card>
        <Label kind="heading">{t('Restore backup', 'Zaxirani tiklash')}</Label>
        <Button disabled={busy} onPress={pick}>
          {t('Choose JSON file', 'JSON faylni tanlash')}
        </Button>
        {pending && (
          <>
            <Label>{pending.name}</Label>
            <Label>
              {t('Validated rows', 'Tekshirilgan yozuvlar')}: {pending.count}
            </Label>
            <Button disabled={busy} onPress={confirm}>
              {t('Replace local data', 'Mahalliy ma’lumotlarni almashtirish')}
            </Button>
            <Button disabled={busy} onPress={() => setPending(null)}>
              {t('Cancel', 'Bekor qilish')}
            </Button>
          </>
        )}
      </Card>
      {busy && <Label>{t('Working…', 'Bajarilmoqda…')}</Label>}
      {!!message && <Label>{message}</Label>}
    </Screen>
  );
}

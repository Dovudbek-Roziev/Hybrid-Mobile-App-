import { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import {
  Button,
  Card,
  Field,
  Label,
  LoadState,
  Screen,
} from '../src/components/ui';
import { CodeBlock } from '../src/components/CodeBlock';
import { challenges, type Challenge } from '../src/challenges/catalog';
import { challengeEntries, saveChallenge } from '../src/database/learning';
import { useLocalData } from '../src/hooks/useLocalData';
import { useTheme } from '../src/theme';

function Editor({
  item,
  initial,
  completed,
}: {
  item: Challenge;
  initial: string;
  completed: boolean;
}) {
  const { t } = useTheme();
  const [draft, setDraft] = useState(initial);
  const [hint, setHint] = useState(false);
  const [solution, setSolution] = useState(false);
  const [done, setDone] = useState(completed);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState('');
  async function save(complete: boolean) {
    if (busy) return;
    setBusy(true);
    setMessage('');
    try {
      await saveChallenge(item.id, draft, complete);
      if (complete) setDone(true);
      setMessage(t('Saved offline', 'Qurilmada saqlandi'));
    } catch {
      setMessage(
        t('Save failed. Try again.', 'Saqlashda xato. Qayta urining.'),
      );
    } finally {
      setBusy(false);
    }
  }
  return (
    <Screen title={item.title} back>
      <Card>
        <Label kind="heading">{t('Task', 'Vazifa')}</Label>
        <Label>{item.task}</Label>
      </Card>
      <Label kind="heading">{t('Your code', 'Kodingiz')}</Label>
      <Field
        multiline
        value={draft}
        onChangeText={setDraft}
        editable={!busy}
        autoCapitalize="none"
        autoCorrect={false}
        style={{
          minHeight: 180,
          textAlignVertical: 'top',
          fontFamily: 'monospace',
        }}
      />
      <Button disabled={busy} onPress={() => void save(false)}>
        {t('Save draft', 'Kodni saqlash')}
      </Button>
      <Button onPress={() => setHint(!hint)}>{t('Hint', 'Yordam')}</Button>
      {hint && (
        <Card>
          <Label>{item.hint}</Label>
        </Card>
      )}
      <Button onPress={() => setSolution(!solution)}>
        {t('Show / hide solution', 'Yechimni ko‘rsatish / yashirish')}
      </Button>
      {solution && <CodeBlock code={item.solution} />}
      <Label>
        {t(
          'Code is not executed. Compare your answer with the solution before marking complete.',
          'Kod ishga tushirilmaydi. Bajarildi deb belgilashdan oldin yechim bilan solishtiring.',
        )}
      </Label>
      <Button
        chosen
        disabled={
          busy ||
          done ||
          !solution ||
          !draft.trim() ||
          draft.trim() === item.starter.trim()
        }
        onPress={() => void save(true)}
      >
        {done
          ? t('Completed', 'Bajarildi')
          : t('Mark as self-reviewed', 'Mustaqil tekshirildi')}
      </Button>
      {!!message && <Label>{message}</Label>}
    </Screen>
  );
}
export default function ChallengeRoute() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTheme();
  const progress = useLocalData(challengeEntries);
  const item = challenges.find((x) => x.id === id);
  if (!item)
    return (
      <Screen title={t('Challenge not found', 'Mashq topilmadi')} back>
        <Label>
          {t(
            'Choose an available challenge from Practice.',
            'Amaliyot bo‘limidan mavjud mashqni tanlang.',
          )}
        </Label>
      </Screen>
    );
  if (!progress.data)
    return (
      <Screen title={item.title} back>
        <LoadState {...progress} />
      </Screen>
    );
  const entry = progress.data.find((x) => x.id === item.id);
  return (
    <Editor
      key={item.id}
      item={item}
      initial={entry?.draft ?? item.starter}
      completed={!!entry?.completed_at}
    />
  );
}

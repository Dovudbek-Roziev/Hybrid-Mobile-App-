import { useState } from 'react';
import { View } from 'react-native';
import { Button, Field, Label } from '../components/ui';
import { useTheme } from '../theme';
import { checkSentence, checkTranslation } from './answer-check';
import type {
  SentenceExercise,
  TranslationExercise,
} from './sentence-exercises';

type Controls = {
  busy: boolean;
  onCheck: (correct: boolean) => void;
  onEdit: () => void;
};

function TranslationAnswer({
  exercise,
  busy,
  onCheck,
  onEdit,
}: Controls & { exercise: TranslationExercise }) {
  const { t } = useTheme();
  const [input, setInput] = useState('');
  return (
    <>
      <Field
        accessibilityLabel={t('English translation', 'Inglizcha tarjima')}
        placeholder={t('Type your translation', 'Tarjimani yozing')}
        editable={!busy}
        autoCorrect={false}
        maxLength={240}
        value={input}
        onChangeText={(value) => {
          setInput(value);
          onEdit();
        }}
      />
      <Button
        disabled={busy || !input.trim()}
        onPress={() => onCheck(checkTranslation(exercise, input))}
      >
        {t('Check translation', 'Tarjimani tekshirish')}
      </Button>
    </>
  );
}

function SentenceAnswer({
  exercise,
  busy,
  onCheck,
  onEdit,
}: Controls & { exercise: SentenceExercise }) {
  const { t } = useTheme();
  const [order, setOrder] = useState<number[]>([]);
  function change(next: (previous: number[]) => number[]) {
    setOrder(next);
    onEdit();
  }
  return (
    <>
      {order.length > 0 && (
        <>
          <Label>
            {t(
              'Tap a selected word to remove it.',
              'Tanlangan so‘zni olib tashlash uchun uni bosing.',
            )}
          </Label>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
            {order.map((index) => (
              <Button
                key={index}
                disabled={busy}
                chosen
                onPress={() =>
                  change((previous) =>
                    previous.filter((item) => item !== index),
                  )
                }
              >
                {exercise.words[index]}
              </Button>
            ))}
          </View>
        </>
      )}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
        {exercise.words.map((word, index) => (
          <Button
            key={index}
            disabled={busy || order.includes(index)}
            onPress={() =>
              change((previous) =>
                previous.includes(index) ? previous : [...previous, index],
              )
            }
          >
            {word}
          </Button>
        ))}
      </View>
      {order.length > 0 && (
        <Button disabled={busy} onPress={() => change(() => [])}>
          {t('Clear sentence', 'Gapni tozalash')}
        </Button>
      )}
      <Button
        disabled={busy || order.length !== exercise.words.length}
        onPress={() => onCheck(checkSentence(exercise, order))}
      >
        {t('Check sentence', 'Gapni tekshirish')}
      </Button>
    </>
  );
}

export function SentencePractice({
  exercise,
  ...controls
}: Controls & { exercise: TranslationExercise | SentenceExercise }) {
  const { t } = useTheme();
  return (
    <>
      <Label kind="heading">
        {exercise.kind === 'translation'
          ? t(
              'Translate this sentence into English.',
              'Gapni ingliz tiliga tarjima qiling.',
            )
          : t(
              'Put the words in order to make the English sentence.',
              'So‘zlarni tartiblab, inglizcha gap tuzing.',
            )}
      </Label>
      <Label>{exercise.prompt}</Label>
      {exercise.kind === 'translation' ? (
        <TranslationAnswer exercise={exercise} {...controls} />
      ) : (
        <SentenceAnswer exercise={exercise} {...controls} />
      )}
    </>
  );
}

import { useRef, useState } from 'react';
import { router } from 'expo-router';
import { View } from 'react-native';
import {
  Button,
  Card,
  Label,
  LoadState,
  Meter,
  Screen,
} from '../../src/components/ui';
import {
  completedEnglish,
  completeEnglish,
  loadProfile,
} from '../../src/database/storage';
import { exercises, type EnglishExercise } from '../../src/english/exercises';
import { SentencePractice } from '../../src/english/SentencePractice';
import { useLocalData } from '../../src/hooks/useLocalData';
import { useTheme } from '../../src/theme';

const levels = ['a1', 'a2', 'b1', 'b2'] as const;
const pageSize = 10;
const kinds = ['all', 'choice', 'translation', 'sentence'] as const;

async function loadExercises() {
  const [profile, completed] = await Promise.all([
    loadProfile(),
    completedEnglish(),
  ]);
  return {
    level: profile?.englishLevel ?? 'a1',
    completed: new Set(completed),
  };
}

type ExerciseFeedback = {
  choice?: number;
  correct: boolean;
  saving: boolean;
  error: boolean;
};

export default function English() {
  const { t } = useTheme();
  const state = useLocalData(loadExercises);
  const [levelOverride, setLevelOverride] =
    useState<EnglishExercise['level']>();
  const [page, setPage] = useState(0);
  const [kind, setKind] = useState<(typeof kinds)[number]>('all');
  const [feedback, setFeedback] = useState<Record<string, ExerciseFeedback>>(
    {},
  );
  const saving = useRef(new Set<string>());
  const level = levelOverride ?? state.data?.level ?? 'a1';
  const list = exercises.filter(
    (exercise) =>
      exercise.level === level && (kind === 'all' || exercise.kind === kind),
  );
  const complete = list.filter((exercise) =>
    state.data?.completed.has(exercise.id),
  ).length;
  const pageCount = Math.max(1, Math.ceil(list.length / pageSize));
  const current = Math.min(page, pageCount - 1);

  const descriptions = {
    all: t('All types', 'Barcha turlar'),
    choice: t('Multiple choice', 'Javob tanlash'),
    translation: t('Translation', 'Tarjima'),
    sentence: t('Sentence building', 'Gap tuzish'),
  };

  function clearAnswer(id: string) {
    setFeedback((old) => {
      if (!old[id]) return old;
      const next = { ...old };
      delete next[id];
      return next;
    });
  }

  async function answer(id: string, correct: boolean, choice?: number) {
    if (saving.current.has(id)) return;
    const shouldSave = correct && !state.data?.completed.has(id);
    setFeedback((old) => ({
      ...old,
      [id]: { choice, correct, saving: shouldSave, error: false },
    }));
    if (!shouldSave) return;
    saving.current.add(id);
    try {
      await completeEnglish(id);
      state.retry();
      setFeedback((old) => ({
        ...old,
        [id]: { choice, correct, saving: false, error: false },
      }));
    } catch {
      setFeedback((old) => ({
        ...old,
        [id]: { choice, correct, saving: false, error: true },
      }));
    } finally {
      saving.current.delete(id);
    }
  }

  return (
    <Screen title={t('English Academy', 'Ingliz tili akademiyasi')}>
      <Button onPress={() => router.push('/vocabulary')}>
        {t('Vocabulary and flashcards', 'Lug‘at va kartochkalar')}
      </Button>
      <Button onPress={() => router.push('/grammar')}>
        {t('Grammar', 'Grammatika')}
      </Button>
      <Button onPress={() => router.push('/reading')}>
        {t('Technical reading', 'Texnik matnlar')}
      </Button>
      <Label kind="heading">{t('Exercises', 'Mashqlar')}</Label>
      <LoadState
        {...state}
        error={
          state.error
            ? t(
                'Your exercise results are unavailable.',
                'Mashq natijalarini ko‘rsatib bo‘lmadi.',
              )
            : null
        }
      />
      {state.data && !state.error && (
        <>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {levels.map((option) => (
              <Button
                key={option}
                chosen={option === level}
                onPress={() => {
                  setLevelOverride(option);
                  setPage(0);
                }}
              >
                {option.toUpperCase()}
              </Button>
            ))}
          </View>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {kinds.map((option) => (
              <Button
                key={option}
                chosen={option === kind}
                onPress={() => {
                  setKind(option);
                  setPage(0);
                }}
              >
                {descriptions[option]}
              </Button>
            ))}
          </View>
          <Label>
            {complete}/{list.length}{' '}
            {t('exercises completed', 'ta mashq bajarildi')}
          </Label>
          <Meter value={complete} total={list.length} />
          {!list.length && (
            <Label>{t('No matching exercises.', 'Mos mashq topilmadi.')}</Label>
          )}
          {list
            .slice(current * pageSize, (current + 1) * pageSize)
            .map((exercise) => {
              const previous = feedback[exercise.id];
              const saved = state.data?.completed.has(exercise.id);
              return (
                <Card key={exercise.id}>
                  <Label kind="accent">
                    {exercise.kind === 'choice'
                      ? t(exercise.topic, exercise.topicUz)
                      : descriptions[exercise.kind]}
                    {saved ? ' · ✓' : ''}
                  </Label>
                  {exercise.kind === 'choice' ? (
                    <>
                      {!!exercise.word && (
                        <Label kind="heading">{exercise.word}</Label>
                      )}
                      {!!exercise.translation && (
                        <Label>{exercise.translation}</Label>
                      )}
                      {!!exercise.example && <Label>{exercise.example}</Label>}
                      <Label kind="heading">
                        {t(exercise.question, exercise.questionUz)}
                      </Label>
                      {exercise.options.map((option, index) => (
                        <Button
                          key={index}
                          disabled={previous?.saving}
                          chosen={previous?.choice === index}
                          onPress={() =>
                            void answer(
                              exercise.id,
                              index === exercise.answer,
                              index,
                            )
                          }
                        >
                          {option}
                        </Button>
                      ))}
                    </>
                  ) : (
                    <SentencePractice
                      exercise={exercise}
                      busy={previous?.saving ?? false}
                      onEdit={() => clearAnswer(exercise.id)}
                      onCheck={(correct) => void answer(exercise.id, correct)}
                    />
                  )}
                  {previous?.saving && (
                    <Label>{t('Saving…', 'Saqlanmoqda…')}</Label>
                  )}
                  {previous?.error && (
                    <Label>
                      {t(
                        'Could not save. Check the answer again to retry.',
                        'Saqlab bo‘lmadi. Qayta urinish uchun javobni yana tekshiring.',
                      )}
                    </Label>
                  )}
                  {previous && !previous.saving && !previous.error && (
                    <Label>
                      {!previous.correct
                        ? exercise.kind === 'choice'
                          ? t(
                              'Try another answer.',
                              'Boshqa javobni belgilang.',
                            )
                          : exercise.kind === 'translation'
                            ? t(
                                'Your translation did not match the accepted answers.',
                                'Tarjimangiz qabul qilinadigan javoblarga mos kelmadi.',
                              )
                            : t(
                                'Check the word order and try again.',
                                'So‘zlar tartibini tekshirib, qayta urinib ko‘ring.',
                              )
                        : saved
                          ? t(
                              'Correct. Saved on this device.',
                              'To‘g‘ri. Qurilmada saqlandi.',
                            )
                          : t('Correct.', 'To‘g‘ri.')}
                    </Label>
                  )}
                  {previous &&
                    !previous.correct &&
                    exercise.kind !== 'choice' && (
                      <Label>
                        {t('Example answer', 'Javob namunasi')} ·{' '}
                        {exercise.kind === 'translation'
                          ? exercise.answers[0]
                          : exercise.answer}
                      </Label>
                    )}
                </Card>
              );
            })}
          {pageCount > 1 && (
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <Button
                disabled={current === 0}
                onPress={() => setPage(current - 1)}
              >
                {t('Previous', 'Oldingi')}
              </Button>
              <Label>
                {current + 1}/{pageCount}
              </Label>
              <Button
                disabled={current === pageCount - 1}
                onPress={() => setPage(current + 1)}
              >
                {t('Next', 'Keyingi')}
              </Button>
            </View>
          )}
        </>
      )}
    </Screen>
  );
}

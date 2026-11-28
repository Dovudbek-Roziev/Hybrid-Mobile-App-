import { useMemo, useState } from 'react';
import { router } from 'expo-router';
import { View } from 'react-native';
import {
  Button,
  Card,
  Label,
  Screen,
  Field,
  Meter,
  LoadState,
} from '../../src/components/ui';
import { challenges, type Difficulty } from '../../src/challenges/catalog';
import { filterChallenges } from '../../src/challenges/filter';
import {
  challengeTopics,
  type ChallengeTopic,
} from '../../src/challenges/topics';
import { challengeEntries } from '../../src/database/learning';
import { useLocalData } from '../../src/hooks/useLocalData';
import { useTheme } from '../../src/theme';

const difficulties = ['all', 'easy', 'medium', 'hard'] as const;
const topics = Object.keys(challengeTopics) as ChallengeTopic[];
const pageSize = 10;

export default function Practice() {
  const { t } = useTheme();
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState<Difficulty | 'all'>('all');
  const [topic, setTopic] = useState<ChallengeTopic | 'all'>('all');
  const [showTopics, setShowTopics] = useState(false);
  const [page, setPage] = useState(0);
  const progress = useLocalData(challengeEntries);
  const done = useMemo(
    () =>
      new Set(
        progress.data?.filter((row) => row.completed_at).map((row) => row.id),
      ),
    [progress.data],
  );
  const visible = useMemo(
    () => filterChallenges(query, level, topic),
    [query, level, topic],
  );
  const completedCount = challenges.filter((challenge) =>
    done.has(challenge.id),
  ).length;
  const pages = Math.max(1, Math.ceil(visible.length / pageSize));
  const current = Math.min(page, pages - 1);
  const labels = {
    all: t('Any difficulty', 'Barcha darajalar'),
    easy: t('Easy', 'Oson'),
    medium: t('Medium', 'O‘rta'),
    hard: t('Hard', 'Qiyin'),
  };
  const allTopics = t('All topics', 'Barcha mavzular');
  const topicName = (id: ChallengeTopic) =>
    t(challengeTopics[id].en, challengeTopics[id].uz);

  function chooseTopic(value: ChallengeTopic | 'all') {
    setTopic(value);
    setShowTopics(false);
    setPage(0);
  }

  return (
    <Screen title={t('Practice', 'Amaliyot')}>
      <Card>
        <Label kind="heading">
          {t('Coding challenges', 'Dasturlash mashqlari')}
        </Label>
        {progress.data && !progress.error && (
          <>
            <Label>
              {completedCount}/{challenges.length}{' '}
              {t('completed', 'ta bajarildi')}
            </Label>
            <Meter value={completedCount} total={challenges.length} />
          </>
        )}
        <LoadState
          {...progress}
          error={
            progress.error
              ? t(
                  'Challenge results are unavailable.',
                  'Mashq natijalarini ko‘rsatib bo‘lmadi.',
                )
              : null
          }
        />
      </Card>
      <Field
        accessibilityLabel={t('Search challenges', 'Mashqlarni qidirish')}
        value={query}
        onChangeText={(value) => {
          setQuery(value);
          setPage(0);
        }}
        placeholder={t(
          'Search by challenge or topic',
          'Mashq yoki mavzu bo‘yicha qidiring',
        )}
      />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {difficulties.map((item) => (
          <Button
            key={item}
            chosen={item === level}
            onPress={() => {
              setLevel(item);
              setPage(0);
            }}
          >
            {labels[item]}
          </Button>
        ))}
      </View>
      <Card>
        <Button
          chosen={showTopics}
          onPress={() => setShowTopics((value) => !value)}
        >
          {t('Topic', 'Mavzu')} ·{' '}
          {topic === 'all' ? allTopics : topicName(topic)}
        </Button>
        {showTopics && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            <Button chosen={topic === 'all'} onPress={() => chooseTopic('all')}>
              {allTopics}
            </Button>
            {topics.map((item) => (
              <Button
                key={item}
                chosen={item === topic}
                onPress={() => chooseTopic(item)}
              >
                {topicName(item)}
              </Button>
            ))}
          </View>
        )}
      </Card>
      <Label>
        {t('Results', 'Qidiruv natijalari')} · {visible.length}
      </Label>
      {!visible.length && (
        <Card>
          <Label>{t('No matching challenges.', 'Mos mashq topilmadi.')}</Label>
          <Button
            onPress={() => {
              setQuery('');
              setLevel('all');
              chooseTopic('all');
            }}
          >
            {t('Clear filters', 'Filtrlarni tozalash')}
          </Button>
        </Card>
      )}
      {visible
        .slice(current * pageSize, (current + 1) * pageSize)
        .map((item) => (
          <Card key={item.id}>
            <Label kind="heading">{item.title}</Label>
            <Label>
              {topicName(item.topic)} · {labels[item.difficulty]}
              {progress.data && !progress.error
                ? ' · ' +
                  (done.has(item.id)
                    ? t('Completed', 'Bajarildi')
                    : t('Not completed', 'Bajarilmagan'))
                : ''}
            </Label>
            <Label>{item.task}</Label>
            <Button
              onPress={() =>
                router.push({ pathname: '/challenge', params: { id: item.id } })
              }
            >
              {t('Open challenge', 'Mashqni ochish')}
            </Button>
          </Card>
        ))}
      {pages > 1 && (
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Button disabled={current === 0} onPress={() => setPage(current - 1)}>
            {t('Previous', 'Oldingi')}
          </Button>
          <Label>
            {current + 1}/{pages}
          </Label>
          <Button
            disabled={current === pages - 1}
            onPress={() => setPage(current + 1)}
          >
            {t('Next', 'Keyingi')}
          </Button>
        </View>
      )}
      <Button onPress={() => router.push('/projects')}>
        {t('Guided projects', 'Amaliy loyihalar')}
      </Button>
      <Button onPress={() => router.push('/exam')}>
        {t('Exams', 'Imtihonlar')}
      </Button>
      <Button onPress={() => router.push('/quiz')}>
        {t('Weekly quiz', 'Haftalik test')}
      </Button>
      <Button onPress={() => router.push('/catalog')}>
        {t('Choose a lesson', 'Dars tanlash')}
      </Button>
    </Screen>
  );
}

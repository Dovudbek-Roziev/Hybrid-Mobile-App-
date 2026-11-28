import { useMemo, useState } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { SectionList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Field, Label, LoadState, Meter } from '../../src/components/ui';
import { lessons, months } from '../../src/curriculum/catalog';
import type { Lesson } from '../../src/curriculum/model';
import { useLocalData } from '../../src/hooks/useLocalData';
import { completedLessons } from '../../src/database/storage';
import { useTheme } from '../../src/theme';

export default function Catalog() {
  const {month} = useLocalSearchParams<{month?: string}>();
  const state = useLocalData(completedLessons);
  const {colors, t} = useTheme();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'todo' | 'done'>('all');
  const done = useMemo(() => new Set(state.data), [state.data]);
  const sections = useMemo(() => {
    const groups = new Map<number, {key: string; week: number; month: number; data: Lesson[]}>();
    const query = search.trim().toLowerCase();
    for (const lesson of lessons) {
      if (month && Number(month) !== lesson.month) continue;
      if (filter !== 'all' && done.has(lesson.id) !== (filter === 'done')) continue;
      if (query && !(lesson.title + ' ' + months[lesson.month - 1]).toLowerCase().includes(query)) continue;
      const group = groups.get(lesson.week) ?? {key: String(lesson.week), week: lesson.week, month: lesson.month, data: []};
      group.data.push(lesson);
      groups.set(lesson.week, group);
    }
    return [...groups.values()];
  }, [search, filter, month, done]);
  const count = lessons.filter(lesson => done.has(lesson.id)).length;
  return <SafeAreaView edges={['top', 'left', 'right']} style={{flex:1, backgroundColor:colors.bg}}>
    <SectionList
      sections={state.loading || state.error ? [] : sections}
      keyExtractor={lesson => lesson.id}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{paddingHorizontal: 19, paddingBottom: 19, width:'100%', maxWidth:760, alignSelf:'center'}}
      ListHeaderComponent={<View style={{gap: 12, paddingTop: 15, paddingBottom: 12}}>
        <Label kind="title">{t('Programming academy', 'Dasturlash akademiyasi')}</Label>
        <Label>{count}/{lessons.length} · {t('Lessons completed', 'Dars bajarildi')}</Label>
        <Meter value={count} total={lessons.length}/>
        <Field accessibilityLabel={t('Search lessons', 'Darslarni qidirish')} placeholder={t('Search lessons or topics', 'Dars yoki mavzuni qidiring')} value={search} onChangeText={setSearch} autoCapitalize="none"/>
        <View style={{flexDirection: 'row', flexWrap:'wrap', gap: 8}}>
          {([['all', 'All', 'Barchasi'], ['todo', 'To learn', 'O‘rganish kerak'], ['done', 'Completed', 'Bajarilgan']] as const).map(([key, en, uz]) => <Button key={key} chosen={key === filter} onPress={() => setFilter(key)}>{t(en, uz)}</Button>)}
          {month && <Button onPress={() => router.setParams({month: undefined})}>{t('Clear month filter', 'Oy filtrini tozalash')}</Button>}
        </View>
        <LoadState {...state}/>
      </View>}
      renderSectionHeader={({section}) => <View style={{paddingVertical:9, backgroundColor:colors.bg}}>
        <Label kind="accent">{t('Week', 'Hafta')} {section.week} · {t('Month', 'Oy')} {section.month}</Label>
        <Label kind="heading">{months[section.month - 1]}</Label>
      </View>}
      renderItem={({item}) => <View style={{marginBottom:8}}>
        <Button onPress={() => router.push({pathname:'/lesson', params:{id:item.id}})}>
          {done.has(item.id) ? '✓ ' : ''}{item.title} · {item.minutes} {t('min', 'daq')}
        </Button>
      </View>}
      ListEmptyComponent={!state.loading && !state.error ? <Label>{t('No matching lessons.', 'Mos dars topilmadi.')}</Label> : undefined}
    />
  </SafeAreaView>;
}

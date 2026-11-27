import { useCallback, useState } from 'react';
import { useFocusEffect } from 'expo-router';

export function useLocalData<T>(load: () => Promise<T>) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string | null>(null);
  const [version, setVersion] = useState(0);
  useFocusEffect(useCallback(() => {
    let active = true;
    load().then(value => { if (active) { setData(value); setError(null); } })
      .catch(reason => { if (active) setError(String(reason)); });
    return () => { active = false; };
  }, [load, version]));
  const retry = useCallback(() => { setError(null); setVersion(value => value + 1); }, []);
  return { data, error, loading: data === undefined && !error, retry };
}

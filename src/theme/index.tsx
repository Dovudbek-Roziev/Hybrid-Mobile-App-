import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import {
  defaults,
  loadPreferences,
  savePreferences,
  type Preferences,
} from '../features/preferences';

export const colors = {
  bg: '#080E1B',
  surface: '#141E31',
  border: '#263550',
  primary: '#91A7FF',
  text: '#F6F8FF',
  muted: '#AAB9D3',
  success: '#54D5B0',
  accent: '#C2AAFF',
  selected: '#263A6B',
  code: '#101C2D',
  danger: '#FF9BAA',
};
const light: typeof colors = {
  bg: '#F3F5FC',
  surface: '#FFFFFF',
  border: '#CFD8EC',
  primary: '#2448AC',
  text: '#14213B',
  muted: '#495B76',
  success: '#08775B',
  accent: '#683CB8',
  selected: '#E1E8FF',
  code: '#E6ECFA',
  danger: '#A42645',
};

const Theme = createContext({
  colors,
  preferences: defaults,
  update: async (value: Preferences) => {
    await savePreferences(value);
  },
  reload: async () => {},
  t: (english: string, _uzbek: string) => english,
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState(defaults);
  async function reload() {
    setPreferences(await loadPreferences());
  }
  useEffect(() => {
    reload().catch(() => {});
  }, []);
  return (
    <Theme.Provider
      value={{
        colors: preferences.theme === 'dark' ? colors : light,
        preferences,
        update: async (value) => {
          await savePreferences(value);
          setPreferences(value);
        },
        reload,
        t: (english, uzbek) =>
          preferences.language === 'uz' ? uzbek : english,
      }}
    >
      {children}
    </Theme.Provider>
  );
}

export function useTheme() {
  return useContext(Theme);
}

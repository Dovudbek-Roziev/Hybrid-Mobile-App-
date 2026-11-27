export function localDay(date = new Date()) {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
}

export function shiftDay(day: string, days: number) {
  const [year, month, date] = day.split('-').map(Number);
  return localDay(new Date(year, month - 1, date + days, 12));
}

export function streaks(days: string[], today = localDay()) {
  const unique = [...new Set(days)].filter(day => day <= today).sort();
  let run = 0;
  let longest = 0;
  let previous = '';
  for (const day of unique) {
    run = previous && shiftDay(previous, 1) === day ? run + 1 : 1;
    longest = Math.max(run, longest);
    previous = day;
  }
  return {current: previous === today || previous === shiftDay(today, -1) ? run : 0, longest};
}

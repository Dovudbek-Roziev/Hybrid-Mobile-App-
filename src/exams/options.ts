export const defaultPassScore = 70;

export function isPassScore(value: unknown): value is number {
  return (
    typeof value === 'number' &&
    Number.isInteger(value) &&
    value >= 1 &&
    value <= 100
  );
}

export function examDeadline(
  minutes: number,
  timed: boolean,
  now = Date.now(),
) {
  return timed ? now + minutes * 60_000 : null;
}

export function examSecondsRemaining(
  deadline: number | null,
  now = Date.now(),
) {
  return deadline === null
    ? null
    : Math.max(0, Math.ceil((deadline - now) / 1000));
}

import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  test('returns the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });
});

describe('getFooterCopy', () => {
  test('returns correct string for true argument', () => {
    const result = getFooterCopy(true);
    expect(result).toBe('Holberton School');
  });

  test('returns correct string for false argument', () => {
    const result = getFooterCopy(false);
    expect(result).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification', () => {
  test('checks returned string', () => {
    expect(getLatestNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD',
    );
  });
});

import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('returns correct count when there are no matches', () => {
    const res = getLetterMatchCount('bones', secretWord);
    expect(res).toBe(0);
  });

  test('returns correct count when there are 3 matching letters', () => {
    const res = getLetterMatchCount('barny', secretWord);
    expect(res).toBe(3);
  });

  test('returns correct count where there are duplicate letters in the guess', () => {
    const res = getLetterMatchCount('aaa', secretWord);
    expect(res).toBe(1);
  });
});

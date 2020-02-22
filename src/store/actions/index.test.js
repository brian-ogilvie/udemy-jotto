import { correctGuess } from './';
import types from '../actionTypes';

describe('correctGuess', () => {
  test('returns an action with type: CORRECT_GUESS', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: types.CORRECT_GUESS });
  });
});

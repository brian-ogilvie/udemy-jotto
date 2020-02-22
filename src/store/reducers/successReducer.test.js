import types from '../actionTypes';
import successReducer from './successReducer';

test('returns initial state of false when no action is passed', () => {
  const state = successReducer(undefined, {});
  expect(state).toBe(false);
});

test('returns state of true after CORRECT_GUESS action is passed', () => {
  const state = successReducer(false, { type: types.CORRECT_GUESS });
  expect(state).toBe(true);
});

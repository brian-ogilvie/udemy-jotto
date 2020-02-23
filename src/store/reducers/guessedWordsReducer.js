import types from '../actionTypes';

const initialState = [];

export default function guessedWords(state = initialState, action) {
  switch (action.type) {
    case types.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
}

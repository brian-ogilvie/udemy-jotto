import types from '../actionTypes';

const initialState = [];

export default function guessedWords(state = initialState, action) {
  switch (action.type) {
    case types.GUESS_WORD:
      return [...state, action.payload];
    case types.RESET_GAME:
      return initialState;
    default:
      return state;
  }
}

import types from '../actionTypes';
import { getLetterMatchCount } from '../../helpers/';

export const guessWord = guessedWord => (dispatch, getState) => {
  const { secretWord } = getState();
  const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);
  dispatch({
    type: types.GUESS_WORD,
    payload: { guessedWord, letterMatchCount }
  });
  if (guessedWord === secretWord) {
    dispatch({ type: types.CORRECT_GUESS });
  }
};

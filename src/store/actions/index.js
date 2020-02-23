import axios from 'axios';
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

export const getSecretWord = () => async dispatch => {
  try {
    const { data } = await axios.get('http://localhost:3030/');
    dispatch({
      type: types.SET_SECRET_WORD,
      payload: data
    });
  } catch (e) {
    console.log('getSecretWord error:', e.message);
  }
};

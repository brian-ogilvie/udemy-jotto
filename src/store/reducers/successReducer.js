import types from '../actionTypes';

const initialState = false;

export default function successReducer(state = initialState, action) {
  switch (action.type) {
    case types.CORRECT_GUESS:
      return true;
    case types.RESET_GAME:
      return false;
    default:
      return state;
  }
}

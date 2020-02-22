import types from '../actionTypes';

const initialState = false;

export default function successReducer(state = initialState, action) {
  switch (action.type) {
    case types.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
}

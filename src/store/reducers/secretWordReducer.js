import types from '../actionTypes';

const initialState = null;

export default function secretWordReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_SECRET_WORD:
      return action.payload;
    default:
      return state;
  }
}

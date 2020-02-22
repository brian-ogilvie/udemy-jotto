/* eslint-disable react/forbid-foreign-prop-types */
import checkPropTypes from 'check-prop-types';
import { createStore } from 'redux';
import rootReducer from '../src/store/reducers';

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};

export function storeFactory(initialState = {}) {
  return createStore(rootReducer, initialState);
}

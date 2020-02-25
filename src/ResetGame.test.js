import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory, findByTestAttr } from '../test/testUtils';
import ResetGame from './ResetGame';

function setup(initialState = {}) {
  const store = storeFactory(initialState);
  return shallow(<ResetGame store={store} />)
    .dive()
    .dive();
}

describe('render', () => {
  let wrapper;
  describe('success state', () => {
    beforeEach(() => {
      wrapper = setup({ success: true });
    });

    test('renders reset button', () => {
      const component = findByTestAttr(wrapper, 'component-reset-game');
      expect(component.length).toBe(1);
      const resetButton = findByTestAttr(component, 'reset-button');
      expect(resetButton.length).toBe(1);
    });
  });

  describe('non success state', () => {
    beforeEach(() => {
      wrapper = setup({ success: false });
    });

    test('does not render reset button', () => {
      const component = findByTestAttr(wrapper, 'component-reset-game');
      expect(component.length).toBe(1);
      const resetButton = findByTestAttr(component, 'reset-button');
      expect(resetButton.length).toBe(0);
    });
  });
});

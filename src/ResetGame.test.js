import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory, findByTestAttr } from '../test/testUtils';
import ResetGame, { UnconnectedResetGame } from './ResetGame';

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

describe('redux props', () => {
  test('has success piece of state', () => {
    const success = true;
    const wrapper = setup({ success });
    const { success: successProp } = wrapper.instance().props;
    expect(successProp).toBe(success);
  });
  test('resetGame action creator prop is a function', () => {
    const wrapper = setup();
    const { resetGame: resetGameProp } = wrapper.instance().props;
    expect(resetGameProp).toBeInstanceOf(Function);
  });
});

describe('`resetGame` action creator calls', () => {
  test('clicking the button calls `resetGame`', () => {
    const resetGame = jest.fn();
    const wrapper = shallow(
      <UnconnectedResetGame success={true} resetGame={resetGame} />
    );
    const resetButton = findByTestAttr(wrapper, 'reset-button');
    resetButton.simulate('click');
    expect(resetGame).toHaveBeenCalled();
  });
});

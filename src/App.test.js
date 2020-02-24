import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

function setup(initialState = {}) {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
}

describe('redux props', () => {
  test('has success piece of state', () => {
    const success = true;
    const wrapper = setup({ success });
    const { success: successProp } = wrapper.instance().props;
    expect(successProp).toBe(success);
  });
  test('has access to secretWord pice of state', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const { secretWord: secretWordProp } = wrapper.instance().props;
    expect(secretWordProp).toBe(secretWord);
  });
  test('has access to guessedWords piece of state', () => {
    const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
    const wrapper = setup({ guessedWords });
    const { guessedWords: guessedWordsProp } = wrapper.instance().props;
    expect(guessedWordsProp).toEqual(guessedWords);
  });
  test('getSecretWord action creator is fuction prop', () => {
    const wrapper = setup();
    const { getSecretWord: getSecretWordProp } = wrapper.instance().props;
    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});

test('getSecretWord runs on App mount', () => {
  const getSecretWordMock = jest.fn();
  const props = {
    success: true,
    guessedWords: [],
    getSecretWord: getSecretWordMock,
  };
  const wrapper = shallow(<UnconnectedApp {...props} />);

  // run lyfecycle method
  wrapper.instance().componentDidMount();

  // check that mock actually ran
  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});

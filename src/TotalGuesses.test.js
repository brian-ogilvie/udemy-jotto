import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import TotalGuesses from './TotalGuesses';

const defaultProps = {
  guessedWords: [
    { guessedWord: 'train', letterMatchCount: 3 },
    { guessedWord: 'funky', letterMatchCount: 1 },
  ],
};

function setup(props = {}) {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TotalGuesses {...setupProps} />);
}

test('does not throw error with expected props', () => {
  checkProps(TotalGuesses, defaultProps);
});

describe('if there are no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test('displays zero total guesses', () => {
    const component = findByTestAttr(wrapper, 'component-total-guesses');
    expect(component.length).toBe(1);
    expect(component.text()).toContain(' 0');
  });
});

describe('if there are some words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup();
  });
  test('displays the correct number of total guesses', () => {
    const component = findByTestAttr(wrapper, 'component-total-guesses');
    expect(component.length).toBe(1);
    expect(component.text()).toContain(
      String(defaultProps.guessedWords.length)
    );
  });
});

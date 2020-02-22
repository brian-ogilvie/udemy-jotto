import React from 'react';
import PropTypes from 'prop-types';

export default function GuessedWords({ guessedWords }) {
  const contents =
    guessedWords.length === 0 ? (
      <span data-test="guess-instructions">Try to guess a word!</span>
    ) : (
      <span />
    );
  return <div data-test="component-guessed-words">{contents}</div>;
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    }).isRequired
  )
};

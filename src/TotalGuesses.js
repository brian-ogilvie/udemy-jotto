import React from 'react';
import PropTypes from 'prop-types';

export default function TotalGuesses({ guessedWords }) {
  return (
    <div data-test="component-total-guesses">
      <p>Total Guesses: {guessedWords.length}</p>
    </div>
  );
}

TotalGuesses.propTypes = {
  guessedWords: PropTypes.array.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function GuessedWords({ guessedWords }) {
  const contents =
    guessedWords.length === 0 ? (
      <span data-test="guess-instructions">Try to guess a word!</span>
    ) : (
      <div data-test="guessed-words">
        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>#</th>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
            {guessedWords.map((word, i) => {
              const { guessedWord, letterMatchCount } = word;
              return (
                <tr data-test="guessed-word" key={i}>
                  <td data-test="guess-number">{i + 1}</td>
                  <td>{guessedWord}</td>
                  <td>{letterMatchCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  return <div data-test="component-guessed-words">{contents}</div>;
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    }).isRequired
  ),
};

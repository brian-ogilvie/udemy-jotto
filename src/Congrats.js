import React from 'react';
import PropTypes from 'prop-types';

export default function Congrats({ success }) {
  return success ? (
    <div data-test="component-congrats" className="alert alert-success">
      <span data-test="congrats-message">Congrats! You guessed the word!</span>
    </div>
  ) : (
    <div data-test="component-congrats" />
  );
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

import React from 'react';
import PropTypes from 'prop-types';

export default function Congrats({ success }) {
  return success ? (
    <div data-test="component-congrats">
      <span data-test="congrats-message">Congrats! You guessed the word!</span>
    </div>
  ) : (
    <div data-test="component-congrats" />
  );
}

Congrats.propTypes = {
  success: PropTypes.bool,
};

Congrats.defaultProps = {
  success: false,
};

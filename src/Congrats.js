import React from 'react';

export default function Congrats({ success }) {
  return success ? (
    <div data-test="component-congrats">
      <span data-test="congrats-message">Congrats! You guessed the word!</span>
    </div>
  ) : (
    <div data-test="component-congrats" />
  );
}

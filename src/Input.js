import React from 'react';
import { connect } from 'react-redux';

function Input({ success }) {
  const contents = success ? null : (
    <form className="form-inline">
      <input
        data-test="input-box"
        className="mb-2 mb-sm-3"
        type="test"
        placeholder="enter guess"
      />
      <button
        data-test="submit-button"
        type="submit"
        className="btn btn-primary mb-2"
      >
        Guess
      </button>
    </form>
  );
  return <div data-test="component-input">{contents}</div>;
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Input);

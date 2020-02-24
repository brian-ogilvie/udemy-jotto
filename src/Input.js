import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './store/actions';

class Input extends Component {
  render() {
    const contents = this.props.success ? null : (
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
          Submit
        </button>
      </form>
    );
    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateToProps = state => ({
  success: state.success,
});

export default connect(mapStateToProps, { guessWord })(Input);

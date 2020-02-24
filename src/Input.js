import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './store/actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      guess: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange({ target }) {
    const { value } = target;
    this.setState({ guess: value });
  }

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mb-sm-3"
          type="test"
          placeholder="enter guess"
          value={this.state.guess}
          onChange={this.handleInputChange}
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
          onClick={() => this.props.guessWord(this.state.guess)}
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

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);

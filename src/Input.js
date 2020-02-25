import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './store/actions';

export class UnconnectedInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitGuessedWord = this.submitGuessedWord.bind(this);
  }

  handleInputChange({ target }) {
    const { value } = target;
    this.setState({ currentGuess: value });
  }

  submitGuessedWord(e) {
    e.preventDefault();
    const { currentGuess } = this.state;
    if (currentGuess && currentGuess.length > 0) {
      this.props.guessWord(currentGuess);
      this.setState({ currentGuess: '' });
    }
  }

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          data-test="input-box"
          className="mb-2 mb-sm-3"
          type="test"
          placeholder="enter guess"
          value={this.state.currentGuess}
          onChange={this.handleInputChange}
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
          onClick={e => this.submitGuessedWord(e)}
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

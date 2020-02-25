import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import Input from './Input';
import TotalGuesses from './TotalGuesses';
import { getSecretWord } from './store/actions';

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    const { success, secretWord, guessedWords } = this.props;
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {secretWord}</div>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
        <TotalGuesses guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => ({
  success,
  secretWord,
  guessedWords,
});

const mapDispatchToProps = dispatch => ({
  getSecretWord: bindActionCreators(getSecretWord, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnconnectedApp);

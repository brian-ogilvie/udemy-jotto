import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetGame } from './store/actions';

export class UnconnectedResetGame extends Component {
  render() {
    const { success } = this.props;
    const contents = success ? (
      <button data-test="reset-button" className="btn btn-primary mb-2">
        New Word
      </button>
    ) : null;

    return <div data-test="component-reset-game">{contents}</div>;
  }
}

const mapStateToProps = ({ success }) => ({ success });

const mapDispatchToProps = dispatch => ({
  resetGame: bindActionCreators(resetGame, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnconnectedResetGame);

import React, { Component } from 'react';
import { connect } from 'react-redux';

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

export default connect(mapStateToProps, {})(UnconnectedResetGame);

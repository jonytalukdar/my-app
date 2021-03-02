import React, { Component } from 'react';

class State extends Component {
  render() {
    return (
      <div>
        <h1>
          <span>{new Date().toLocaleString(this.props.locale)}</span>
        </h1>
      </div>
    );
  }
}

export default State;

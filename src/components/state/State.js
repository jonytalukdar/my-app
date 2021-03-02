import React, { Component } from 'react';

class State extends Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>
          <span>{this.state.date.toLocaleString(this.props.locale)}</span>
        </h1>
      </div>
    );
  }
}

export default State;

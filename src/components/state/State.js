import React, { Component } from 'react';

class State extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       date: new Date(),
  //     };
  //   }

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

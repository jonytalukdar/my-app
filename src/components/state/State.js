import React, { Component } from 'react';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    console.log(this.state.date);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
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

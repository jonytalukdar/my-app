import React, { Component } from 'react';

class Events extends Component {
  handleButtonClick = (e) => {
    console.log(e);
    console.log(e.target);
  };
  render() {
    return (
      <div>
        <h1>this is events</h1>
        <button onClick={this.handleButtonClick}>Click me</button>
      </div>
    );
  }
}

export default Events;

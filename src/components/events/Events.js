import React, { Component } from 'react';

class Events extends Component {
  handleButtonClick = (e) => {
    console.log(e);
    console.log(e.target);
  };
  handleChange = (e) => {
    console.log(e.target.value);
  };
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>this is events</h1>
        <button onClick={this.handleButtonClick}>Click me</button>
        <br />
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="enter some text"
        />
      </div>
    );
  }
}

export default Events;

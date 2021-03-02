import React, { Component } from 'react';

class Events extends Component {
  state = {
    name: '',
  };

  handleButtonClick = (e) => {
    console.log(e);
    console.log(e.target);
  };
  handleChange = (e) => {
    this.setState({ name: e.target.value });
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
          value={this.state.name}
        />
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Events;

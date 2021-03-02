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
  handleFocus = (e) => {
    console.log('focused');
  };
  handleBlur = (e) => {
    if (!this.state.name) {
      alert('hey enter some name');
      console.log('i am blue events');
    }
  };
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <button onClick={this.handleButtonClick}>Click me</button>
        <br />
        <input
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          type="text"
          placeholder="Enter Your Name"
        />
        {this.state.name && <h1>welcome : {this.state.name}</h1>}
      </div>
    );
  }
}

export default Events;

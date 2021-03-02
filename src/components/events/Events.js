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
        <button onClick={this.handleButtonClick}>Click me</button>
        <br />
        <input
          onChange={this.handleChange}
          type="text"
          placeholder="Enter Your Name"
          // value={this.state.name}
        />
        {this.state.name && <h1>welcome : {this.state.name}</h1>}
      </div>
    );
  }
}

export default Events;

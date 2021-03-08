import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    country: '',
    bio: '',
  };
  render() {
    return (
      <div>
        <h1>this is form input</h1>
      </div>
    );
  }
}

export default Form;

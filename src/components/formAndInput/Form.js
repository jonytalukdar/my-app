import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  state = {
    name: '',
    country: '',
    bio: '',
    birthday: '',
  };
  render() {
    return (
      <div className="input">
        <input
          className="form-control my-2"
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <select className="form-control my-2" name="country" id="">
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Sri-Lanka">Sri-Lanka</option>
        </select>
        <textarea
          className="form-control my-2"
          name="bio"
          placeholder="Tell About YourSelf"
        ></textarea>
        <input className="form-control my-2" type="date" name="birthday" />
      </div>
    );
  }
}

export default Form;

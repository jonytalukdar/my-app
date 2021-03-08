import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  state = {
    name: '',
    country: '',
    bio: '',
    birthday: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, country, bio, birthday } = this.state;
    return (
      <div className="input">
        <input
          onChange={this.handleChange}
          className="form-control my-2"
          type="text"
          name="name"
          value={name}
          placeholder="Enter Your Name"
        />
        <select
          onChange={this.handleChange}
          className="form-control my-2"
          name="country"
          value={country}
          id=""
        >
          <option>Select Your Country</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="India">India</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Sri-Lanka">Sri-Lanka</option>
        </select>
        <textarea
          onChange={this.handleChange}
          className="form-control my-2"
          name="bio"
          value={bio}
          placeholder="Tell About YourSelf"
        ></textarea>
        <input
          onChange={this.handleChange}
          className="form-control my-2"
          type="date"
          name="birthday"
          value={birthday}
        />
        <button onClick={() => console.log(this.state)}> Show Data</button>
      </div>
    );
  }
}

export default Form;

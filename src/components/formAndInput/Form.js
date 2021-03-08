import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  state = {
    name: '',
    country: '',
    bio: '',
    birthday: '',
    gender: '',
    agree: false,
    skills: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      agree: e.target.checked,
    });
  };

  handleSkillsChange = (e) => {
    if (e.target.checked) {
      this.setState({
        skills: [...this.state.skills, e.target.value],
      });
    } else {
      const skills = this.state.skills.filter(
        (skill) => skill !== e.target.value
      );
      this.setState({ skills });
    }
  };

  render() {
    const { name, country, bio, birthday, agree, skills } = this.state;
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
        <div>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={this.handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={this.handleChange}
          />{' '}
          female
          <input
            type="radio"
            name="gender"
            value="Other"
            onChange={this.handleChange}
          />
          other
        </div>
        <div>
          Skills : <br />
          <input
            type="checkbox"
            name="skills"
            value="Java"
            checked={skills.includes('Java')}
            onChange={this.handleSkillsChange}
          />
          Java
          <input
            type="checkbox"
            name="skills"
            value="JavaScript"
            checked={skills.includes('JavaScript')}
            onChange={this.handleSkillsChange}
          />
          JavaScript
          <input
            type="checkbox"
            name="skills"
            value="Python"
            checked={skills.includes('Python')}
            onChange={this.handleSkillsChange}
          />
          Python
          <input
            type="checkbox"
            name="skills"
            value="React"
            checked={skills.includes('React')}
            onChange={this.handleSkillsChange}
          />
          React
        </div>
        <div>
          <input
            type="checkbox"
            name="agree"
            checked={agree}
            onChange={this.handleChange}
          />
          agree al the term and condition
        </div>
        <button onClick={() => console.log(this.state)}> Show Data</button>
      </div>
    );
  }
}

export default Form;

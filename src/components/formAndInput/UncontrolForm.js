import React, { Component } from 'react';
import './uncontrol.css';

class UncontrolForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const data = {};
    data.name = e.target.name.value;
    data.email = e.target.email.value;
    data.password = e.target.password.value;
    console.log(data);
    e.target.reset();
  };
  render() {
    return (
      <div className="uncontrol" onSubmit={this.handleSubmit}>
        <form>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Joney Talukdar"
          />
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Joneytalukdar30@gamil"
          />
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="********"
          />{' '}
          <button className="btn btn-primary" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default UncontrolForm;

import React from 'react';
import './profile.style.css';

class Profile extends React.Component {
  render() {
    return (
      <div className="Main">
        <div className="Bio">
          <h3>Joney Talukdar</h3>
          <p>React developer and Designer</p>
        </div>
        <div className="Skills">
          <h3>Skills : </h3>
          <ul>
            <li>Java</li>
            <li>Javascript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="Links">
          <h3>Social Link</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Profile;

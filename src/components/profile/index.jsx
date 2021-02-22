import React from 'react';
import './profile.style.css';
import Bio from './Bio';
import Skills from './Skills';
import Links from './Links';

class Profile extends React.Component {
  render() {
    return (
      <div className="Main">
        <Bio />
        <Skills />
        <Links />
      </div>
    );
  }
}

export default Profile;

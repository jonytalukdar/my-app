import React from 'react';
import './profile.style.css';
import Bio from './Bio';
import Skills from './Skills';
import Links from './Links';

class Profile extends React.Component {
  me = {
    name: 'Joney Talukdar',
    title: 'React Developer',
    skillA: 'java',
    skillB: 'javascript',
    skillC: 'python',
    linkA: 'Facebook',
    linkB: 'Instragram',
    linkC: 'Skype',
    linkD: 'LinkedIn',
  };
  render() {
    // console.log('Profile- ', this.props);
    return (
      <div>
        <Bio name={this.me.name} title={this.me.title} />
        <Skills
          skillA={this.me.skillA}
          skillB={this.me.skillB}
          skillC={this.me.skillC}
        />
        <Links
          linkA={this.me.linkA}
          linkB={this.me.linkB}
          linkC={this.me.linkC}
          linkD={this.me.linkD}
        />
      </div>
    );
  }
}

export default Profile;

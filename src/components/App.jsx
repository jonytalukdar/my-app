import React from 'react';
import Profile from './profile';
import Skills from './profile/Skills';
import Bio from './profile/Bio';
// import MyProps from './props';

class App extends React.Component {
  render() {
    return (
      <div>
        <Profile />
        <Bio name="Jerry Talukdar" title="Web Designer" />
        <Skills skillA="PHP" skillB="MongoDB" skillC="Express" />
        {/* <div> */}
        {/* <MyProps name="Joney " />
          <MyProps name="Jerry " />
          <MyProps name="Jubayer " /> */}

        {/* <p>Mr x</p>
          <Skills />
          <p>Mr y</p>
          <Skills /> */}
        {/* </div> */}
      </div>
    );
  }
}

export default App;

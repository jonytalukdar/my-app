import React from 'react';
import State from './components/state/State';
// import Events from './components/events/Events';
// import Timer from './components/Timer/Timer';

class App extends React.Component {
  render() {
    return (
      <div>
        {' '}
        <h1 style={{ textAlign: 'center' }}>Hello React</h1>
        <State></State>
      </div>
    );
  }
}

export default App;

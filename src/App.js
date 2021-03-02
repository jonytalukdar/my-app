import React from 'react';
import Events from './components/events/Events';
// import Timer from './components/Timer/Timer';

class App extends React.Component {
  render() {
    return (
      <div>
        {' '}
        <h1 style={{ textAlign: 'center' }}>Hello React</h1>
        <Events></Events>
      </div>
    );
  }
}

export default App;

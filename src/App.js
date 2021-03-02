import React from 'react';
import Form from './components/formAndInput/Form';
// import State from './components/state/State';
// import Events from './components/events/Events';
// import Timer from './components/Timer/Timer';

class App extends React.Component {
  render() {
    return (
      <div>
        {' '}
        <h1 style={{ textAlign: 'center' }}>Hello React</h1>
        <Form></Form>
      </div>
    );
  }
}

export default App;

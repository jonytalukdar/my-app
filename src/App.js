import React from 'react';
// import Form from './components/formAndInput/Form';
import UncontrolForm from './components/formAndInput/UncontrolForm';
// import Chart from './components/chart/Chart';
// import Form from './components/formAndInput/Form';
// import State from './components/state/State';
// import Events from './components/events/Events';
// import Timer from './components/Timer/Timer';
// import Bootstrap from './components/bootstrap/Bootstrap';

class App extends React.Component {
  render() {
    return (
      <div>
        {' '}
        <h1 style={{ textAlign: 'center' }}>Hello React</h1>
        <UncontrolForm></UncontrolForm>
      </div>
    );
  }
}

export default App;

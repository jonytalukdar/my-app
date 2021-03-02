import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.count = 2;
  }

  render() {
    console.log(this.count);
    return (
      <div>
        <h1>hello this is state</h1>
        <h1>Count : {this.count}</h1>
      </div>
    );
  }
}

export default App;

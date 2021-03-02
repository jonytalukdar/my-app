import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  };

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.increaseCount}>increase</button>
        <button onClick={this.decreaseCount}>decrease</button>
      </div>
    );
  }
}

export default App;

import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
  };

  increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decreaseCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>
          {' '}
          <span>{this.state.count}</span>
        </h1>
        <button onClick={this.decreaseCount}>-</button>
        <button onClick={this.increaseCount}>+</button>
        <br />
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default App;

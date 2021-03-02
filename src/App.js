import React from 'react';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.count = 5;
  //   this.state = {
  //     count: 0,
  //   };
  // }
  // count = 10;

  state = {
    count: 0,
  };

  render() {
    // console.log(this.count);
    return (
      <div>
        <h1>hello this is state</h1>
        <h1>Count : {this.state.count}</h1>
        <button
          onClick={() => {
            // this.count++;
            // this.setState({ count: this.state.count + 1 });
            this.setState(
              (prev) => {
                return {
                  count: prev.count + 1,
                };
              },
              () => {
                console.log('clicked ', this.state.count);
              }
            );
            // console.log('clicked', this.state.count);
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}

export default App;

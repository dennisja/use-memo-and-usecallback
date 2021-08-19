import { Component, PureComponent, useState } from 'react';

interface CounterState {
  counter: number;
}

class PureCounter extends PureComponent<{}, CounterState> {
  state = { counter: 0 };

  increment = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  render() {
    console.log('rendering pure counter');
    return (
      <div>
        <div>Pure counter</div>
        <div>Current Value: {this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

class Counter extends Component<{}, CounterState> {
  state = { counter: 0 };

  increment = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  render() {
    console.log('rendering counter');
    return (
      <div>
        <div>Counter</div>
        <div>Current Value: {this.state.counter}</div>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default function () {
  const [counter, setCounter] = useState(0);
  console.log('rendering global counter');
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <div>Global counter</div>
        <div>Current Value: {counter}</div>
        <button onClick={() => setCounter(prevValue => prevValue + 1)}>
          Increment
        </button>
      </div>
      <div style={{ display: 'flex' }}>
        <Counter />
        <PureCounter />
      </div>
    </div>
  );
}

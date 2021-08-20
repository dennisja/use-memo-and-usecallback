import { PureComponent, Component } from 'react';
import { clampColorIndex, getColor } from '../../utils/color';

interface CounterState {
  count: number;
}

interface CounterProps {
  step: number;
  resetStep: () => void;
}

class PureCounter extends PureComponent<CounterProps, CounterState> {
  state = { count: 0 };

  increment = () => {
    this.setState(state => ({ count: state.count + this.props.step }));
  };

  render() {
    console.log('rendering pure counter');
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.props.resetStep}>Reset Step</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

class Counter extends PureComponent<
  { counterConfig: CounterProps },
  CounterState
> {
  state = { count: 0 };

  increment = (): void => {
    this.setState(state => ({
      count: state.count + this.props.counterConfig.step,
    }));
  };

  shouldComponentUpdate(nextProps: { counterConfig: CounterProps }): boolean {
    return (
      nextProps.counterConfig.step !== this.props.counterConfig.step ||
      nextProps.counterConfig.resetStep !== this.props.counterConfig.resetStep
    );
  }

  render() {
    console.log('rendering counter with object props');
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.props.counterConfig.resetStep}>Reset Step</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default class extends Component<
  {},
  { counterStep: number; colorIndex: number }
> {
  state = { counterStep: 1, colorIndex: 0 };

  resetCounterStep = () => this.setState({ counterStep: 1 });

  render() {
    console.log('rendering parent');
    return (
      <div style={{ backgroundColor: getColor(this.state.colorIndex) }}>
        <div>
          <button
            onClick={() =>
              this.setState(prevState => ({
                colorIndex: clampColorIndex(prevState.colorIndex + 1),
              }))
            }
          >
            Change Color
          </button>
        </div>
        <input
          type='number'
          onChange={e =>
            this.setState({ counterStep: Number.parseInt(e.target.value) })
          }
        />
        <PureCounter
          step={this.state.counterStep}
          resetStep={this.resetCounterStep}
        />
        <Counter
          counterConfig={{
            step: this.state.counterStep,
            resetStep: this.resetCounterStep,
          }}
        />
      </div>
    );
  }
}

import { PureComponent, Component } from 'react';
import { clampColorIndex, getColor } from '../../utils/color';
import memoize from 'memoize-one';

interface CounterState {
  count: number;
}

interface CounterProps {
  step: number;
  resetStep: () => void;
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

  getCounterConfig = memoize(
    (step: number, resetStep: CounterProps['resetStep']): CounterProps => ({
      step,
      resetStep,
    }),
  );

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

        <Counter
          counterConfig={this.getCounterConfig(
            this.state.counterStep,
            this.resetCounterStep,
          )}
        />
      </div>
    );
  }
}

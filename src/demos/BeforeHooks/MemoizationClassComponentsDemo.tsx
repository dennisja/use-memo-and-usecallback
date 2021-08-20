import { Component, memo, useState } from 'react';
import { clampColorIndex, getColor } from '../../utils/color';
import memoize from 'memoize-one';

interface CounterState {
  count: number;
}

interface CounterProps {
  step: number;
  resetStep: () => void;
}

function Counter({ step, resetStep }: CounterProps) {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(prev => prev + step);
  };

  console.log('rendering counter');

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={resetStep}>Reset Step</button>
      <p>Count: {count}</p>
    </div>
  );
}

function CounterWithConfig({
  counterConfig: { step, resetStep },
}: {
  counterConfig: CounterProps;
}) {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => {
    setCount(prev => prev + step);
  };

  console.log('rendering counter with config');

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={resetStep}>Reset Step</button>
      <p>Count: {count}</p>
    </div>
  );
}

const MemoizedCounter = memo(Counter);

function propsAreEqual(
  prevProps: { counterConfig: CounterProps },
  nextProps: { counterConfig: CounterProps },
) {
  return (
    prevProps.counterConfig.step === nextProps.counterConfig.step &&
    prevProps.counterConfig.resetStep === nextProps.counterConfig.resetStep
  );
}

const MemoizedCounterWithConfig = memo(CounterWithConfig, propsAreEqual);

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
          step={this.state.counterStep}
          resetStep={this.resetCounterStep}
        />
        <CounterWithConfig
          counterConfig={this.getCounterConfig(
            this.state.counterStep,
            this.resetCounterStep,
          )}
        />
      </div>
    );
  }
}

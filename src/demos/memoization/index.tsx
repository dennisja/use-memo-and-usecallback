import { useState } from 'react';
import { fibonacci, getRunTime, memoizedFibonacci } from './fibonacci';

export default function Memoization() {
  const [num, setNum] = useState<number>(0);
  const [runTime, setRunTime] = useState<number>(0);

  return (
    <div>
      <input
        type='number'
        name='memo'
        onChange={e => setNum(Number.parseInt(e.target.value))}
      />
      <div>Time taken: {runTime} seconds</div>
      <button
        onClick={() => {
          setRunTime(getRunTime(() => memoizedFibonacci(num)));
        }}
      >
        Memoized
      </button>{' '}
      <button
        onClick={() => {
          setRunTime(getRunTime(() => fibonacci(num)));
        }}
      >
        Un memoized
      </button>
    </div>
  );
}

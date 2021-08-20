import { memo, useState, useCallback, useMemo } from 'react';
import { clampColorIndex, getColor } from '../../utils/color';
import { fibonacci } from '../memoization/fibonacci';

const Button = memo(
  ({
    handleIncrement,
    number,
  }: {
    handleIncrement: () => void;
    number: number;
  }) => {
    console.log('Rerendered');
    return <button onClick={handleIncrement}>{number}</button>;
  },
);

export default function Hooks() {
  const [number, setNumber] = useState<number>(0);
  const [colorIndex, setColorIndex] = useState(0);

  const handleColorChange = () => {
    setColorIndex(clampColorIndex(colorIndex + 1));
  };

  const handleIncrement = useCallback(() => {
    setNumber(number => number + 1);
  }, []);

  const memoizedResult = useMemo(() => fibonacci(number), [number]);

  return (
    <div style={{ backgroundColor: getColor(colorIndex) }}>
      <header onClick={handleColorChange}>
        Fibonacci Calculator (Click Me)
      </header>
      <div>
        Fibonaci Value for {number} is {memoizedResult}{' '}
      </div>
      <Button handleIncrement={handleIncrement} number={number} />
    </div>
  );
}

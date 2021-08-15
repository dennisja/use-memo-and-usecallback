export function fibonacci(n: number): number {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const cache: Record<string, number> = { '0': 0, '1': 1 };

export function memoizedFibonacci(n: number): number {
  if (n in cache) return cache[n];

  const result = memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
  cache[n] = result;
  return result;
}

export const getRunTime = (func: () => void): number => {
  const start = performance.now();
  func();
  const stop = performance.now();
  return (stop - start) / 1000;
};

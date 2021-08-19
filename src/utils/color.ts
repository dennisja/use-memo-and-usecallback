const COLORS = ['green', 'red', 'pink', 'blue', 'papayawhip'];

export const clampColorIndex = (n: number): number => {
  if (n >= COLORS.length) {
    return 0;
  }
  return n;
};

export const getColor = (index: number): string => {
  return COLORS[index];
};

const sumArray = (input: number[]): number => {
  const result = input.reduce((acc, currentValue) => acc + currentValue, 0);
  return result;
};

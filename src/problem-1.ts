const sumArrray = (input: number[]): number => {
  const result = input.reduce((acc, currentValue) => acc + currentValue, 0);
  return result;
};

// const inputArray: number[] = [1, 2, 3, 4, 5];
// console.log(sumArrray([1, 2, 3, 4, 5]));

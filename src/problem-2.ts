const removeDuplicates = (input: number[]): number[] => {
  const uniqueNumbers = input.filter(
    (num, index) => input.indexOf(num) === index
  );
  return uniqueNumbers;
};

const removeDuplicates = (input: number[]): number[] => {
  const uniqueNumbers = input.filter(
    (num, index) => input.indexOf(num) === index
  );
  return uniqueNumbers;
};

// console.log(removeDuplicates([1, 2, 2, 3, 88, 88, 4, 4, 5, 9, 9]));

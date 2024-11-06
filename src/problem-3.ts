const countWordOccurrences = (sentence: string, word: string): number => {
  const sentenceLowerCase = sentence.toLowerCase().split(/\W+/);
  const wordLowerCase = word.toLowerCase();

  const matchWords = sentenceLowerCase.filter(
    (w) => w === wordLowerCase
  ).length;
  console.log("matchWords:", matchWords);

  return matchWords;
};

// console.log(
//   countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript")
// );
// // Output: 2

const countWordOccurrences = (sentence: string, word: string): number => {
  const sentenceLowerCase = sentence.toLowerCase().split(/\W+/);
  const wordLowerCase = word.toLowerCase();

  const matchWords = sentenceLowerCase.filter(
    (w) => w === wordLowerCase
  ).length;
  return matchWords;
};

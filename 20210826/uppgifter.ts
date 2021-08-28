export const sum = (a: number, b: number): number => {
  return a + b;
};

export const replaceString = (string: any, oldWord: string, newWord: string): any => {
  return string.replaceAll(oldWord, newWord);
};

export const doubleArray = array => {
  let doubleArray = [];
  for (let i = 0; i < array.length; i++) {
    doubleArray.push(array[i] * 2);
  }
  return doubleArray;
};

export const filterArray = array => {
  let wordArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 6) {
      wordArray.push(array[i]);
    }
  }
  return wordArray;
};

export const summation = array => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

// module.exports = {
//   sum,
//   replaceString
// };

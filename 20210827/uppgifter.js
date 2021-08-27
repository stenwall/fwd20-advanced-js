// Return an array with doubled values
// Take in number array => recieve doubled numbers

const doubleArray = (array) => {
  return array.map(item => item * 2);
}

const numberArray = [1, 2, 3];

console.log(doubleArray(numberArray));

// Return an array with filtered words
// Take in array of strings with words => recieve words of length >6

const filterArray = (array) => {
  return array.filter(item => item.length > 6);
}

const wordsArray = [
  'cat',
  'horse',
  'computer',
  'table',
  'refrigerator',
  'bottle'
];

console.log(filterArray(wordsArray));

// Return the sum of the values in an array
// Take in array with numbers => recieve singular number with the sum of the numbers

const summation = (array) => {
 return array.reduce((a, b) => a + b);
}

console.log(summation(numberArray));


module.exports = {
  doubleArray,
  filterArray,
  summation
};

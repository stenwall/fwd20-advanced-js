// Return an array with doubled values
// Take in number array => recieve doubled numbers


let numbersArray = [2, 4, 6, 8, 10];

const doubleArray = array => {
  let doubleArray = [];
  for (let i = 0; i < array.length; i++) {
    doubleArray.push(array[i] * 2);
  }
  return doubleArray;
};

console.log(doubleArray(numbersArray));

//High Order function

let outputArray = Array.from(numbersArray, x => x * 2); // creates new array
console.log(outputArray);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from


// Return an array with filtered words
// Take in array of strings with words => recieve words of length >6

const wordsArray = [
  'cat',
  'horse',
  'computer',
  'table',
  'refrigerator',
  'bottle'
];

const filterArray = array => {
  let wordArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 6) {
      wordArray.push(array[i]);
    }
  }
  return wordArray;
};

console.log(filterArray(wordsArray));

// Return the sum of the values in an array
// Take in array with numbers => recieve singular number with the sum of the numbers

const summation = array => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(summation(numbersArray));

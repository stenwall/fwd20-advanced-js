const doubleArray = array => {
  let doubleArray = [];
  for (let i = 0; i < array.length; i++) {
    doubleArray.push(array[i] * 2);
  }
  return doubleArray;
};

const filterArray = array => {
  let wordArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 6) {
      wordArray.push(array[i]);
    }
  }
  return wordArray;
};

const summation = array => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

const fetchData = () => {
  return new Promise((resolve, reject) => {
    resolve('Hello');
  })
}

module.exports = {
  doubleArray,
  filterArray,
  summation,
  fetchData
}


// module.exports = {
//     arrayMethod: doubleArray,
//     filterMethod: filterArray,
//     summationMethod: summation
// }

const { doubleArray, filterArray , summation, fetchData } = require('./uppgifter');

// const functionalModule = require('./uppgifter');

// const doubleArray = functionalModule.arrayMethod;
// const filterArray = functionalModule.filterMethod;
// const summation = functionalModule.summationMethod;

const wordsArray = [
  'cat',
  'horse',
  'computer',
  'table',
  'refrigerator',
  'bottle'
];

test('Double all numbers in incoming array', () => {
  expect([2, 4, 6]).toEqual(doubleArray([1, 2, 3]));
});

test('Return only words with 6 or more letters from incoming array', () => {
  expect(filterArray(wordsArray)).toEqual(['computer', 'refrigerator']);
});

test('Return sum of all numbers from incoming array', () => {
  expect(summation([1, 2, 3, 4])).toBe(10);
});

test('promise testing', () => {
  return fetchData()
    .then(data => {
      expect(data).toBe('Hello'); });
});

// PUT
test.each([
  // [1, 1, 4], // borde faila
  [1, 2, 3], // borde gå igenom
  [2, 1, 3] // borde gå igenom
])('.add(%i, %i)', (a, b, expected) => {
  expect(a + b).toBe(expected);
});

const { doubleArray, filterArray , summation, fetchData } = require('./uppgifter');

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
  [[1, 1, 4], [2, 2, 8]],
  [[1, 2, 3], [2, 4, 6]],
  [[2, 1, 3], [4, 2, 6]]
])('.doubleArray(%i[])', (numberArray, expected) => {
  expect(doubleArray(numberArray)).toEqual(expected);
});

test.each([
  [['cat', 'dog', 'hamster'], ['hamster']],
  [['table', 'chair', 'computer'], ['computer']],
  [['mug', 'key', 'phone'], []]
])('.filterArray(%s[])', (wordArray, expected) => {
  expect(filterArray(wordArray)).toEqual(expected);
});

test.each([
  [[1, 1, 4], 6],
  [[1, 2, 3], 6],
  [[2, 1, 3], 6]
])('.summation(%i[])', (numberArray, expected) => {
  expect(summation(numberArray)).toBe(expected);
});

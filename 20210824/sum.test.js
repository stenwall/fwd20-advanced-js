const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// PUT
test.each([
  // [1, 1, 4], // borde faila
  [1, 2, 3], // borde gå igenom
  [2, 1, 3] // borde gå igenom
])('blabla', (a, b, expected) => {
  expect(a + b).toBe(expected);
});

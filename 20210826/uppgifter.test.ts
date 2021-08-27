// const { sum, replaceString } = require('./uppgifter');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Test replaceAll', () => {
  expect('Tre sjösjuka sjömäns sjösjuka situation.').toEqual(
    replaceString('Tre sjuka sjömäns sjuka situation.', 'sjuka', 'sjösjuka')
  );
});
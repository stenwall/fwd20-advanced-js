const { replaceString } = require('./uppgifter');

test('Test replaceAll', () => {
  expect('Tre sjösjuka sjömäns sjösjuka situation.').toEqual(
    replaceString('Tre sjuka sjömäns sjuka situation.', 'sjuka', 'sjösjuka')
  );
});

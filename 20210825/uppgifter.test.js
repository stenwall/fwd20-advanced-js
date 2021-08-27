const { replaceString } = require('./uppgifter');

test('Test replaceAll', () => {
  expect('Tre sjösjuka sjömäns sjösjuka situation.').toEqual(
    replaceString('Tre sjuka sjömäns sjuka situation.', 'sjuka', 'sjösjuka')
  );
});

// PUT
test.each([
  ['jag kan räkna till tre', 'tre', 'fyra', 'jag kan räkna till fyra'],
  ['hejsan hoppsan', 'hoppsan', 'svejsan', 'hejsan svejsan'],
  ['huset är blått', 'blått', 'nu svart', 'huset är nu svart']
])('.replaceString(%s, %s, %s)', (string, oldWord, newString, expected) => {
  expect(replaceString(string, oldWord, newString)).toEqual(expected);
});

import { sum, replaceString, doubleArray, filterArray, summation } from './uppgifter';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test('Test replaceAll', () => {
    expect('Tre sjösjuka sjömäns sjösjuka situation.').toEqual(
      replaceString('Tre sjuka sjömäns sjuka situation.', 'sjuka', 'sjösjuka')
    );
  });
  
  test('Double all numbers in incoming array', () => {
    expect([2, 4, 6]).toEqual(doubleArray([1, 2, 3]));
  });
  
  test('Return only words with 6 or more letters from incoming array', () => {
    expect(
      filterArray(['cat', 'horse', 'computer', 'table', 'refrigerator', 'bottle'])
    ).toEqual(['computer', 'refrigerator']);
  });
  
  test('Return sum of all numbers from incoming array', () => {
    expect(summation([1, 2, 3, 4])).toBe(10);
  });
  
const functionalModule = require('./uppgifter');

const doubleArray = functionalModule.arrayMethod;
const filterArray = functionalModule.filterMethod;
const summation = functionalModule.summationMethod;

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

// test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
// });


function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.area = function () {
  return Math.PI * this.radius * this.radius;
};
// Constructor pattern for creating new objects
let circle1 = new Circle(5);

let Circle = {
  create(radius) {
    // Creating prototypal linkage using Object.create
    let obj = Object.create(this);
    obj.radius = radius;
    return obj;
  },
  area() {
    return Math.PI * this.radius * this.radius;
  }
};

let circle2 = Circle.create(5);

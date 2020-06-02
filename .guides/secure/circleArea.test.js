const circleArea = require('./circleArea');

test('Check with positive numbers', () => {
  expect(circleArea(0)).toBe(0);
  expect(circleArea(1)).toBe(Math.PI);
  expect(circleArea(5)).toBe(Math.PI * Math.pow(5, 2));
});

test('Check with non-numbers', () => {
  function nonNumbers() {
    circleArea("cat")
  }
  expect(nonNumbers).toThrow('Radius must be a number');
});

test('Check with negative numbers', () => {
  function negativeNumbers() {
    circleArea(-5)
  }
  expect(negativeNumbers).toThrow('Radius must be a positive number');
});
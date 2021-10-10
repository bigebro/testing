const calculator = require('../code/calculator')

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
}); 

test('subtracts from 2 - 1 to equal 1', () => {
  expect(calculator.subtract(2, 1)).toBe(1);
}); 

test('multiply by 2 * 1 to equal 2', () => {
  expect(calculator.multiply(2, 1)).toBe(2);
}); 

test('divide 2 / 1 to equal 2', () => {
  expect(calculator.divide(2, 1)).toBe(2);
}); 
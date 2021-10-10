const capitalize = require('../code/capitalize');
test('returns the first letter capitalized', () => {
  expect(capitalize('john')).toBe('John');
});
const caesarCipher = require('../code/caesarCipher')

test('to convert text like as caesar function would be', () => {
  expect(caesarCipher("attackatdawn")).toStrictEqual("buubdlbuebxo")
}); 
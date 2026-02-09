const sum = require('./sum');

test('adds 2 + 2 to equal 4', () => {
  expect(sum(2, 2)).toBe(4);
});

test('adds 1 + 11 to equal 12', () => {
  expect(sum(1, 11)).toBe(12);
});

test('adds 0 + 23 to equal 23', () => {
  expect(sum(0, 23)).toBe(23);
});


test('adds 7 + 4 to equal 11', () => {
  expect(sum(7, 4)).toBe(11);
});









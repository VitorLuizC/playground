import append from './append.js';

test('returns new array', () => {
  const array = [1, 2, 3, 4];

  expect(append(array, 5)).not.toBe(array);
});

test('appends value at the end of new array', () => {
  const array = [1, 2, 3, 4];

  expect(append(array, 5)).toEqual([1, 2, 3, 4, 5]);
});

test("doesn't concat when receives another array as argument", () => {
  const array = [1, 2, 3, 4];

  expect(append(array, [5])).toEqual([1, 2, 3, 4, [5]]);
});

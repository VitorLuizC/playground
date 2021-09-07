import isTypeOf from './isTypeOf';

test('returns a predicate to check if value is of type', () => {
  const isString = isTypeOf('string');

  expect(isString(1)).toBe(false);
  expect(isString('foo')).toBe(true);
});

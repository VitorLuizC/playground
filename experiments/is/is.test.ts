import is from './is';

test('creates a predicate function', () => {
  expect(is`string`('foo')).toBe(true);
  expect(is`string`(1)).toBe(false);

  expect(is`string or number`('foo')).toBe(true);
  expect(is`string or number`(1)).toBe(true);
  expect(is`string or number`(true)).toBe(false);
  
  expect(is`number or equals ${'Vitor'}`('foo')).toBe(false);
  expect(is`number or equals ${'Vitor'}`(1)).toBe(true);
  expect(is`number or equals ${'Vitor'}`('Vitor')).toBe(true);
});

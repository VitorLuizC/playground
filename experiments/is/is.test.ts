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

  expect(is`number and equals ${2} or equals ${2}`(2)).toBe(true);
  expect(is`number and equals ${2} or equals ${1}`(1)).toBe(true);
  expect(is`number and equals ${2} or equals ${1}`(0)).toBe(false);
});

test('throws when empty', () => {
  expect(() => is``('foo')).toThrow()
});

test('throws when infix used without left argument', () => {
  expect(() => is`or string`('foo')).toThrow()
});

test('throws when infix used without right argument', () => {
  expect(() => is`string or`('foo')).toThrow()
});

test('throws when prefix used without argument', () => {
  expect(() => is`not`('foo')).toThrow()
});

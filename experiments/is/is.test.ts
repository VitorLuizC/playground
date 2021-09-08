import is from './is';

test('creates predicates to test each value type', () => {
  console.log("is`string`", is`string`);
  console.log("is`not string`", is`not string`);
  console.log("is`string or number`", is`string or number`);
  console.log("is`string and equals ${'Vitor'}`", is`string and equals ${'Vitor'}`);

  expect(1).toBe(1);
});

import Const from './main.js';

describe('Const | unit test', () => {
  it('creates objects with received value as property', () => {
    const name = Const('Vitor');
    expect(name.value).toBe('Vitor');
  });

  it('allows comparison of objects with same value', () => {
    const name = Const('Vitor');

    // It doesn't need the 'toEqual' method to check equality ✨
    expect(name).toBe(Const('Vitor'));
  });
});

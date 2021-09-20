import Tuple from './main';

describe('Tuple | constructor | unit test', () => {
  it('creates a tuple from received arguments', () => {
    const user = Tuple('Vitor', new Date(1996, 2, 28));

    expect(user[0]).toBe('Vitor');
    expect(user[1]).toEqual(new Date(1996, 2, 28));
  });

  it('allows destructuring', () => {
    const [name, dateOfBirth] = Tuple('Vitor', new Date(1996, 2, 28));

    expect(name).toBe('Vitor');
    expect(dateOfBirth).toEqual(new Date(1996, 2, 28));
  });

  it('allows comparision with equality operators', () => {
    expect(Tuple(1, 2, 3)).toBe(Tuple(1, 2, 3));
    expect(Tuple(1, 2)).not.toBe(Tuple(1, 2, 3));
    expect(Tuple(1, "Vitor")).toBe(Tuple(1, "Vitor"));
  });
});

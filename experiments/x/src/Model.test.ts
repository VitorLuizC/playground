import Model from './Model.js';

describe('Model', () => {
  it('creates a model from attributes', () => {
    const user = new Model({
      id: 0,
    });

    expect(user.attributes.id).toBe(0);

    user.attributes.id = 1;

    expect(user.attributes.id).toBe(0);
  })
})

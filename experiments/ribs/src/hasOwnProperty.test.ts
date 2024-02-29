import hasOwnProperty from "./hasOwnProperty.js";

describe("hasOwnProperty", () => {
  beforeEach(() => {
    // @ts-expect-error because the 'toXML' doesn't exist in 'Object' interface,
    //                  but since we create and only use it here that's okay.
    Object.prototype.toXML = function toXML() {
      return "";
    };
  });

  afterEach(() => {
    // @ts-expect-error because the 'toXML' doesn't exist in 'Object' interface,
    //                  but since we're only creating it here that's okay.
    delete Object.prototype.toXML;
  });

  it("checks if object has a property", () => {
    const user = {
      id: 1,
    };

    expect(hasOwnProperty(user, "id")).toBe(true);
    expect(hasOwnProperty(user, "email")).toBe(false);

    // It isn't 'user' own property, but a prototype one.
    expect(hasOwnProperty(user, "toXML")).toBe(false);
  });
});

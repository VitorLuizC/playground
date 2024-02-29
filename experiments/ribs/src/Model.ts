import hasOwnProperty from "./hasOwnProperty";

abstract class Model<T extends object> extends EventTarget {
  private _attributes: T = Object.create(null);

  attributes = new Proxy<T>(this._attributes, {
    get: (_, key) => {
      if (typeof key === "symbol") {
        throw new Error(`Can't get attribute "${key.toString()}".`);
      }

      return this._attributes[key as keyof T];
    },

    set: (_, key, value) => {
      if (typeof key === "symbol") {
        throw new Error(`Can't set attribute "${key.toString()}".`);
      }

      if (Object.is(this._attributes[key as keyof T], value)) return true;

      // TODO: Update the model attribute and call event listener.

      return true;
    },
  });

  constructor(attributes: T) {
    super();

    for (let key in attributes) {
      if (!hasOwnProperty(attributes, key)) continue;

      this._attributes[key] = attributes[key];
    }
  }

  resolveIdentifier() {

  }
}

export default Model;

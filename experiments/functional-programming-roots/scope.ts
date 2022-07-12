/**
 * It's an 'interface' just to allow module augmentation.
 */
export interface Scope {}

/** An object that keeps the scope. */
const scope = {} as Scope;

export function define<Name extends keyof Scope>(name: Name, value: Scope[Name]) {
  scope[name] = value;
}

export function use<Name extends keyof Scope>(name: Name): Scope[Name] {
  return scope[name];
}

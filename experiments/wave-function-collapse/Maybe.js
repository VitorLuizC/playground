// @ts-check

/** @template T */
class Maybe {
  /**
   * @private
   * @param {'some' | 'none'} type
   * @param {T} value
   */
  constructor(type, value) {
    this._type = type;
    this._value = value;
  }

  isNone() {
    return this._type === 'none';
  }

  isSome() {
    return this._type === 'some';
  }

  unwrap() {
    if (this._value === 'none') return null

    return this._value
  }

  /** @param {(value: T) => void} fn */
  tap(fn) {
    if (this._type === 'none') return

    fn(this._value);
  }

  /**
   * @private
   * @type {Maybe<never> | null}
   */
  static _none = null;

  static None() {
    return (this._none ??= new Maybe('none', /** @type {never} */(null)));
  }

  /**
   * @param {T} value
   * @template T
   */
  static Some(value) {
    return new Maybe('some', value);
  }
}

export default Maybe

import getReadonlyDescriptors from './getReadonlyDescriptors';

type Maybe<T> = Maybe.None<T> | Maybe.Some<T>;

namespace Maybe {
  export interface None<_T> {
    readonly kind: 'None';
  }

  export interface Some<T> {
    readonly kind: 'Some';
    readonly value: T;
  }

  export const none: Maybe<any> = Object.create(null, {
    kind: getReadonlyDescriptors('None'),
  });

  export function some<T>(value: T): Maybe<T> {
    return Object.create(null, {
      kind: getReadonlyDescriptors('Some'),
      value: getReadonlyDescriptors(value),
    });
  }

  export function isNone<T = any>(maybe: Maybe<T>): maybe is None<T> {
    return maybe === none;
  }

  export function isSome<T = any>(maybe: Maybe<T>): maybe is Some<T> {
    return maybe !== none;
  }

  export function map<T, T2>(maybe: Maybe<T>, fn: (value: T) => T2): Maybe<T2> {
    return isNone(maybe) ? none : some(fn(maybe.value));
  }

  export function chain<T, T2>(
    maybe: Maybe<T>,
    fn: (value: T) => Maybe<T2>,
  ): Maybe<T2> {
    return isNone(maybe) ? none : fn(maybe.value);
  }

  export interface MaybePattern<T, U> {
    none(): U;
    some(value: T): U;
  }

  export function match<T, U>(maybe: Maybe<T>, pattern: MaybePattern<T, U>): U {
    return isNone(maybe) ? pattern.none() : pattern.some(maybe.value);
  }
}

export default Maybe;

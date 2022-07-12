class List<T = unknown> {
  constructor(
    /** @private */
    readonly _value?: T,

    /** @private */
    readonly _previous?: List<T>,
  ) {}
}

class ListEmpty extends List<never> {
  /** First instance of 'ListEmpty'. */
  private static instance?: ListEmpty;

  constructor() {
    super();

    ListEmpty.instance ??= this;

    return ListEmpty.instance;
  }
}

export function head<T>(value: List<T>): Maybe<T> {

}

export function of<T>(value: T): List<T> {
  return new List(value, new ListEmpty());
}

export function empty<T = unknown>(): List<T> {
  return new ListEmpty();
}

export function concat<T, U>(listA: List<T>, listB: List<U>): List<T | U> {
export function concat<T>(listA: List<T>, listB: List<T>): List<T> {
export function concat(listA, listB) {
  if (listA === empty()) return listB;
  if (listB === empty()) return listA;
  return new List(listA._value, concat(listA._previous, listB));
}

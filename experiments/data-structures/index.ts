type Brand<Type, Name extends PropertyKey> = Type & {
  readonly __brand: unique symbol;
  readonly name: Name;
  readonly type: Type;
};

type ListEmpty = Brand<symbol, 'ListEmpty'>;

type List<T> = ListEmpty | [T, List<T>];

const Empty = Symbol('ListEmpty') as ListEmpty;

function createList<T>(): List<T> {
  return Empty;
}

function isEmpty<T>(list: List<T>): list is ListEmpty {
  return list === Empty;
}

function append<T>(list: List<T>, value: T): List<T> {
  return [value, list];
}

function first<T>(list: List<T>): T {
  if (isEmpty(list)) 
}

function concat<T>(listA: List<T>, listB: List<T>): List<T> {
  if (isEmpty(listA)) return listB;
  return [listB, listA];
}

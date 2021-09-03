type Maybe<T> = None<T> | Some<T>;

interface Functor<T> {
  map<T2>(fn: (value: T) => T2): Functor<T2>;
}

interface None<T> extends Functor<T> {
  map<T2>(): Maybe<T2>;
}

interface Some<T> extends Functor<T> {
  map<T2>(fn: () => ): Maybe<T>;
}

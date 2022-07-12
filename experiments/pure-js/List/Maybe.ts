// construtores ao invés de classes?
// const list = List.of(1, 2, 3);
// const list = new List(1, 2, 3);
// const list = createList(1, 2, 3);

// funções estáticas ao invés de métodos?

// Construtores devem ser classes, porque é mais fácil

// Applicative

abstract class Maybe<T> {
  
}

class Some<T> extends Maybe<T> {}

class None extends Maybe<never> {}

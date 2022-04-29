import Maybe from './Maybe';

function indexOf<T>(array: T[], value: T): Maybe<number> {
  const indexOf = array.indexOf(value);
  return indexOf === -1 ? Maybe.none : Maybe.some(indexOf);
}

Maybe.match(indexOf([], 1), {
  none: () => 'Not found',
  some: (index) => `Found at ${index} position`,
});

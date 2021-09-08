import type Predicate from '../Predicate';
import type Refinement from '../Refinement';

function equals<T>(valueA: T): Refinement<unknown, T>;
function equals(valueA: unknown): Predicate;
function equals(valueA: unknown) {
  return (valueB: unknown) => Object.is(valueA, valueB);
}

export default equals;

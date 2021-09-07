import type Predicate from '../Predicate';
import type Refinement from '../Refinement';

function or<T, U extends T, V extends T>(
  predicateA: Refinement<T, U>,
  predicateB: Refinement<T, V>,
): Refinement<T, U | V>;
function or<T, U extends T>(
  predicateA: Refinement<T, U>,
  predicateB: Predicate<T>,
): Refinement<T, U>;
function or<T, V extends T>(
  predicateA: Predicate<T>,
  predicateB: Refinement<T, V>,
): Refinement<T, V>;
function or<T>(
  predicateA: Predicate<T>,
  predicateB: Predicate<T>,
): Predicate<T>;
function or(predicateA: Predicate, predicateB: Predicate): Predicate {
  return (value: unknown) => predicateA(value) || predicateB(value);
}

export default or;

import type Not from '../Not';
import type Predicate from '../Predicate';
import type Refinement from '../Refinement';

function not<T, U extends T>(predicate: Refinement<T, U>): Refinement<T, Not<T, U>>;
function not<T = unknown>(predicate: Predicate<T>): Predicate<T>;
function not(predicate: Predicate): Predicate {
  return (value: unknown) => !predicate(value);
}

export default not;

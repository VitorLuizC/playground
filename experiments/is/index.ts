// string
// => isString
// not <predicate>
// => isNot(predicate)
// <predicate> or <predicate>
// => isAny(predicate, predicate)
// array of <predicate>
// => isAnd(isArray, isArrayOf(predicate))
// not array of string
// => isNot(isAnd(isArray, isArrayOf(isString)))

import is from './is';
import type Predicate from './Predicate';
// import type Refinement from './Refinement';

type Token = {
  type: string;
  value: Predicate;
};

export default is;

import type Predicate from '../Predicate';
import type Refinement from '../Refinement';

function isTypeOf(type: 'bigint'): Refinement<unknown, bigint>;
function isTypeOf(type: 'number'): Refinement<unknown, number>;
function isTypeOf(type: 'object'): Refinement<unknown, null | object>;
function isTypeOf(type: 'string'): Refinement<unknown, string>;
function isTypeOf(type: 'symbol'): Refinement<unknown, symbol>;
function isTypeOf(type: 'boolean'): Refinement<unknown, boolean>;
function isTypeOf(type: 'function'): Refinement<unknown, (...args: unknown[]) => unknown>;
function isTypeOf(type: 'undefined'): Refinement<unknown, undefined>;
function isTypeOf(type: string): Predicate {
  return (value) => typeof value === type;
}

export default isTypeOf;
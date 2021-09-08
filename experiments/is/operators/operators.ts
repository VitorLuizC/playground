import type Predicate from '../Predicate';
import type UnaryFunction from '../types/UnaryFunction';
import type BinaryFunction from '../types/BinaryFunction';

import or from './or';
import and from './and';
import not from './not';
import equals from './equals';

export enum OperatorType {
  INFIX,
  PREFIX,
  POSTFIX,
}

type Operator =
  | {
    type: OperatorType.PREFIX | OperatorType.POSTFIX;
    operator: UnaryFunction<Predicate>;
  }
  | {
    type: OperatorType.INFIX;
    operator: BinaryFunction<Predicate>;
  }

const operators: Record<string, Operator> = {
  'not': {
    type: OperatorType.PREFIX,
    operator: not,
  },
  'and': {
    type: OperatorType.INFIX,
    operator: and,
  },
  'or': {
    type: OperatorType.INFIX,
    operator: or,
  },
  'equals': {
    type: OperatorType.PREFIX,
    operator: equals,
  },
};

export default operators;

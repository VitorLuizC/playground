import type Node from './Node';
import type RootNode from './RootNode';
import type Predicate from '../Predicate';
import type UnaryFunction from '../types/UnaryFunction';
import type BinaryFunction from '../types/BinaryFunction';

import NodeType from './NodeType';

type Options = {
  parent: RootNode | OperatorNode;
  operator:
    | UnaryFunction<Predicate>
    | BinaryFunction<Predicate>;
  children: null | Node | [Node, null | Node];
};

class OperatorNode {
  type = NodeType.OPERATOR;
  parent: RootNode | OperatorNode;
  children: null | Node | [Node, null | Node];
  operator:
    | UnaryFunction<Predicate>
    | BinaryFunction<Predicate>;

  constructor({ parent, children, operator }: Options) {
    this.parent = parent;
    this.children = children;
    this.operator = operator;
  }
};

export default OperatorNode;

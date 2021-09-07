import type OperatorNode from "./OperatorNode";

import NodeType from './NodeType';

type Options = {
  value: unknown;
  parent: OperatorNode;
};

class ValueNode {
  type = NodeType.VALUE;
  value: unknown;
  parent: OperatorNode;

  constructor({ value, parent, }: Options) {
    this.value = value;
    this.parent = parent;
  }
}

export default ValueNode;

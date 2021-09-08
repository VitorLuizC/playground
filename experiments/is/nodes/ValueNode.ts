import type OperatorNode from "./OperatorNode";

import NodeType from './NodeType';
import type RootNode from './RootNode';

type Options = {
  value: unknown;
  parent: RootNode | OperatorNode;
};

class ValueNode {
  readonly type = NodeType.VALUE;

  value: unknown;
  parent: RootNode | OperatorNode;

  constructor({ value, parent, }: Options) {
    this.value = value;
    this.parent = parent;
  }
}

export default ValueNode;

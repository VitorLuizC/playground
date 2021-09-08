import type RootNode from './RootNode';
import type Predicate from '../Predicate';
import type OperatorNode from './OperatorNode';

import NodeType from './NodeType';

type Options = {
  parent: RootNode | OperatorNode;
  predicate: Predicate;
}

class PredicateNode {
  readonly type = NodeType.PREDICATE;

  parent: RootNode | OperatorNode;
  predicate: Predicate;

  constructor({ parent, predicate }: Options) {
    this.parent = parent;
    this.predicate = predicate;
  }
}

export default PredicateNode;

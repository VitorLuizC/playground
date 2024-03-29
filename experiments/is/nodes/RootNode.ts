import NodeType from './NodeType';
import type Node from './Node';

class RootNode {
  readonly type = NodeType.ROOT;

  parent = null;
  children: null | Node = null;
}

export default RootNode;

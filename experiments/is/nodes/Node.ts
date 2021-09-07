import type RootNode from './RootNode';
import type ValueNode from './ValueNode';
import type OperatorNode from './OperatorNode';
import type PredicateNode from './PredicateNode';

type Node = 
 | RootNode
 | ValueNode
 | OperatorNode
 | PredicateNode;
 
export default Node;

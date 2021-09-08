import type Node from './nodes/Node';

import isTypeOf from './predicates/isTypeOf';
import isTypeName from './predicates/isTypeName';
import append from './append';

import NodeType from './nodes/NodeType';
import RootNode from './nodes/RootNode';
import ValueNode from './nodes/ValueNode';
import OperatorNode from './nodes/OperatorNode';
import PredicateNode from './nodes/PredicateNode';
import operators from './operators/operators';
import type BinaryFunction from './types/BinaryFunction';
import type Predicate from './Predicate';
import type UnaryFunction from './types/UnaryFunction';

const SEQUENCE_OF_WHITE_SPACES = /\s+/;

enum OperatorType {
  INFIX,
  PREFIX,
  POSTFIX,
}

function is(keywords: TemplateStringsArray, ...interpolations: unknown[]) {

  // Tokenization

  const tokens = keywords.flatMap((keyword, index) => (
    // The 'index' is lower the array's length when there's an element at its position.
    index < interpolations.length
      ? append(keyword.split(SEQUENCE_OF_WHITE_SPACES), { value: interpolations[index] })
      : keyword.split(SEQUENCE_OF_WHITE_SPACES)
  ));

  // Parsing

  const tree = new RootNode();

  let lastNode: Node = tree;
  let parentNode: RootNode | OperatorNode = tree;

  tokens.forEach((token) => {
    // Interpolações
    if (typeof token !== 'string') {
      if (parentNode.type !== NodeType.OPERATOR) {
        throw new Error(`Não há operação para receber o valor "${token.value}"`);
      }

      const node = new ValueNode({
        value: token.value,
        parent: parentNode,
      });

      if (Array.isArray(parentNode.children)) {
        parentNode.children[1] = node;
      } else {
        parentNode.children = node;
      }

      lastNode = node;
      return;
    }

    if (token === '') return;

    // Operações
    if (token in operators) {
      const operator = operators[token]!;

      const node = new OperatorNode({
        parent: parentNode,
        children: null,
        operator: operator.operator,
      });

      if (operator.type === OperatorType.POSTFIX) {
        if (parentNode.type === NodeType.ROOT)
          throw new Error(`A expressão não pode começar com "${token}".`);

        node.children = lastNode;

        // Substitui o nó atual pelo nó criado que vai conter o atual.
        if (Array.isArray(parentNode.parent.children)) {
          parentNode.parent.children.splice(parentNode.parent.children.indexOf(parentNode), 1, node as OperatorNode);
        } else {
          parentNode.parent.children = node as OperatorNode;
        }

        parentNode = node as OperatorNode;
      }

      if (operator.type === OperatorType.INFIX) {
        if (lastNode.type === NodeType.ROOT) {
          throw new Error(`A expressão não pode começar com "${token}".`);
        }

        node.children = [lastNode, null];

        // Substitui o nó atual pelo nó criado que vai conter o atual.
        if (Array.isArray(lastNode.parent.children)) {
          lastNode.parent.children.splice(lastNode.parent.children.indexOf(parentNode), 1, node);
        } else {
          lastNode.parent.children = node;
        }

        parentNode = node;
      }

      if (operator.type === OperatorType.PREFIX) {
        node.children = null;

        if (Array.isArray(parentNode.children)) {
          parentNode.children[1] = node;
        } else {
          parentNode.children = node;
        }

        parentNode = node;
      }

      lastNode = node;
      return;
    }

    // Tipos
    if (isTypeName(token)) {
      const node = new PredicateNode({
        parent: parentNode,
        predicate: isTypeOf(token),
      });

      if (Array.isArray(parentNode.children)) {
        parentNode.children[1] = node;
      } else {
        parentNode.children = node;
      }

      lastNode = node;
      return;
    }
  });

  // Evaluating
  return evaluate(tree) as Predicate  
}

function evaluate(node: Node): unknown {
  switch (node.type) {
    case NodeType.ROOT: {
      if (!node.children)
        throw new Error('A expressão não pode ser vazia.');
      return evaluate(node.children);
    }
  
    case NodeType.VALUE: {
      return node.value;
    }
  
    case NodeType.OPERATOR: {
      if (Array.isArray(node.children)) {
        const argumentA = evaluate(node.children[0]);
  
        if (!node.children[1])
          throw new Error('A operação não recebeu o segundo argumento.');
  
        const argumentB = evaluate(node.children[1]);
        const operator = node.operator as BinaryFunction<Predicate>;
        return operator(argumentA, argumentB);
      } else {
        if (!node.children)
          throw new Error('A operação não recebeu o primeiro argumento.');
  
        const operator = node.operator as UnaryFunction<Predicate>;
        const argument = evaluate(node.children);
        return operator(argument);
      }
    }
  
    case NodeType.PREDICATE: {
      return node.predicate;
    }
  }
}

export default is;

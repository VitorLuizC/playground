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

// is`string or equals ${"Vitor"}`;

// ..:: arguments ::..
// ["string or equals ", ""]
// ["Vitor"]

// ..:: tokenization ::..
// ["string", "or", "equals", "", { value: "Vitor" }, ""]

// ..:: parsealization ::..
// RootNode {
//   OperatorNode {
//     operator: OR;
//     PredicateNode {
//       predicate: isString;
//     }
//     PredicateNode {
//       predicate: isEquals("Vitor");
//     }
//   }
// }

//       root
//         ↓
//        O R
//    ↙        ↘
// isString  isEquals("Vitor")

// ..:: evaluation ::..
// or(isString, isEquals("Vitor"))

// isString, not(isNumber)


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
    if (token === '') return;

    // Interpolações
    if (typeof token !== 'string') {
      // if (parentNode.type !== NodeType.OPERATOR) {
      //   throw new Error(`Não há operação para receber o valor "${token.value}"`);
      // }

      const node = new ValueNode({
        value: token.value,
        parent: parentNode,
      });

      // Atualiza a árvore.
      if (Array.isArray(parentNode.children)) {
        parentNode.children[1] = node;
      } else {
        parentNode.children = node;
      }

      //  raiz
      //   ↓
      // equals  - OPERAÇÃO
      //   ↓
      // "Vitor" - VALOR

      // SACANAGEM
      // equals("Vitor") - PREDICADO

      if (parentNode.type === NodeType.OPERATOR) {
        const predicateNode = new PredicateNode({
          parent: parentNode.parent,
          predicate: evaluate(parentNode) as Predicate,
        });

        lastNode = predicateNode;
        parentNode = parentNode.parent;

        if (Array.isArray(parentNode.children)) {
          parentNode.children[1] = predicateNode;
        } else {
          parentNode.children = predicateNode;
        }
      } else {
        lastNode = node;
      }

      return;
    }

    // Operações
    if (token in operators) {
      const operator = operators[token]!;

      const node = new OperatorNode({
        parent: parentNode,
        children: null,
        operator: operator.operator,
      });

      if (operator.type === OperatorType.POSTFIX) {
        if (lastNode.type === NodeType.ROOT)
          throw new Error(`A expressão não pode começar com "${token}".`);

        node.children = lastNode;

        // Substitui o nó atual pelo nó criado que vai conter o atual.
        if (Array.isArray(lastNode.parent.children)) {
          lastNode.parent.children.splice(lastNode.parent.children.indexOf(lastNode), 1, node);
        } else {
          lastNode.parent.children = node;
        }
      }

      if (operator.type === OperatorType.INFIX) {
        if (lastNode.type === NodeType.ROOT) {
          throw new Error(`A expressão não pode começar com "${token}".`);
        }

        // equals
        //   ↓
        //   2

        //  or
        //   ↓   ↘
        // equals ?
        //   ↓
        //   2

        node.children = [lastNode, null];

        // Substitui o nó atual pelo nó criado que vai conter o atual.
        if (Array.isArray(lastNode.parent.children)) {
          lastNode.parent.children.splice(lastNode.parent.children.indexOf(parentNode), 1, node);
        } else {
          lastNode.parent.children = node;
        }
      }

      if (operator.type === OperatorType.PREFIX) {
        if (Array.isArray(parentNode.children)) {
          parentNode.children[1] = node;
        } else {
          parentNode.children = node;
        }
      }

      parentNode = node;
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

      // SACANAGEM
      if (parentNode.type === NodeType.OPERATOR) {
        const predicateNode = new PredicateNode({
          parent: parentNode.parent,
          predicate: evaluate(parentNode) as Predicate,
        });

        lastNode = predicateNode;
        parentNode = parentNode.parent;

        if (Array.isArray(parentNode.children)) {
          parentNode.children[1] = predicateNode;
        } else {
          parentNode.children = predicateNode;
        }
      } else {
        lastNode = node;
      }

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
        const [left, right] = node.children;
        const argumentA = evaluate(left);
  
        if (!right)
          throw new Error('A operação não recebeu o segundo argumento.');
  
        const argumentB = evaluate(right);
        const operator = node.operator as BinaryFunction<Predicate>;
        return operator(argumentA, argumentB);
      } else {
        if (!node.children)
          throw new Error('A operação não recebeu o argumento.');
        
        const argument = evaluate(node.children);
        const operator = node.operator as UnaryFunction<Predicate>;
        return operator(argument);
      }
    }
  
    case NodeType.PREDICATE: {
      return node.predicate;
    }
  }
}

export default is;

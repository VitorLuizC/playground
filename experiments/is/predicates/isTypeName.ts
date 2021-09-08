import type { TypeName } from './isTypeOf';

const TYPE_NAMES = new Set<TypeName>([
  'bigint',
  'number',
  'object',
  'string',
  'symbol',
  'boolean',
  'function',
  'undefined',
]);

function isTypeName(value: unknown): value is TypeName {
  return TYPE_NAMES.has(value as TypeName);
}

export default isTypeName;

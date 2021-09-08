type Types = {
  'bigint': bigint;
  'number': number;
  'object': null | object;
  'string': string;
  'symbol': symbol;
  'boolean': boolean;
  'function': (...args: unknown[]) => unknown;
  'undefined': undefined;
};

export type TypeName = keyof Types;

function isTypeOf<Type extends TypeName>(type: Type) {
  return (value: unknown): value is Types[Type] => typeof value === type;
}

export default isTypeOf;

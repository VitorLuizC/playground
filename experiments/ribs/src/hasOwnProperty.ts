export type HasOwnProperty<O, P extends string> = O & {
  [_ in P]: O extends { [_ in P]?: unknown } ? O[P] : unknown;
};

function hasOwnProperty<O, P extends string>(
  object: O,
  property: P
): object is HasOwnProperty<O, P> {
  return Object.prototype.hasOwnProperty.call(object, property);
}

export default hasOwnProperty;

function append<T>(array: readonly T[], value: T): readonly T[];
function append<T, U>(array: readonly T[], value: U): readonly (T | U)[];
function append(array: readonly unknown[], value: unknown): readonly unknown[] {
  return array.concat([value]);
}

export default append;

export type ConstOf<T> = {
  readonly value: T;
};

/**
 * It uses 'WeakRef' to allow 'Const' objects to be garbage collected.
 * @private
 */
export const registry = new Map<unknown, WeakRef<ConstOf<unknown>>>();

/** Prevent memory leaks by cleaning up unused 'Const' objects' registries. */
const cleanup = new FinalizationRegistry((value: unknown) => {
  registry.delete(value);
});

export default function Const<T>(value: T): ConstOf<T> {
  const ref = registry.get(value);
  let constant = ref?.deref() as undefined | ConstOf<T>;

  if (!constant) {
    constant = Object.freeze({ value });
    registry.set(value, new WeakRef(constant));
    cleanup.register(constant, value);
  }

  return constant;
}

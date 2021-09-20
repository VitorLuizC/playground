type ArrayMethods = Exclude<
  keyof unknown[],
  | number
  | typeof Symbol.iterator
>;

type TupleOf<T extends unknown[]> = readonly [...T] & Record<ArrayMethods, never> & {
  readonly size: number;
};

function* iterate<T extends unknown[]>(this: TupleOf<T>) {
  for (let index = 0; index < this.length; index++)
    yield this[index];
}

type RegistryRecord = {
  count: number;
  value?: WeakRef<TupleOf<unknown[]>>;
  readonly registry: Registry;
};

type Registry = Map<unknown, RegistryRecord>;


const record: RegistryRecord = {
  count: 0,
  registry: new Map(),
};

const cleanup = new FinalizationRegistry((values: ArrayLike<unknown>) => {
  record.count--;

  let currentRecord = record;

  for (let index = 0; index < values.length; index++) {
    const value = values[index];

    const record = currentRecord.registry.get(value);

    if (!record) return;

    record.count--;

    if (record.count < 1) {
      currentRecord.registry.delete(value);
      return;
    }

    currentRecord = record;
  }
});

function Tuple<T extends unknown[]>(...values: T): TupleOf<T>;
function Tuple() {
  const draft = Object.create(null);

  draft.length = arguments.length;
  draft[Symbol.iterator] = iterate;

  let currentRecord = record;
  for (let index = 0; index < arguments.length; index++) {
    const value = arguments[index];

    draft[index] = value;

    // Atualiza o registro.
    if (currentRecord.registry.has(value)) {
      currentRecord = currentRecord.registry.get(value)!;
      currentRecord.count++;
    } else {
      const newRecord: RegistryRecord ={
        count: 1,
        registry: new Map(),
      };
      currentRecord.registry.set(value, newRecord);
      currentRecord = newRecord;
    }
  }

  let tuple = currentRecord.value?.deref();

  if (!tuple) {
    tuple = Object.freeze(draft) as TupleOf<unknown[]>;
    currentRecord.value = new WeakRef(tuple);
    if (currentRecord.count < 1)
      currentRecord.count = 1;
    cleanup.register(tuple, arguments);
  }

  return tuple;
}

export default Tuple;

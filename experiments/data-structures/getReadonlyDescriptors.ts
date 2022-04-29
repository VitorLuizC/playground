function getReadonlyDescriptors<T>(value: T): TypedPropertyDescriptor<T> {
  return {
    value,
    writable: false,
    enumerable: true,
    configurable: false,
  };
}

export default getReadonlyDescriptors;

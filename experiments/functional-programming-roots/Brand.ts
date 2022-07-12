type Brand<Type, Name extends string> = Type & {
  readonly __brand: Name;
};

export default Brand;

type Refinement<Type, RefinedType extends Type> = (value: Type) => value is RefinedType;

export default Refinement;

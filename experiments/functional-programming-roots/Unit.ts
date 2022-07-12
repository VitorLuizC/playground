import Brand from './Brand';

/**
 * 
 */
type Unit<Name extends string> = Brand<symbol, Name>;

export default Unit;

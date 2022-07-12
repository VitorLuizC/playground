import type Unit from './Unit';

import { define } from './scope';

declare module './scope' {
  export interface Scope {
    readonly '⊤': Unit<'⊤'>;

    readonly '⊥': Unit<'⊥'>;
  }
}

define('⊤', Symbol('⊤') as Unit<'⊤'>);

define('⊥', Symbol('⊥') as Unit<'⊥'>);

import Maybe from './Maybe.js';
import { createArrayFromLength } from './index.js';

/** @typedef {readonly [m: number, n: number]} MatrixDimensions */
/** @typedef {readonly [i: number, j: number]} MatrixIndexes */
/** @template T */
export class Matrix {
  /** @param {MatrixDimensions} dimensions */
  constructor(dimensions) {
    this._m = dimensions[0];
    this._n = dimensions[1];
    this._matrix = createArrayFromLength(
      this._m,
      createArrayFromLength.bind(this._n, () => null)
    );
  }

  /** @returns {Iterator<readonly [value: T | null, i: number, j: number]>} */
  *[Symbol.iterator]() {
    for (let i = 0; i < this._m; i++) {
      for (let j = 0; j < this._n; j++) {
        yield [this._matrix[i][j], i, j];
      }
    }
  }

  /** @param {MatrixIndexes} indexes */
  lensFor(indexes) {
    return new MatrixLens(this._matrix, indexes);
  }
}
/** @template T */
export class MatrixLens {
  /**
   * @param {T[][]} matrix
   * @param {MatrixIndexes} indexes
   */
  constructor(matrix, indexes) {
    this._matrix = matrix;
    this._i = indexes[0];
    this._j = indexes[1];
  }

  /** @returns {Maybe<T>} */
  get() {
    const row = this._matrix.at(this._i);

    if (row === undefined) return Maybe.None();

    const cell = row.at(this._j);

    if (cell === undefined) return Maybe.None();

    return Maybe.Some(/** @type {T} */(cell));
  }

  /** @param {T} value */
  set(value) {
    this._matrix[this._i] ??= [];
    this._matrix[this._i][this._j] = value;
  }
}

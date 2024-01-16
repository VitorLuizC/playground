// @ts-check

import { MatrixLens, Matrix } from './MatrixLens.js'

/**
 * @typedef {({ name: string } | null)[][]} Tiles
 * [0][0] [0][1] [0][2] [0][3]
 * [1][0] [1][1] [1][2] [1][3]
 * [2][0] [2][0] [2][0] [2][0]
 * [3][0] [2][0] [2][0] [2][0]
 */

const tiles = [
  {
    name: 'water',
  },
  {
    name: 'sand',
  },
  {
    name: 'grass',
    /** @param {Tiles} tiles */
    constraint: (tiles) => {
      return tiles.flat(1).every((item) => {
        return item?.name !== 'water'
      })
    },
  },
]

/**
 * @param {number} length
 * @param {(index: number) => T} map
 * @returns {T[]}
 * @template T
 */
export function createArrayFromLength(length, map) {
  return Array.from({ length }, (_, index) => map(index))
}

/**
 * @param {T[][]} matrix
 * @param {[m: number, n: number]} size
 * @returns {MatrixLens<T>}
 * @template T
 */
function random(matrix, size) {
  const m = Math.floor(Math.random() * size[0])
  const n = Math.floor(Math.random() * size[0])

  return new MatrixLens(matrix, [m, n])
}

function run(tiles, options, render, x) {
  const matrix = new Matrix([4, 4]);

  for (const [value, i, j] of matrix) {
    matrix.lensFor([i, j]).set(

    )
  }
}

run(tiles, { matrix: [4, 4] }, (tiles) => {
  for (const row of tiles) {
    for (const col of row) {
      process.stdout.write(col?.name ?? 'Empty')
    }

    process.stdout.write('\n')
  }
})

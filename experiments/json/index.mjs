import * as fs from 'node:fs';
import * as Json from '@bitty/json';

const file = Json.fromJSON(
  fs.readFileSync('./package.json', { encoding: 'utf-8' }),
);

console.log(file);

'use strict';

const fs = require('fs');
const Json = require('@bitty/json');

const file = Json.fromJSON(
  fs.readFileSync('./package.json', { encoding: 'utf-8' }),
);

console.log(file);

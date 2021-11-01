const assertArraysEqual = require('../src/assertArraysEqual');
const eqArrays = require('../src/eqArrays');

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
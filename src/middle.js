const assertEqual = require('../src/assertEqual');
const assertArraysEqual = require('../src/assertArraysEqual');
const eqArrays = require('../src/eqArrays');

const middle = (array) => {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.floor((array.length / 2) - 1)], array[Math.floor(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;
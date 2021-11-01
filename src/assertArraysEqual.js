const eqArrays = require('../src/eqArrays');

const assertArraysEqual = (index1, index2) => {
  if (eqArrays(index1, index2)) {
    console.log(`✅✅✅ ${index1} === ${index2}`);
  } else {
    console.log(`❌❌❌ ${index1} !== ${index2}`);
  };
};

module.exports = assertArraysEqual;
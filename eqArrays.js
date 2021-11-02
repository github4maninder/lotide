const assertEqual = require('./assertEqual')

// FUNCTION IMPLEMENTATION
const eqArrays = (index1, index2) => {
  if (index1.length !== index2.length) {
    return false;
  } else {
    for (let i = 0; i < index1.length; i++) {
      if (index1[i] !== index2[i]) {
        return false;
      }
    }
    return true;
  }
};
module.exports = eqArrays;
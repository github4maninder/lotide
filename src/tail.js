const assertEqual = require('../src/assertEqual')

// Test Case: Check the original array 
const tail = (result) => {
  let newArr = result.slice(1);
  return newArr;
}

module.exports = tail;
const assertArraysEqual = (index1, index2) =>{
  if (eqArrays(index1, index2)) {
    console.log(`✅✅✅ ${index1} === ${index2}`);
  } else {
    console.log(`❌❌❌ ${index1} !== ${index2}`);
  }
};

// FUNCTION IMPLEMENTATION

const assertEqual = (actual, expected) =>{
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  }
};
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

// FUNCTION IMPLEMENTATION
const without = (array1, removeItem) => {
  let newArr = [];
  for (let i of array1) {
    if (!removeItem.includes(i)) {
      newArr.push(i);
    }
  }
  return newArr;
};

// TEST CODE

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
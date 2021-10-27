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
// TEST CODE

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
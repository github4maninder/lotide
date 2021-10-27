const assertArraysEqual = (index1, index2) =>{
  if (eqArrays(index1, index2)) {
    console.log(`✅✅✅ ${index1} === ${index2}`);
  } else {
    console.log(`❌❌❌ ${index1} !== ${index2}`);
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

//output test
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]),true);
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // => false
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
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
const letterPositions = function(sentence) {
  const results = {};

  for (let i of sentence) {
    if (sentence[i] !== " ") {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};
assertArraysEqual(letterPositions("lighthouse in the house"),
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
});
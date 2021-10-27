const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} != ${expected}`);
  }
};
const eqArrays = (arr1,arr2) => {
  let match = true;
  // both arrays have same length check
  if(arr1.length !== arr2.length){
    return false;
  }
  // elements in same position are equal
  for (let i in arr1){
    if (arr1[i] !== arr2[i]){
      match = false;
    }
  }
  return match;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true); 
assertEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), false); 

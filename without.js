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
};

const assertArraysEqual = (arr1, arr2) => {
  // Display text element in array surounded by ""
  const displayArrayExactly = (array) => {
    let arr = '';

    for (let ind in array) {
      if (typeof array[ind] === 'string') {
        arr += `\"${array[ind]}\"`;
      } else {
        arr += `${array[ind]}`;
      }
      if (ind < array.length - 1) {
        arr += ', ';
      }
    }
    return arr;
  };

  // Print out assertion message
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅ Assertion Passed: [${displayArrayExactly(arr1)}] === [${displayArrayExactly(arr2)}]`);
  } else {
    console.log(`🛑 Assertion Failed: [${displayArrayExactly(arr1)}] !== [${displayArrayExactly(arr2)}]`);
  }
};

// return a subset of a given array, removing unwanted elements
const without = (source, itemsToRemove) => {
  // Copy the array
  let arr = source.slice();

  // Remove from arr unwanted values
  for (let rmv of itemsToRemove) {
    for (let src in arr) {
      if ( rmv === arr[src]) {
        arr.splice(src, 1);
      }
    }
  }
  return arr;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([true, "2", false], [false, "true", "3"]), [true, "2"]);

// Make sure the original array was not altered by the without function
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
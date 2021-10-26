const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion failed: ${actual} != ${expected}`);
  }
};
const tail = function(array) {
  const tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

assertEqual(String(tail(["Hello", "Lighthouse", "Labs"])), String(["Lighthouse", "Labs"]));
assertEqual(String(tail([])), String([]));
assertEqual(String(tail([1,2,3,4])), String([2,3,4]));
assertEqual(String(tail([1])), String([]));
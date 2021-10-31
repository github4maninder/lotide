const assertEqual = (actual, expected) =>{
  if (actual !== expected) {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  }
};
// Test Case: Check the original array 
const result = ["Yo Yo", "Lighthouse", "Labs"];
const tail = () => {
  let newArr = result.slice(1);
  return newArr;
}
tail(result); // no need to capture the return value since we are not checking it
assertEqual(result.length, 3);
assertEqual(String(tail(["Hello", "Lighthouse", "Labs"])), String(["Lighthouse", "Labs"]));

const assertEqual = (actual, expected) =>{
  if (actual !== expected) {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  }
};


// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];


const tail = () => {
  let newArr = words.slice(1);
  return newArr;
}

tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);

assertEqual(String(tail(["Hello", "Lighthouse", "Labs"])), String(["Lighthouse", "Labs"]));
assertEqual(String(tail([])), String([]));
assertEqual(String(tail([1,2,3,4])), String([2,3,4]));
assertEqual(String(tail([1])), String([]));
assertEqual(String(tail([1,2,3,4,5])), String([1,2,3,4,5]));
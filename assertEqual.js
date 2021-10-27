// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) =>{
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 20);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);

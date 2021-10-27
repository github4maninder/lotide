const assertEqual = (actual, expected) =>{
  if (actual !== expected) {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  }
};

const head = (i) => {
return i[0];
}


// output test

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
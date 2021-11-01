const assertEqual = (actual, expected) =>{
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  }
};
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    // check if the item is in the given object
    if (itemsToCount[item]) {
      // Increment the count of each item into results object
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: false,
  Fang: true,
  Agouhanna: true,
});

console.log(countOnly(firstNames,result1));
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
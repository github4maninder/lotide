const assertEqual = (actual, expected) =>{
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const result = {};
  for (let letter of sentence) {
    if (letter !== " ") {   // letter is initinalized 
      if (result[letter]) {   //letter is declared as the key to result obj if true
        result[letter] += 1;  // counting the key and adding to the value of the objects
      } else {
        result[letter] = 1;  // key once is saved in the value of the object
      }
    }
  }
  return result;
};

const result1 = countLetters("My name is Maninder"); /* the sentence will be converted to object with key as the M,a,n,i,d,e,r and the values as 1,2,2,1,1,2,1 (count of the letters in sentence*/ 

assertEqual(result1["n"], 3);
assertEqual(result1["a"], 2);
assertEqual(result1["o"], undefined);
assertEqual(result1["i"], 2);
assertEqual(result1["q"], 1);
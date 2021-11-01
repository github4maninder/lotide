const assertArraysEqual = require('../src/assertArraysEqual');
const middle = require('../src/middle');

assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2]),[]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1, 2, 3]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

/*
expected results : 
✅✅✅  === 
✅✅✅  === 
✅✅✅ 2 === 2
✅✅✅ 3 === 3
❌❌❌ 2 !== 2,3
✅✅✅ 3,4 === 3,4
*/
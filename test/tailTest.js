const assert = require('chai').assert;
const tail   = require('../src/tail');

describe("#tail", () => {
  it("returns 2 for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
  it("returns ['6','7'] for ['5','6','7']", () => {
    assert.deepEqual(tail(['5','6','7']), ['6','7']); 
  });
  it("returns ['lighthouse','labs'] for ['hello','lighthouse','labs']", () => {
    assert.deepEqual(tail(['hello','lighthouse','labs']), ['lighthouse','labs']); 
  });
});
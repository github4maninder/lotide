const assert = require('chai').assert;
const middle = require('../src/middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns ['test','pass'] for ['5','test','pass','!']", () => {
    assert.deepEqual(middle(['5','test','pass','!']),['test','pass']); 
  });
  it("returns ['Lighthouse'] for ['hello','Lighthouse','labs']", () => {
    assert.deepEqual(middle(['hello','Lighthouse','labs']), ['Lighthouse']); 
  });
});
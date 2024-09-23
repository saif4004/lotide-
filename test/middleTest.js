const assert = require('chai').assert;
const middle   = require('../middle');


describe("#middle", () => {
  it("returns [3,43] for [1,2,3,43,5,6]", () => {
    assert.deepEqual(middle([1,2,3,43,5,6]), [3,43]);
  });
  it("returns [3] for [1,2,3,43,5]", () => {
    assert.deepEqual(middle([1,2,3,43,5]), [3]);
  });
});

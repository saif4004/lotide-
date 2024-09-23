const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse' , 'labs'] for ['Hello','Lighthouse' , 'labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("returns [] for ['YO YO']", () => {
    assert.deepEqual(tail(["YO YO"]), []);
  });
  
});

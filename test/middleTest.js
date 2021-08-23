const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;


// TEST CODE
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["x"]), []);
assertArraysEqual(middle([true, false]), []);
assertArraysEqual(middle([]), []);


describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it(`returns ['Lighthouse'] for ["Hello", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ['Lighthouse']);
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns [] for [true, false]", () => {
    assert.deepEqual(middle([true, false]), []);
  });
});
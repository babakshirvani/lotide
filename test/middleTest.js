const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("should returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("should returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("should returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("should returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it(`should returns ["c", "d"] for ["a", "b", "c", "d", "e", "f"]`, () => {
    assert.deepEqual(middle(["a", "b", "c", "d", "e", "f"]), ["c", "d"]);
  });
});
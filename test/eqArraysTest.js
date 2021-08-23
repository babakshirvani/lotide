const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("should returns true when [1, 2, 3] = [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("should returns false when [1, 2, 3] = [1, 3, 2]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 3, 2]));
  });

  it("should returns true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("should returns false for [[2, 3], [4]], [[2, 3], 4]", () => {
    assert.isFalse(eqArrays([[2, 3], [4]], [[2, 3], 4]));
  });

});
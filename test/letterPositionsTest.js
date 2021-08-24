const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("should returns [0] for ('lighthouse in the house').l", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').l, [0]);
  });
  it("should returns [1, 11] for ('lighthouse in the house').i", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').i, [1, 11]);
  });
  it("should returns [2] for ('lighthouse in the house').g", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').g, [2]);
  });
  it("should returns [3, 5, 15, 18] for ('lighthouse in the house').h", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').h, [3, 5, 15, 18]);
  });
  it("should returns [4, 14] for ('lighthouse in the house').t", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').t, [4, 14]);
  });
  it("should returns [6, 19] for ('lighthouse in the house').o", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').o, [6, 19]);
  });

});

const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObjects", () => {
  it(`should returns true for ab = { a: "1", b: "2" }, and ba = { b: "2", a: "1" }`, () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    assert.isTrue(eqObjects(ab, ba), true);
  });
  it(`should returns false for ab = { a: "1", b: "2" }, and abc = { a: "1", b: "2", c: "3" }`, () => {
    const abc = { a: "1", b: "2", c: "3" };
    const ab = { a: "1", b: "2" };
    assert.isFalse(eqObjects(ab, abc), false);
  });
  it(`should returns true for cd = { c: "1", d: ["2", 3] }, and dc = { d: ["2", 3], c: "1" }`, () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.isTrue(eqObjects(cd, dc), true);
  });
  it(`should returns false for cd = { c: "1", d: ["2", 3] };, and cd2 = { c: "1", d: ["2", 3, 4] }`, () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.isFalse(eqObjects(cd, cd2), false);
  });
});
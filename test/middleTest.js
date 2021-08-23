const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');





assertArraysEqual(middle([1]), []);   // => ✅✅✅ Assertion Passed: [] === []
assertArraysEqual(middle([1, 2]), []);  // => ✅✅✅ Assertion Passed: [] === []
assertArraysEqual(middle([1, 2, 3]), [2]); // => ✅✅✅ Assertion Passed: [2] === [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => ✅✅✅ Assertion Passed: [3] === [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => ✅✅✅ Assertion Passed: [3,4] === [3,4]
assertArraysEqual(middle(["a", "b", "c", "d", "e", "f"]), ["c", "d"]); // => ✅✅✅ Assertion Passed: [c,d] === [c,d]
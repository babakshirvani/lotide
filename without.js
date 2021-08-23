

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  return Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length === arr2.length &&
    arr1.every((element, index) => element === arr2[index]);
};

const without = function(source, itemsToRemove) {
  let output = [];
  for (let src of source) {
    for (let rm of itemsToRemove) {
      if (src !== rm && !output.includes(src) && !itemsToRemove.includes(src)) {
        output.push(src);
      }
    }
  }
  return output;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

module.exports = without;
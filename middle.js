const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(arr1, arr2) {
  return Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length === arr2.length &&
    arr1.every((element, index) => element === arr2[index]);
};


const middle = function(arr) {
  const midIndex = Math.floor(arr.length / 2);
  const output = [];
  if (arr.length <= 2) {
    return output;
  }
  if (arr.length > 2 && arr.length % 2 === 0) {
    output.push(arr[midIndex - 1], arr[midIndex]);
    return output;
  }
  if (arr.length > 2 && arr.length % 2 !== 0) {
    output.push(arr[midIndex]);
    return output;
  }
};

assertArraysEqual(middle([1]), []);   // => ✅✅✅ Assertion Passed: [] === []
assertArraysEqual(middle([1, 2]), []);  // => ✅✅✅ Assertion Passed: [] === []
assertArraysEqual(middle([1, 2, 3]), [2]); // => ✅✅✅ Assertion Passed: [2] === [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => ✅✅✅ Assertion Passed: [3] === [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => ✅✅✅ Assertion Passed: [3,4] === [3,4]
assertArraysEqual(middle(["a", "b", "c", "d", "e", "f"]), ["c", "d"]); // => ✅✅✅ Assertion Passed: [c,d] === [c,d]
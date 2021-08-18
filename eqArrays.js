const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const eqArrays = function(x, y) {
  return Array.isArray(x) &&
    Array.isArray(y) &&
    x.length === y.length &&
    x.every((element, index) => element === y[index]);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
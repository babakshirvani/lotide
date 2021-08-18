
let x = [1, 2, 3];
let y = ["1", "2", 3];

const assertArrayEqual = function(input) {
  if (input) {
    return console.log(`✅✅✅ Assertion Passed: [${x}] === [${y}]`);
  } else {
    return console.log(`🛑🛑🛑 Assertion Failed: [${x}] !== [${y}]`);
  }
};

const eqArrays = function(x, y) {
  return Array.isArray(x) &&
    Array.isArray(y) &&
    x.length === y.length &&
    x.every((element, index) => element === y[index]);
};


assertArrayEqual(eqArrays(x, y));
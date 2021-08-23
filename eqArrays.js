const eqArrays = function(actual, expected) {
  let result = true
  if (actual.length !== expected.length) return false;
  for (let i = 0; i < actual.length; i++) {
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      result = result && eqArrays(actual[i], expected[i]);
    } else if (actual[i] !== expected[i]) {
      result = false;
    }
  }
  return result
};

module.exports = eqArrays;
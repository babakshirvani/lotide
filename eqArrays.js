const eqArrays = function(x, y) {
  return Array.isArray(x) &&
    Array.isArray(y) &&
    x.length === y.length &&
    x.every((element, index) => element === y[index]);
};


module.exports = eqArrays;
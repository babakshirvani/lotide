const flatten = function(myArray) {
  let flattened = myArray.flat(Infinity);
  return flattened;
};


module.exports = flatten;
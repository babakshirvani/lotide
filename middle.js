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

module.exports = middle;
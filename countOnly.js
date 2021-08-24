
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  if (allItems.length === 0) {
    return undefined
  }
  if (Object.keys(itemsToCount).length === 0) {
    return undefined
  }
  for (const item of allItems) {
    if (itemsToCount[item]) {
      results[item] ? results[item]++ : (results[item] = 1);
    }
  }
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

module.exports = countOnly;
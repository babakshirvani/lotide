const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  str = str.toLowerCase();
  const result = {};
  for (const letter of str) {
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] += 1;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
};

let myResult = countLetters("lighthouse in the House");

assertEqual(myResult["l"], 1);
assertEqual(myResult["i"], 2);
assertEqual(myResult["g"], 1);
assertEqual(myResult["h"], 4);
assertEqual(myResult["t"], 2);
assertEqual(myResult["o"], 2);
assertEqual(myResult["u"], 2);
assertEqual(myResult["s"], 2);
assertEqual(myResult["e"], 3);
assertEqual(myResult["n"], 1);
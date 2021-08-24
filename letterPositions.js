const letterPositions = function(sentence) {
  const result = {};
  sentence = sentence.toLowerCase().split("");
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (result[sentence[i]]) {
        result[sentence[i]].push(sentence.indexOf(sentence[i]))
        sentence[i] = " "
      } else {
        result[sentence[i]] = [sentence.indexOf(sentence[i])]
        sentence[i] = " "
      }
    }
  }
  return result;
};

module.exports = letterPositions;
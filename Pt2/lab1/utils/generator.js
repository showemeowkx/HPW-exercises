// Generates random strings infinitely

const randStr = require("./helpers/random-string");

const randStrGen = function* (length, alphabet) {
  let str = randStr(length, alphabet);

  while (true) yield str;
};

module.exports = randStrGen;

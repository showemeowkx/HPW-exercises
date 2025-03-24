// Generates random strings infinitely

const randStr = require("./helpers/random-string");

const randStrGen = function* (length, alphabet) {
  while (true) {
    yield randStr(length, alphabet);
  }
};

module.exports = randStrGen;

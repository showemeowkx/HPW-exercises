// Creates an iterable object which generates random strings until the timeout ends

const randStrGen = require("./generator");
const checkArgs = require("./helpers/check-args");

const randStrIterable = (length, alphabet, duration) => {
  checkArgs(length, alphabet, duration);
  return {
    [Symbol.iterator]() {
      const generator = randStrGen(length, alphabet);
      const iterator = {
        time: Date.now(),
        next() {
          return {
            value: generator.next().value,
            done: Date.now() - this.time >= duration,
          };
        },
      };
      return iterator;
    },
  };
};

module.exports = randStrIterable;

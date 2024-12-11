"use strict";

const contract =
  (fn, ...types) =>
  (...args) => {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const type = types[i].name.toLowerCase();
      if (typeof arg !== type) {
        throw new TypeError(`Expected <${type}> argument.`);
      }
    }

    const result = fn(...args);
    const type = types[types.length - 1].name.toLowerCase();
    if (typeof result !== type) {
      throw new TypeError(`Expected <${type}> result.`);
    }
    return result;
  };

module.exports = { contract };

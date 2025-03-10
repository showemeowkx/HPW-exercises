"use strict";

const pipe = (...fns) => {
  for (const arg of fns) {
    if (typeof arg !== "function") throw new Error("Parametr is not a function!");
  }
  return (x) => fns.reduce((value, func) => func(value), x);
};

module.exports = { pipe };

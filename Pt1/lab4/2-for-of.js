"use strict";

const sum = (...args) => {
  let res = 0;
  for (const num of args) {
    res += num;
  }
  return res;
};

module.exports = { sum };

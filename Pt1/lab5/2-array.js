"use strict";

const array = () => {
  const arr = [];
  const get = (index) => arr[index];
  get.push = (x) => arr.push(x);
  get.pop = () => arr.pop();
  return get;
};

module.exports = { array };

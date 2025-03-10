"use strict";

const difference = (array1, array2) => {
  const difference = [];
  for (const item of array1) {
    if (!array2.includes(item)) difference.push(item);
  }
  return difference;
};

module.exports = { difference };

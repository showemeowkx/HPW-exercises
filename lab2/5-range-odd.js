"use strict";

const rangeOdd = (start, end) => {
  const outputArray = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) outputArray.push(i);
  }
  return outputArray;
};

module.exports = { rangeOdd };

"use strict";

const range = (start, end) => {
  const outputArray = [];
  for (let i = start; i <= end; i++) {
    outputArray.push(i);
  }
  return outputArray;
};

module.exports = { range };

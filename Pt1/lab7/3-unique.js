"use strict";

const unique = (array) => {
  const uniqueArr = [];
  for (const item of array) {
    if (!uniqueArr.includes(item)) uniqueArr.push(item);
  }
  return uniqueArr;
};

module.exports = { unique };

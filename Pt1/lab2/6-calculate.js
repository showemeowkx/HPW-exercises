"use strict";

const square = (num) => num * num;

const cube = (num) => num * num * num;

const average = (num1, num2) => (num1 + num2) / 2;

const calculate = () => {
  const outputArray = [];
  for (let i = 1; i <= 9; i++) {
    const res = average(square(i), cube(i));
    outputArray.push(res);
  }
  return outputArray;
};

module.exports = { square, cube, average, calculate };

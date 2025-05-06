const memoize = require("./memoize");
const { evictionLRU, evictionLFU, evictionTB } = require("./policy");

const calcAvg = (...nums) => {
  console.log("Calculating...");
  const sum = nums.reduce((sum, num) => (sum += num), 0);
  return sum / nums.length;
};

const mCalcAvg = memoize(calcAvg, evictionTB(1));

console.log(mCalcAvg(1, 2, 3, 4, 5));
console.log(mCalcAvg(5, 6, 3, 6, 7, 7, 3));
console.log(mCalcAvg(1, 2, 3, 4, 5));
console.log(mCalcAvg(5, 9, 3, 5, 7, 2, 3));
console.log(mCalcAvg(1, 2, 3, 4, 5));
console.log(mCalcAvg(5, 9, 3, 5, 7, 2, 4));

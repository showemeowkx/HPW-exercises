"use strict";

const max = (matrix) => {
  let res = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      const num = row[j];
      if (num > res) res = num;
    }
  }
  return res;
};

// Alternative version using Array.prototype.map() & Math.max()
// const max = (matrix) => {
//   const maxValues = matrix.map((row) => Math.max(...row));
//   return Math.max(...maxValues);
// };

module.exports = { max };

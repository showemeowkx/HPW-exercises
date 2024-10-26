"use strict";

const generateKey = (length, possible) => {
  let key = "";
  for (let i = 1; i <= length; i++) {
    const char = Math.floor(Math.random() * possible.length);
    key += possible[char];
  }
  return key;
};

module.exports = { generateKey };

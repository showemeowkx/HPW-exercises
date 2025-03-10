// Returns a random string
// More instructions in 'generator.js'

const errThrow = require("./err-logger");

const SYMBOLS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const randStr = (length, maxLen = 10, alphabet = SYMBOLS) => {
  if (typeof length !== "number") {
    errThrow("length", "number");
  }
  if (typeof alphabet !== "string") {
    errThrow("alphabet", "string");
  }
  if (typeof maxLen !== "number" && typeof maxLen !== "string") {
    errThrow("maxLen", "number/string");
  }

  const lengthCheck = length === -1 ? Math.floor(Math.random() * maxLen) + 1 : length;
  const alphabetCheck = typeof maxLen === "string" ? maxLen : alphabet;
  let str = "";

  for (let i = 0; i < lengthCheck; i++) {
    const randInt = Math.floor(Math.random() * alphabetCheck.length);
    const randChar = alphabetCheck.charAt(randInt);
    str += randChar;
  }

  return str;
};

module.exports = randStr;

// Throws an error if the arguments are passed incorrectly

const errThrow = require("./err-logger");

const checkArgs = (len, alphabet, duration) => {
  if (len === 0) {
    throw new Error("Argument <len> cannot be a 0.");
  }
  if (typeof len !== "number") {
    errThrow("len", "number");
  }
  if (typeof alphabet !== "string") {
    errThrow("alphabet", "string");
  }
  if (typeof duration !== "number") {
    errThrow("duration", "number");
  }
};

module.exports = checkArgs;

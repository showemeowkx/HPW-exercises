// SETTING UP TUTORIAL
// First argument (type: number) - the length of a generated srting.
// Giving a negative value will generate strings with random length in the range from 1 to a positive value of the one passed.
// Second argument (type: string) - the string of characters from which the random string is formed.
// Third argument (type: number) - the timeout duration in ms.

// Execution examples:
const iterator = require("./utils/iterator");
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const iterableFixedLen = iterator(7, CHARS, 30);
const iterableRandomLen = iterator(-10, "01", 30);

const iterate = (iterable) => {
  return new Promise((resolve) => {
    for (const str of iterable) {
      console.log(str);
    }
    resolve();
  });
};

iterate(iterableFixedLen).then(() => iterate(iterableRandomLen));

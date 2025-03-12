// SETTING UP TUTORIAL
// First argument (type: number) - the length of a generated srting.
// Giving a negative value will generate strings with random length in the range of 1 to a positive value of the one passed.
// Second argument (type: string) - the string of characters from which the random string is formed.
// Third argument (type: number) - the timeout duration in ms.

// Execution example:
const iterator = require("./utils/iterator");
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const iterable = iterator(7, CHARS, 1000);

for (const str of iterable) {
  console.log(str);
}

// SETTING UP TUTORIAL
// Set <length> to <-1> to make the length random
// You can change the max random length by changing <maxLen> param (default value - 10)
// The function picks a random char from <SYMBOLS> by default but you can adjust it within by changing <alphabet> param

const randStr = require("./helpers/random-string");

const randStrGen = function* (length, maxLen, alphabet) {
  let str = randStr(length, maxLen, alphabet);

  while (true) yield str;
};

// Execution
console.log(randStrGen(10, 100, "01").next().value);
console.log(randStrGen(-1, 50, "!@#$%^&*()_|/?,.").next().value);
console.log(randStrGen(-1, 10).next().value);
console.log(randStrGen(15, "01").next().value);
console.log(randStrGen(3).next().value);

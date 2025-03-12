// Returns a random string

const randStr = (len, alphabet) => {
  const lengthCheck = len < 0 ? Math.floor(Math.random() * -len) + 1 : len;
  let str = "";

  for (let i = 0; i < lengthCheck; i++) {
    const randInt = Math.floor(Math.random() * alphabet.length);
    const randChar = alphabet.charAt(randInt);
    str += randChar;
  }

  return str;
};

module.exports = randStr;

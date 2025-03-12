// Throws a TypeError with a customizable name and required type of the argument

const errThrow = (arg, type) => {
  throw new TypeError(`Argument <${arg}> must be a ${type}.`);
};

module.exports = errThrow;

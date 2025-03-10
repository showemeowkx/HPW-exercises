"use strict";

const sum = (...args) => args.reduce((res, num) => res + num, 0);

module.exports = { sum };

"use strict";

const compose = (...fns) => {
  const handlers = [];
  const composed = (x) => {
    try {
      return fns.reverse().reduce((value, func) => func(value), x);
    } catch (e) {
      for (const handler of handlers) {
        handler(e);
      }
      return undefined;
    }
  };
  composed.on = (name, handler) => {
    if (name === "error") handlers.push(handler);
  };
  return composed;
};

module.exports = { compose };

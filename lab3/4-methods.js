"use strict";

const methods = (iface) => {
  const outputArr = [];
  Object.keys(iface).forEach((key) => {
    if (typeof iface[key] === "function") {
      outputArr.push([key, key.length]);
    }
  });
  return outputArr;
};

module.exports = { methods };

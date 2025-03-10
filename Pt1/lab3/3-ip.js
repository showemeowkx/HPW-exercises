"use strict";

const ipToInt = (ip = "127.0.0.1") => {
  return ip.split(".").reduce((res, num) => (res << 8) + parseInt(num), 0);
};

module.exports = { ipToInt };

"use strict";

const ages = (persons) => {
  const res = {};
  for (const person in persons) {
    res[person] = persons[person]["died"] - persons[person]["born"];
  }
  return res;
};

module.exports = { ages };

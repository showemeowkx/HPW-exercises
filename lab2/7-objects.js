"use strict";

const fn = () => {
  const obj1 = { name: "myName" };
  let obj2 = { name: "myName" };

  obj1.name = "Oleksandr";
  obj2.name = "Oleksandr";

  //   obj1 = { name: "myName2" }; returns a mistake because the variable is initialized as a constant (can't be changed)
  obj2 = { name: "myName2" };

  console.dir(obj1);
  console.dir(obj2);
};

module.exports = { fn };

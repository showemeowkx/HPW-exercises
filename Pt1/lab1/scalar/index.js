"use strict";

//1st impl
const inc1 = (num) => ++num;

const a = 5;
const b = inc1(a);

console.dir({ a, b });

//2nd impl
const inc2 = (num) => {
  num.n += 1;
};

const obj = { n: 5 };

inc2(obj);
console.dir(obj);

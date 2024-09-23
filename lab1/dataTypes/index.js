"use strict";

const getDataTypesQty = (inputArray) => {
  const outputHash = {};
  inputArray.forEach((element) => {
    outputHash[typeof element]
      ? (outputHash[typeof element] += 1)
      : (outputHash[typeof element] = 1);
  });
  return outputHash;
};

const typesArr = [
  true,
  "hello",
  5,
  12,
  -200,
  undefined,
  false,
  false,
  "word",
  { a: 1 },
  3.14159265359,
  [1, 2, 3, 4, 5],
  null,
  undefined,
  90,
  13,
  -555,
  false,
  true,
  "this is a sentence",
  NaN,
  null,
  NaN,
  { name: "Oleksandr" },
  { surname: "Cherepov" },
  true,
  1.125,
  undefined,
  [10, 9, 8, 7],
  "goodbye",
];

console.dir(getDataTypesQty(typesArr));

"use strict";

const phonebook = [
  { name: "Benjamin", phone: "+0674707004" },
  { name: "Miller", phone: "+380667048906" },
  { name: "Gandalf", phone: "+380967582233" },
];

const findPhoneByName = (name) => {
  for (const person of phonebook) {
    if (person.name === name) return person.phone;
  }
};

module.exports = { phonebook, findPhoneByName };

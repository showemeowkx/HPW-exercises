"use strict";

const phonebook = {
  Benjamin: "+0674707004",
  Miller: "+380667048906",
  Gandalf: "+380967582233",
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };

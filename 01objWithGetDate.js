"use strict";

const obj = {
  getDate() {
    return new Date();
  },
};

class ObjectWithDate {
  constructor() {}
  static getDate() {
    return new Date();
  }
}

const objWithGetDate = new ObjectWithDate();

// objWithGetDate.getDate();

try {
  objWithGetDate.prototype.getDate();
} catch (error) {
  console.log(error);
}

console.log(ObjectWithDate.getDate());

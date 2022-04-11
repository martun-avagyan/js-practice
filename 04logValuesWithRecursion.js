"use strict";
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

const recursiveLog = function (obj) {
  console.log(obj.value);
  const nextObj = obj.next;
  if (nextObj.next) {
    recursiveLog(nextObj);
  }
};

recursiveLog(list);

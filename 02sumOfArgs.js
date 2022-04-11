"use strict";

const sumOfArguments = function (...numbers) {
  const sum = numbers.reduce((thisEl, thatEl) => thisEl + thatEl, 0);
  return sum;
};

console.log(sumOfArguments(1, 2, 3, 4, 5));

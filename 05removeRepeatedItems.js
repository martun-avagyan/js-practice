"use strict";

const removeDuplicates = function (arr) {
  return Array.from(new Set(arr));
};

const testArr = [1, 2, 3, 4, 5, 6, 7, 7, 7, 7];

console.log(removeDuplicates(testArr));

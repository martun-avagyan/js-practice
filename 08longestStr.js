"use strict";

const blackWordFinder = function (str) {
  let strToReturn;

  return str.split(" ").reduce((thisEl, thatEl) => {
    if (thisEl.length > thatEl.length) {
      strToReturn = thisEl;
    } else {
      strToReturn = thatEl;
    }
    return strToReturn;
  });
};

console.log(blackWordFinder("Find the longest word you imbecile"));

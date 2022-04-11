"use strict";

function upper(str) {
  return str
    .split(" ")
    .map((elem) => elem[0].toUpperCase() + elem.slice(1))
    .join(" ");
}

console.log(upper("i love u"));

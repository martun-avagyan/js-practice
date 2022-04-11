"use strict";

const findAndLogDuplicates = function (...numbers) {
  const trackerObj = {};
  console.log(numbers);
  numbers.forEach((el) => {
    if (trackerObj[el]) {
      trackerObj[el] = trackerObj[el] + 1;
    } else {
      trackerObj[el] = 1;
    }
  });

  for (const el of Object.entries(trackerObj)) {
    if (el[1] > 1) {
      console.log(`The Number ${el[0]} has ${el[1]} instances`);
    }
  }
};

findAndLogDuplicates(1, 2, 3, 4, 4, 5, 5, 5, 6, 7);

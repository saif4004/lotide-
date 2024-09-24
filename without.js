
const assertArraysEqual = require("./assertArraysEqual");

const without = function(source,itemsToRemove) {
  let newSource = [];
  for (let i = 0; i < source.length; i++) {
    if (!source.includes(itemsToRemove[i])) {
      newSource.push(source[i]);
    }
  }
  return newSource;
};

module.exports = without;

let tempArray = without(["Mike", "Zack", 33, "Paige"], ["Mike","Zack"]);

console.log(tempArray);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// const words1 = ["Hey", "Zack", "lighthouse"];
// without(words1, ["Zack"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words1, ["Hey", "Zack", "lighthouse"]);

// const words2 = ["hello", "world", "lighthouse"];
// without(words2, ["world"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words2, ["hello", "world", "lighthouse"]);

// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log(without(["20", "2", "3"], [44, 2, "3"]));
// console.log(without(["1", "-2", "3"], [1, -2, "3"]));
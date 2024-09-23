const eqArrays = function(arr1,arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  let tempLength = arr1.length;
  if (arr2.length > tempLength) {
    tempLength = arr2.length;
  }

  for (let i = 0; i < tempLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1,arr2) {
  
  if (eqArrays(arr1,arr2)) {
    console.log(`Assertion Passed:  ${arr1}   ===  ${arr2}`);
  } else {
    console.log(`Assertion Failed:  ${arr1}   !==  ${arr2}`);
  }
};

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

// let tempArray = without(["Mike", "Zack", 33, "Paige"], ["Mike","Zack"]);

// console.log(tempArray);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const words1 = ["Hey", "Zack", "lighthouse"];
without(words1, ["Zack"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words1, ["Hey", "Zack", "lighthouse"]);

const words2 = ["hello", "world", "lighthouse"];
without(words2, ["world"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words2, ["hello", "world", "lighthouse"]);

console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without(["20", "2", "3"], [44, 2, "3"]));
console.log(without(["1", "-2", "3"], [1, -2, "3"]));
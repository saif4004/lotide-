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

let arr1 = [1,2,3,4];
let arr2 = [3,4,1,2];

assertArraysEqual(arr1,arr2);
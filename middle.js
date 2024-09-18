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

const middle = function(arr) {
  if (!Array.isArray(arr)) {
    return [];
  }
  if (arr.length >= 0 && arr.length <= 2) {
    return [];
  }
  let midArr = [];
  if (arr.length % 2 !== 0) {
    midArr[0] = arr[Math.floor(arr.length / 2)];
    return midArr;
  } else {
    midArr[0] = arr[Math.floor(arr.length / 2) - 1];
    midArr[1] = arr[Math.floor(arr.length / 2)];
    return midArr;
  }
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3]));// => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6]));// => [3, 4]

const numArray = [1,2,3,43,5,6];
middle(numArray);

assertArraysEqual(numArray,[1,2,3,43,5,6]);
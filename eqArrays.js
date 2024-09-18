const eqArrays = function (arr1,arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)  ) {
    return false;
  }
  let tempLength = arr1.length;
  if(arr2.length > tempLength)
  {
    tempLength = arr2.length;
  }

  for(let i =0; i < tempLength; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual}   ===  ${expected}`);
  } else {
    console.log(`Assertion Failed:  ${actual}   !==  ${expected}`);
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
console.log(eqArrays([], []));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 1, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 9, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);


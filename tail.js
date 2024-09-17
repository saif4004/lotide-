// FUNCTION IMPLEMENTATION


const tail = function(arr) {
  let tempArry = [];
  if (!Array.isArray(arr)) {
    return undefined;
  }
  if (arr.length >= 0 && arr.length <= 1) {
    return tempArry;
  }

  for (let i = 1; i < arr.length; i++) {
    tempArry[i] = arr[i];
  }
 
  return tempArry;
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual}   ===  ${expected}`);
  } else {
    console.log(`Assertion Failed:  ${actual}   !==  ${expected}`);
  }
};

//TEST CODE

const result = tail(["Hello", "Lighthouse", "Labs"]); // should return ["Lighthouse", "Labs"]
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const words1 = ["Yo Yo"];
tail(words1);
assertEqual(words1.length, 1); 
const words2 = [];
tail(words2);
assertEqual(words2.length, 0); 
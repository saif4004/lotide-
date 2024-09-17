// FUNCTION IMPLEMENTATION


const tail = function(arr) {
  if (!Array.isArray(arr) || arr.length ===0) {
    return undefined;
  }
  let tempArry = [];
  for (let i=0; i < arr.length; i++)
  {
    tempArry[i] = arr[i];
  }
  tempArry.splice(0,1);
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
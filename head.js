// FUNCTION IMPLEMENTATION


const head = function(arr) {
  if (arr.length <= 0) {

    return undefined;
  }
  return arr[0];
};
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual}   ===  ${expected}`);
  } else {
    console.log(`Assertion Failed:  ${actual}   !==  ${expected}`);
  }
};

//TEST CODE

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5, 6, 7]), 7);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Eric");
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Garry");
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Zack");
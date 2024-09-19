const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`Assertion Passed:  ${actual}   ===  ${expected}`);
  } else {
    console.log(`Assertion Failed:  ${actual}   !==  ${expected}`);

  }
};

const countLetters = function(sentStr) {
  let results = {};
  for (const character of sentStr) {
    if (character !== ' ') { 
      if (results[character]) {
        results[character] += 1;
      } else {
        results[character] = 1;
      }
    }
  }
  return results;
};

const testStr = "LHL";
console.log(countLetters(testStr));
assertEqual(testStr, "LHL");


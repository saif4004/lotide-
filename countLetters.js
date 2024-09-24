const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}   ===  ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed:  ${actual}   !==  ${expected}`);

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

module.exports = countLetters;

const testStr = "LHL";
console.log(countLetters(testStr));
console.log(countLetters("lighthouse in the house"));
assertEqual(testStr, "LHL");
assertEqual("lighthouse in the house", "lighthouse in the house")


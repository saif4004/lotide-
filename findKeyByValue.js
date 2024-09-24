const assertEqual = require("./assertEqual");

const findKeyByValue = function(obj,valueStr) {
  for (const key in obj) {
    if (obj[key] === valueStr) {
      return key;
    }
  }
  return undefined;
};
module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
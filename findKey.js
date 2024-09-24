const assertEqual = require("./assertEqual");

const findKey = function(obj1,callback) {

  for (const key in obj1) {
    if(callback(obj1[key]) === true) {
      return key;
    }
  }
};
module.exports = findKey;

let result = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"


assertEqual(result,"noma");
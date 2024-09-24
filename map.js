const assertArraysEqual = require ("./assertArraysEqual");
const map = function (array, callback) {

 const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word[3]);
console.log(results1);
console.log(results2);


// assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]);
// assertArraysEqual(results2,[ 'u', 't', , 'o', ]);




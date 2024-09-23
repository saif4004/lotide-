const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
     return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { 
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  const arrObj1 = Object.keys(object1);
  const arrObj2 = Object.keys(object2);
  if (arrObj1.length !== arrObj2.length) {
    return false;
  }
  for (let key of arrObj1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
     } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  // Implement me!
  const inspect = require("util").inspect;
  if (eqObjects(actual,expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
module.exports = assertObjectsEqual;
// Test cases
const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
const obj3 = { a: '1', b: '2' };

console.log('Test 1: Should pass');
assertObjectsEqual(obj1, obj2); // Expected to pass

console.log('Test 2: Should fail');
assertObjectsEqual(obj1, obj3); // Expected to fail



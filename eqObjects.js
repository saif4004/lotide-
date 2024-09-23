const eqArrays = function(arr1,arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let tempLength = arr1.length;
  if (arr2.length > tempLength) {
    tempLength = arr2.length;
  }
  for (let i = 0; i < tempLength; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed:  ${actual}   ===  ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${actual}   !==  ${expected}`);

  }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let arrObj1 = Object.keys(object1);
  let arrObj2 = Object.keys(object2);
  if (arrObj1.length !== arrObj2.length) {
    return false;
  }
  for (const key in arrObj1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
  }

  return true;
};

module.exports = eqObjects;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false

// assertEqual(shirtObject.color, "red");
// assertEqual(shirtObject.size, "medium");


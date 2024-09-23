const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays.js");

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 1, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 9, 3], [1, 2, 3]), false);
assertEqual(eqArrays([], []), true);


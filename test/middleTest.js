const assertArraysEqual = require("../assertArraysEqual.js");
const middle = require ("../middle.js");


assertArraysEqual(middle([1,2,3,43,5,6]),[3,43]);
assertArraysEqual(middle([1,2,3,43,5]),[3]);
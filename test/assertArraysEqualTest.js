const assertArraysEqual = require("../assertArraysEqual.js");


assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([],[]);
assertArraysEqual(["Hello","Hey","Hi"],["Hello","Hey","Hi"]);
assertArraysEqual(["Hello","Hey","Hi"],["Hello","Hey"]);
assertArraysEqual(["Hello","Hey","Hi"],["Hello","Hey","BYE"]);

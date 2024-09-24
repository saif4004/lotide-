// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const without = require('./without');
const letterPositions = require('./letterPositions');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual')
const assertObjectsEqual = require('./assertObjectsEqual');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const takeUntil = require('./takeUntil');

module.exports = {
  head,
  tail,
  middle,
  countLetters,
  without,
  letterPositions,
  findKey,
  findKeyByValue,
  assertEqual,
  assertArraysEqual,
  assertObjectsEqual,
  countOnly,
  eqArrays,
  eqObjects,
  takeUntil
};
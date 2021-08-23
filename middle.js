const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// ACTUAL FUNCTION
const middle = (arr) => {
  if(arr.length <= 2) return [];
  if(arr.length % 2 !== 0) {
    return [arr[Math.floor(arr.length / 2)]];
  }
  return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
}

module.exports = middle;
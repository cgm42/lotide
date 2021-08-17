// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😨😨Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++ ) {
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays(["1",2], [1, 2]), true); // => should FAIL
assertEqual(eqArrays([], []), true); // => should PASS
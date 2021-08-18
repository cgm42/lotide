// TEST/ASSERTION FUNCTIONS
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`😊😊 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😨😨Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++ ) {
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// ACTUAL FUNCTION
const middle = (arr) => {
  if(arr.length <= 2) return [];
  if(arr.length % 2 !== 0) {
    return [arr[Math.floor(arr.length / 2)]];
  }
  return [arr[arr.length / 2 - 1], arr[arr.length / 2]];
}

// TEST CODE
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle(["x"]), []);
assertArraysEqual(middle([true, false]), []);
assertArraysEqual(middle([]), []);
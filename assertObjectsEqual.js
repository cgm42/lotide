const eqArrays = (arr1, arr2) => {
  if(arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++ ) {
    if(arr1[i] !== arr2[i]) return false;
  }
  return true;
}

const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length) return false;
  for(let key of Object.keys(object1)) {
    if(Array.isArray(object1[key])) {
      if(!eqArrays(object1[key], object2[key])) return false;
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; 
  if (eqObjects(object1, object2)) {
    console.log(`😊😊 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`😨😨Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

assertObjectsEqual({a: 1, b: 2}, {b: 2, a: 1});
// FUNCTION IMPLEMENTATION
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

const without = (source, itemsToRemove) => {
  let arr = [...source];
  for (let item of itemsToRemove) {
    if (arr.includes(item)){
      arr.splice(arr.indexOf(item), 1);
    }
  }
  return arr;
}


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); 

assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); 

assertArraysEqual(without([1, 2, 3], [8]), [1, 2, 3]); 

assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]); 

assertArraysEqual(without([true, "abc", 321], ["abc"]), [true, 321]); 

assertArraysEqual(without([], []), []); 

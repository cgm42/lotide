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

const eqObjects = function(object1, object2) {
  if(typeof object1 !== 'object') {
    if(!Array.isArray(object1)) {
      return object1 === object2;
    }
  }
  if(Object.keys(object1).length !== Object.keys(object2).length) return false;
  for(let key of Object.keys(object1)) {
    if(Array.isArray(object1[key])) {
      if(!eqArrays(object1[key], object2[key])) return false;
    } else {//recurse if object or primitive
      if(!eqObjects(object1[key], object2[key])) return false;
    } 
  }
  return true;
};
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => true
console.log(eqObjects({ a: { z: {zz: 1} }, b: 2 }, { a: { z: {zz: 1} }, b: 2 })) // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

testArray = [
  {a: 1},
  {a: 1}, //true
  true,

  {a: 1},
  {a: 2}, //false
  false,

  {a: 1},
  {b: 1}, //false
  false,

  {a: 1, b: 1},
  {a: 1, b: 1}, //true
  true,

  {a: 1, b: 2},
  {a: 1, b: 1}, //false
  false,

  //these object literals look different, but they are actually the same, becuase object literals aren't ordered like arrays are
  {a: 1, b: 1},
  {b: 1, a: 1}, //true
  true,

  {a: 1, b: 2},
  {a: 2, b: 1}, //false
  false,
  
  {a: 1, a: 1},
  {a: 1, b: 1}, //false
  false,

  {a: 1, a: 2},
  {a: 1, b: 1}, //false
  false,

  {a: 1, b: 1},
  {a: 1, a: 1}, //false
  false,

  {a: 1, b: 1},
  {a: 1, a: 2}, //false
  false,
  
  //this is a special case. the objects look different, but they are actually the same.
  {a: 1, b: 1, b: 1},
  {a: 1, a: 1, b: 1}, //true
  true,

  //this is a special case. the objects look different, but they are actually the same.
  {a: 1, b: 2, b: 1},
  {a: 2, a: 1, b: 1}, //true
  true,

  {a: 1, b: {c: 2}},
  {a: 1, b: {c: 2}}, //true
  true,

  {a: 1, b: {c: 2}},
  {a: 1, b: {c: 3}}, //false
  false,

  {a: 1, b: {c: {d: 2}}},
  {a: 1, b: {c: {d: 2}}}, //true
  true,

  {a: 1, b: {c: {d: 2}}},
  {a: 1, b: {c: {d: 3}}}, //false
  false,

  {a: 1, b:2, c: undefined},
  {a: 1, b:2, f: undefined}, //false
  false,

  {a: 1, b:2, c: undefined},
  {a: 1, b:2, c: undefined}, //true
  true,

  [1],
  [1], //true
  true,

  ['a'],
  ['a'], //true
  true,

  [1],
  [2], //false
  false,

  ['a'],
  ['b'], //false
  false,

  ['a'],
  [''], //false
  false,

  [''],
  [''], //true
  true,

  [1, 2],
  [1, 2], //true
  true,

  [1, 2],
  [2, 1], //false
  false,

  [1,[1,2]],
  [1,[1,2]], //true
  true,
  
  [1,[1,3]],
  [1,[1,2]], //false
  false,

  [1,[[5,1],2]],
  [1,[[5,1],2]], //true
  true,
  
  [1,[[5,2],3]],
  [1,[[5,1],2]], //false
  false
]

let actualResult;
let expectedResult;
let passCount = 0;
let failCount = 0;
let testNumber = 0;
let arrayOfPassedTests = [];
let arrayOfFailedTests = [];

console.log('//Test Set 1 of 4: obj1 vs obj2.');
for (let i = 0; i < testArray.length; i += 3) {
  testNumber++;
  console.log(`Test #${testNumber}`);
  actualResult = eqObjects(testArray[i], testArray[i+1]);
  expectedResult = testArray[i+2];
  if (actualResult === expectedResult) {
    passCount++;
    arrayOfPassedTests.push(testNumber);
    console.log('PASSED');
  } else {
    failCount++;
    arrayOfFailedTests.push(testNumber);
    console.log('X FAILED');
  }
  console.log('obj1: \t\t' + JSON.stringify(testArray[i]));
  console.log('obj2: \t\t' + JSON.stringify(testArray[i+1]));
  console.log('Actual: \t' + actualResult);
  console.log('Expected: \t' + expectedResult);
  console.log('----');
}
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------');

console.log('//Test Set 2 of 4: Reversed order. Here, we try obj2 vs obj1, instead of obj1 vs obj2.');
for (let i = 0; i < testArray.length; i += 3) {
  testNumber++;
  console.log(`Test #${testNumber}`);
  actualResult = eqObjects(testArray[i+1], testArray[i]);
  expectedResult = testArray[i+2];
  if (actualResult === expectedResult) {
    passCount++;
    arrayOfPassedTests.push(testNumber);
    console.log('PASSED');
  } else {
    failCount++;
    arrayOfFailedTests.push(testNumber);
    console.log('X FAILED');
  }
  console.log('obj1: \t\t' + JSON.stringify(testArray[i]));
  console.log('obj2: \t\t' + JSON.stringify(testArray[i+1]));
  console.log('Actual: \t' + actualResult);
  console.log('Expected: \t' + expectedResult);
  console.log('----');
}
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------');

console.log('//Test Set 3 of 4: Checking each object against itself (obj1 vs obj1). Should return `true`. (Part 1 of 2.)');
for (let i = 0; i < testArray.length; i += 3) {
  testNumber++;
  console.log(`Test #${testNumber}`);
  actualResult = eqObjects(testArray[i], testArray[i]);
  expectedResult = true;
  if (actualResult === expectedResult) {
    passCount++;
    arrayOfPassedTests.push(testNumber);
    console.log('PASSED');
  } else {
    failCount++;
    arrayOfFailedTests.push(testNumber);
    console.log('X FAILED');
  }
  console.log('obj1: \t\t' + JSON.stringify(testArray[i]));
  console.log('obj2: \t\t' + JSON.stringify(testArray[i+1]));
  console.log('Actual: \t' + actualResult);
  console.log('Expected: \t' + expectedResult);
  console.log('----');
}
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------');

console.log('//Test Set 4 of 4: Checking each object against itself (obj2 vs obj2). Should return `true`. (Part 2 of 2.)');
for (let i = 0; i < testArray.length; i += 3) {
  testNumber++;
  console.log(`Test #${testNumber}`);
  actualResult = eqObjects(testArray[i+1], testArray[i+1]);
  expectedResult = true;
  if (actualResult === expectedResult) {
    passCount++;
    arrayOfPassedTests.push(testNumber);
    console.log('PASSED');
  } else {
    failCount++;
    arrayOfFailedTests.push(testNumber);
    console.log('X FAILED');
  }
  console.log('obj1: \t\t' + JSON.stringify(testArray[i]));
  console.log('obj2: \t\t' + JSON.stringify(testArray[i+1]));
  console.log('Actual: \t' + actualResult);
  console.log('Expected: \t' + expectedResult);
  console.log('----');
}
console.log('---------------------------------------------------------------------------------------------------------------------------------------------------------');

let numberOfTests = failCount + passCount;
let failPercentage = failCount/(numberOfTests)*100;
let passPercentage = passCount/(numberOfTests)*100;

console.log(`Number of Failed Tests: ${failCount}/${numberOfTests} (${failPercentage}%)`);
console.log(`Id's Of Tests That Failed: ${arrayOfFailedTests}`);
console.log('----');
console.log(`Number Of Passed Tests: ${passCount}/${numberOfTests} (${passPercentage}%)`);
console.log(`Id's Of Tests That Passed: ${arrayOfPassedTests}`)
console.log('----');
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😨😨Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = (obj, val) => {
  for (const [key, value] of Object.entries(obj)) {
    if(value === val) return key;
  }
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  thriller: "LOST",
  repeated: "LOST",
  IT: "Silicon Valley",
  empty: "",
  numbers: 90210,
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "LOST"), "thriller");
assertEqual(findKeyByValue(bestTVShowsByGenre, "LOST"), "repeated");//will fail
assertEqual(findKeyByValue(bestTVShowsByGenre, ""), "empty");
assertEqual(findKeyByValue(bestTVShowsByGenre, 90210), "numbers");
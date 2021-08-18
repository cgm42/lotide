const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😨😨Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (arr) => {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
};

const result = tail(["hello", "lighthouse", "labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "lighthouse");
assertEqual(result[1], "labs");

assertEqual(tail([5, 6, 7]).join(''), [6, 7].join(''));

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😨😨Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (str) => {
  result = {};
  str = str.replace(/\s/g, '')
  console.log(str);
  for (let letter of str) {
    if(result[letter] === undefined) {
      result[letter] = 1;
    }else {
      result[letter] += 1;
    }
  }
  console.log(result);
  return result;
}

countLetters("lighthouse in the house");
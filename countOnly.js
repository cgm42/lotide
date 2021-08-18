const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😊😊 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😨😨Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = (allItems, itemsToCount) => {
  let result = {};
  for (let item of allItems) {
    if(itemsToCount[item]) {
      if(!result.hasOwnProperty(item)) {
        result[item] = 1;
      } else{
        result[item] += 1;
      }
    }
  }
  return result;
}
//assertEqual(countOnly(["a", "b", "c"], {a: true, b: true}), {a: 1, b: 1});

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
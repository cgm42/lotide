const flatten2 = (arr) => {
  let result = [];
  for (let element of arr) {
    if(Array.isArray(element)) {
      result = result.concat(element);
    } else{
      result.push(element)
    }
  }
  return result;
};

console.log(flatten2([1, 2, [3, 4, 5]]))
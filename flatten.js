const flatten = (arr) => {
  // base case scenerio
  if (Array.isArray(arr) === false) {
    console.log('hello?', arr)
    return [arr];
  }

  let result = [];
  for(let i = 0; i < arr.length; i++) {
    result = result.concat(flatten(arr[i]));
  }
  console.log('result :>> ', result);

  return result;
}

flatten([1,2,[3, [4, [5]]]]);
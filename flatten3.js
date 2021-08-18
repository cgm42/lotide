//recursion exercise that calculates factorial
const sumUp = (num) => {
  if(num <= 1) { //base case, simplest case
    return num;
  }
  let result = num;
  num--;
  result += sumUp(num);
  return result;
}

console.log(sumUp(100));
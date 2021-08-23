
const tail = (arr) => {
  if (arr.length <= 1) {
    return [];
  }
  return arr.slice(1);
};
module.exports = tail;

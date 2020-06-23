const removeFromArray = function (...args) {
  const arr = args[0];
  return arr.filter((element) => !args.includes(element));
};

// const removeFromArray = function (...args) {
//   const array = args[0];
//   return array.filter((val) => !args.includes(val));
// };

module.exports = removeFromArray;

const result = removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
console.log(result);

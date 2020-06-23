const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) return "ERROR";
  if (typeof num1 !== "number" || typeof num2 !== "number") return "ERROR";
  // if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  let res = 0;
  if (num1 < num2) {
    let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  for (let i = num2; i <= num1; i++) {
    res += i;
  }
  return res;
};

console.log(sumAll(1, 3));
console.log(sumAll(3, 1));
console.log(sumAll(3, 3));
console.log(sumAll(-2, 3));
console.log(sumAll("2", 3));

module.exports = sumAll;

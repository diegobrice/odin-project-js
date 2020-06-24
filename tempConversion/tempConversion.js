const ftoc = function (temp) {
  return (((temp - 32) * 5) / 9).toFixed(1) * 1;
  // return Math.round((temp - 32) * (5 / 9) * 10) / 10;
};

const ctof = function (temp) {
  return ((temp * 9) / 5 + 32).toFixed(2) * 1;
  // return Math.round(((temp * 9) / 5 + 32) * 10) / 10; //retorna 1 decimal
  // return Math.round(((temp * 9) / 5 + 32) * 100) / 100; //retorna 2 decimal
};

module.exports = {
  ftoc,
  ctof,
};

console.log(ctof(73.2));
// .toEqual(163.8);

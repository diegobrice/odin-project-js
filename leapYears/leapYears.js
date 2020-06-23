const leapYears = function (year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;
};

const result = leapYears(1981);
console.log(result);
module.exports = leapYears;

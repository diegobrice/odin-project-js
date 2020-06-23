const repeatString = function (string, number) {
  if (number < 0) return "ERROR";
  let result = "";
  for (let i = 0; i < number; i++) {
    result += string;
  }
  return result;
};

module.exports = repeatString;

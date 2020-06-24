const fibonacci = function (number) {
  if (number < 0) return "OOPS";
  if (number == 0) return 0;
  let arr = [1, 1];
  for (let i = 2; i < number; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[number - 1];
};

module.exports = fibonacci;

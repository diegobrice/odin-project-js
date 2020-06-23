function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(a) {
  // let suma = 0;
  // a.forEach((element) => {
  //   suma += element;
  // });
  // return suma;
  if (a.length === 0) return 0;
  return a.reduce((acum, num) => acum + num);
}

function multiply(a) {
  if (a.length === 0) return 0;
  return a.reduce((acum, num) => acum * num);
}

function power(a, b) {
  return a ** b;
}

function factorial(a) {
  if (a <= 1) return 1;
  a = a * factorial(a - 1);
  return a;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};

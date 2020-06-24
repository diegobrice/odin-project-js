const caesar = function (string, number) {
  let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let arrString = string.split("");
  let result = arrString.map((element) => {
    if (!letras.includes(element)) return element;
    let indexLetra = letras.indexOf(element);
    if (number > 26 || number < -26) number = number % 26;
    let newindex = indexLetra + number; //-1
    indexLetra < 26 && newindex < 0 && (newindex = 26 + newindex);
    indexLetra < 26 && newindex > 25 && (newindex = newindex - 26);
    indexLetra >= 26 && newindex < 26 && (newindex = 52 - (26 - newindex));
    indexLetra >= 26 && newindex > 51 && (newindex = newindex - 26);
    return letras[newindex];
  });
  return result.join("");
};

module.exports = caesar;

// const caesar = function (string, number) {
//   let letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let arrLetras = letras.split("");
//   let arrString = string.split("");
//   let result = arrString.map((element) => {
//     if (!arrLetras.includes(element)) return element;
//     let newindex = arrLetras.indexOf(element) + number;
//     if (arrLetras.indexOf(element) < 26) {
//       if (newindex < 0) newindex = 26 - newindex;
//       if (newindex > 25) newindex = newindex - 26;
//     } else {
//       if (newindex < 26) newindex = 52 - (26 - newindex);
//       if (newindex > 51) newindex = newindex - 26;
//     }
//     return arrLetras[newindex];
//   });
//   return console.log(result.join(""));
// };

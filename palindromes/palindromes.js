const palindromes = function (string) {
  let newString = string.replace(/,/g, "");
  newString = newString.replace(/\./g, "");
  newString = newString.replace(/\!/g, "");
  newString = newString.replace(/ /g, "");
  newString = newString.toLowerCase();
  // processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
  return newString === reverseString(newString);
};

const reverseString = function (string) {
  let result = "";
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};

module.exports = palindromes;

const getTheTitles = function (arr) {
  return arr.map((element) => element.title);
};

const books = [
  {
    title: "Book",
    author: "Name",
  },
  {
    title: "Book2",
    author: "Name2",
  },
];

// const result = getTheTitles(books); // ['Book','Book2']
// console.log(result);
module.exports = getTheTitles;

const summonBooks = require("./DB");

getAll = () => summonBooks.books;

getById = (id) => {
  const bookById = (book) => book.id === id;
  return summonBooks.books.find(bookById);
};
getByAuthor = (author) => {
  const bookByAuthor = (books) =>
    books.author.toLowerCase().includes(author.toLowerCase());
  return summonBooks.books.filter(bookByAuthor);
};
getByTag = (tag) => {
  const bookByTag = (book) =>
    book.tags.map((tag) => tag.toLowerCase()).includes(tag.toLowerCase());
  return summonBooks.books.filter(bookByTag);
};
getByName = (name) => {
  const bookByName = (book) =>
    book.name.toLowerCase().includes(name.toLowerCase());
  return summonBooks.books.filter(bookByName);
};
getSoldByAuthor = (author) => {
  const soldByAuthor = summonBooks.books
    .filter(book => book.author.toLowerCase() === author.toLowerCase())
    .reduce((total, book) => total + book.sold, 0);
  
  return soldByAuthor;
};

module.exports = {getAll,getById, getByAuthor, getByTag, getByName, getSoldByAuthor};

//getById, getByAuthor, getByTag, getByName


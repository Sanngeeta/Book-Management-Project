let books = [];


const incrementId = () => {
  const maxId = books.length > 0 ? Math.max(...books.map(b => b.id)) : 0;
  return maxId + 1;
};

const addNewBook = (bookInput) => {
  try {
    // Check if title already exists
    const exists = books.find((b) => b.title === bookInput.title);
    if (exists) return 409;

    const bookId = incrementId();

    const newBook = {
      id: bookId,
      title: bookInput.title,
      author: bookInput.author,
      year: bookInput.year,
    };

    books.push(newBook);
    return newBook;
  } catch (error) {
    console.error("Error while adding book:", error);
    return 500;
  }
};


const fetchAllBooks = () => {
  try {
    return books;
  } catch (error) {
    console.error("Error while fetching books:", error);
    return 500;
  }
};

const getBookById = (id) => {
  try {
    const book = books.find((book) => book.id === Number(id));
    if (!book) return 404;
    return book;
  } catch (error) {
    console.error("Error while fetching book details:", error);
    return 500;
  }
};

const updateBook = (id, data = {}) => {
  try {
    const book = books.find((b) => b.id === Number(id));
    if (!book) return 404;

    const { title, author, year } = data;

    book.title = title;
    book.author = author;
    book.year = year;
    return book;
  } catch (error) {
    console.error("Error while updating book:", error);
    return 500;
  }
};

const deleteBook = (id) => {
  try {
    const numericId = Number(id);
    const index = books.findIndex((b) => b.id === numericId);
    if (index === -1) return 404;

    books.splice(index, 1);
    return true;
  } catch (error) {
    console.error("Error while deleting books:", error);
    return 500;
  }
};

module.exports = {
  addNewBook,
  fetchAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};

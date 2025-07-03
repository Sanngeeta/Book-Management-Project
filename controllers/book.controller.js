const {
  addNewBook,
  fetchAllBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../services/book.services");

const createBook = (req, res) => {
  const result = addNewBook(req.body);

  if (result === 409) {
    return res.status(409).json({
      status: 409,
      message: "Book with same title exists",
    });
  } else if (result === 500) {
    return res.status(500).json({
      status: 500,
      message: "Error while adding book",
    });
  }

  return res.status(201).json({
    status: 201,
    message: "Book added successfully",
    data: result,
  });
};

const getAllBooks = (req, res) => {
  const result = fetchAllBooks();

  if (result === 500) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching books",
    });
  }

  return res.status(200).json({
    status: 200,
    message: "Books fetched successfully",
    data: result,
  });
};

const getBookDetailsById = (req, res) => {
  const result = getBookById(req.params.id);

  if (result === 404) {
    return res.status(404).json({
      status: 404,
      message: "Book not found",
    });
  } else if (result === 500) {
    return res.status(500).json({
      status: 500,
      message: "Error while fetching book",
    });
  }

  return res.status(200).json({
    status: 200,
    message: "Book fetched successfully",
    data: result,
  });
};

const updateBookById = (req, res) => {
  const result = updateBook(req.params.id, req.body);

  if (result === 404) {
    return res.status(404).json({
      status: 404,
      message: "Book not found",
    });
  } else if (result === 500) {
    return res.status(500).json({
      status: 500,
      message: "Error while updating book",
    });
  }

  return res.status(200).json({
    status: 200,
    message: "Book updated successfully",
    data: result,
  });
};

const deleteBookById = (req, res) => {
  const result = deleteBook(req.params.id);

  if (result === 404) {
    return res.status(404).json({
      status: 404,
      message: "Book not found",
    });
  } else if (result === 500) {
    return res.status(500).json({
      status: 500,
      message: "Error while deleting book",
    });
  }

  return res.status(200).json({
    status: 200,
    message: "Book deleted successfully",
  });
};

module.exports = {
  createBook,
  getAllBooks,
  getBookDetailsById,
  updateBookById,
  deleteBookById,
};

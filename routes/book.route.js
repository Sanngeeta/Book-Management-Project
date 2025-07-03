const express = require('express')
const { createBook,getAllBooks, getBookDetailsById, updateBookById, deleteBookById } = require('../controllers/book.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const validationMiddleware = require('../middlewares/validation.middleware')
let router = express.Router()

router.post("/add-new-book",authMiddleware,validationMiddleware,createBook)
router.get("/fetched-books",getAllBooks)
router.get('/get-book-by-id/:id', authMiddleware,getBookDetailsById);
router.put('/update-book-by-id/:id',authMiddleware, validationMiddleware,updateBookById);
router.delete('/delete-book-by-id/:id', authMiddleware,deleteBookById);

module.exports = router

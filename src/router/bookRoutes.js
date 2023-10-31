import express from 'express';
import { createBookController, deleteBookController, getAllBooksController, getBookByTitleController, getBookController, updateBookController } from '../controller/bookController.js';

const router = express.Router();

// Define routes for handling Book operations
router.post('/createBook', createBookController); // Create a new book
router.delete('/deleteBook/:id', deleteBookController); // Delete a book by ID
router.put('/updateBook/:id', updateBookController); // Update a book by ID
router.get('/getBook/:id', getBookController); // Get a book by ID
router.get('/getBookTitle/:title',getBookByTitleController)// Get a book by Title
router.get('/getAllBooks', getAllBooksController); // Get all books

export default router;

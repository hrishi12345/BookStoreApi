import BookRepository from "../repository/bookRepository.js";

// The BookService class provides high-level book-related operations.
class BookService {
    constructor() {
        // Create an instance of the BookRepository to interact with the database.
        this.bookRepository = new BookRepository();
    }

    // Create a new book.
    async createBookService(data) {
        try {
            // Check if a book with the same title already exists.
            console.log(data)
            const result = await this.bookRepository.findBy({ title: data.title });
            if (result) {
                return {
                    status: 409, // Conflict
                    success: false,
                    message: 'Book already exists',
                };
            } else {
                // If no book with the same title exists, create the book.
                const createdBook = await this.bookRepository.createBook(data);
                return {
                    status: 201, // Created
                    success: true,
                    message: 'Book created successfully',
                    result: createdBook,
                };
            }
        } catch (error) {
            // Handle any errors and return an appropriate response.
            return {
                status: 500, // Internal Server Error
                success: false,
                message: 'Something went wrong',
                error: error.message,
            };
        }
    }

    // Delete a book by ID.
    async deleteBookService(id) {
        try {
            // Check if the book with the given ID exists.
            const exist = await this.bookRepository.getBook(id);
            if (exist) {
                // If the book exists, delete it.
                const result = await this.bookRepository.deleteBook(id);
                return {
                    status: 200, // OK
                    success: true,
                    message: 'Book deleted successfully',
                    result: result,
                };
            } else {
                // If the book does not exist, return a not found response.
                return {
                    status: 404, // Not Found
                    success: false,
                    message: 'Book does not exist',
                };
            }
        } catch (error) {
            // Handle any errors and return an appropriate response.
            return {
                status: 500, // Internal Server Error
                success: false,
                message: 'Something went wrong',
                error: error.message,
            };
        }
    }

    // Update a book by ID with new data.
    async updateBookService(id, data) {
        try {
            // Check if the book with the given ID exists.
            const exist = await this.bookRepository.getBook(id);
            if (exist) {
                // If the book exists, update it with the new data.
                const result = await this.bookRepository.updateBook(id, data);
                return {
                    status: 200, // OK
                    success: true,
                    message: 'Book updated successfully',
                    result: result,
                };
            } else {
                // If the book does not exist, return a not found response.
                return {
                    status: 404, // Not Found
                    success: false,
                    message: 'Book does not exist',
                };
            }
        } catch (error) {
            // Handle any errors and return an appropriate response.
            return {
                status: 500, // Internal Server Error
                success: false,
                message: 'Something went wrong',
                error: error.message,
            };
        }
    }

    // Get all books.
    async getAllBookService() {
        try {
            // Retrieve all books from the database.
            const result = await this.bookRepository.getAllBooks();
            return {
                status: 200, // OK
                success: true,
                message: 'All books retrieved successfully',
                result: result,
            };
        } catch (error) {
            // Handle any errors and return an appropriate response.
            return {
                status: 500, // Internal Server Error
                success: false,
                message: 'Something went wrong',
                error: error.message,
            };
        }
    }

    // Get a book by ID.
    async getBookServiceById(id) {
        try {
            // Check if the book with the given ID exists.
            const result = await this.bookRepository.getBook(id);
            if (result) {
                return {
                    status: 200, // OK
                    success: true,
                    message: 'Book retrieved successfully',
                    result: result,
                };
            } else {
                // If the book does not exist, return a not found response.
                return {
                    status: 404, // Not Found
                    success: false,
                    message: 'Book does not exist',
                };
            }
        } catch (error) {
            // Handle any errors and return an appropriate response.
            return {
                status: 500, // Internal Server Error
                success: false,
                message: 'Something went wrong',
                error: error.message,
            };
        }
    }

    // Get a book by specific data criteria.
    async getBookService(data) {
        try {
            // Check if a book with specific data criteria exists.
            const result = await this.bookRepository.findBy(data);
            if (result) {
                return {
                    status: 200, // OK
                    success: true,
                    message: 'Book retrieved successfully',
                    result: result,
                };
            } else {
                // If no book matches the criteria, return a not found response.
                return {
                    status: 404, // Not Found
                    success: false,
                    message: 'Book does not exist',
                };
            }
        } catch (error) {
            // Handle any errors and return an appropriate response.
            return {
                status: 500, // Internal Server Error
                success: false,
                message: 'Something went wrong',
                error: error.message,
            };
        }
    }
}

export default BookService;

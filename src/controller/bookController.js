import BookService from "../services/bookService.js";

// Create an instance of the BookService
const bookService = new BookService();

// Controller for creating a new book
export const createBookController = async (req, res) => {
    try {
        // Call the createBookService method from the BookService
        const response = await bookService.createBookService({
            title: req.body.title,
            author: req.body.author,
            summary: req.body.summary
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created a new Book',
            data: response,
            err: {}
        });
    } catch (error) {
        // Handle errors and send an appropriate response
        return res.status(500).json({
            message: 'Something went wrong',
            data: {},
            success: false,
            err: error.message
        });
    }
}

// Controller for deleting a book
export const deleteBookController = async (req, res) => {
    try {
        const { id } = req.params;

        // Call the deleteBookService method from the BookService
        const response = await bookService.deleteBookService(id);
        return res.status(response.status).json({
            message: response.message,
            data: response.result,
            success: response.success,
            err: {}
        });

    } catch (error) {
        // Handle errors and send an appropriate response
        return res.status(500).json({
            message: "Something went wrong while deleting Book",
            data: {},
            success: false,
            err: error.message
        });
    }
}

// Controller for updating a book
export const updateBookController = async (req, res) => {
    try {
        const { id } = req.params;

        // Call the updateBookService method from the BookService
        const response = await bookService.updateBookService(id, req.body);
        return res.status(response.status).json({
            message: response.message,
            data: response.result,
            success: response.success,
            err: {}
        });

    } catch (error) {
        // Handle errors and send an appropriate response
        return res.status(500).json({
            message: "Something went wrong while updating Book",
            data: {},
            success: false,
            err: error.message
        });
    }
}

// Controller for getting a book by ID
export const getBookController = async (req, res) => {
    try {
        const { id } = req.params;

        // Call the getBookServiceById method from the BookService
        const response = await bookService.getBookServiceById(id);
        return res.status(response.status).json({
            message: response.message,
            data: response.result,
            success: response.success,
            err: {}
        });

    } catch (error) {
        // Handle errors and send an appropriate response
        return res.status(500).json({
            message: "Something went wrong while getting Book",
            data: {},
            success: false,
            err: error.message
        });
    }
}

// Controller for getting all books
export const getAllBooksController = async (req, res) => {
    try {
        // Call the getAllBookService method from the BookService
        const response = await bookService.getAllBookService();
        return res.status(200).json({
            message: 'All Books retrieved Successfully',
            data: response,
            success: true,
            err: {}
        });

    } catch (error) {
        // Handle errors and send an appropriate response
        return res.status(500).json({
            message: "Something went wrong while getting Books",
            data: {},
            success: false,
            err: error.message
        });
    }
}

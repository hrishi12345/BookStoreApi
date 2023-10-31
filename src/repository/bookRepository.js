import Books from "../models/bookModel.js";

// The BookRepository class handles interactions with the database (MongoDB) for book-related operations.
class BookRepository {
    // Create a new book.
    async createBook(data) {
        try {
            // Attempt to create a new book using the provided data.
            const result = await Books.create(data);
            return result;
        } catch (error) {
            // Handle any errors and log an error message.
            console.log("Something went wrong in the repository (createBook)");
            throw error;
        }
    }

    // Delete a book by ID.
    async deleteBook(id) {
        try {
            // Attempt to find and delete a book by its ID.
            const result = await Books.findByIdAndDelete(id);
            return result;
        } catch (error) {
            // Handle any errors and log an error message.
            console.log("Something went wrong in the repository (deleteBook)");
            throw error;
        }
    }

    // Update a book by ID with new data.
    async updateBook(id, data) {
        try {
            // Attempt to find and update a book with the provided data.
            const result = await Books.findByIdAndUpdate(id, data, { new: true });
            return result;
        } catch (error) {
            // Handle any errors and log an error message.
            console.log("Something went wrong in the repository (updateBook)");
            throw error;
        }
    }

    // Get a book by ID.
    async getBook(id) {
        try {
            // Attempt to find a book by its ID.
            const result = await Books.findById(id);
            return result;
        } catch (error) {
            // Handle any errors and log an error message.
            console.log("Something went wrong in the repository (getBook)");
            throw error;
        }
    }

    // Get all books.
    async getAllBooks() {
        try {
            // Retrieve all books from the database.
            const result = await Books.find();
            return result;
        } catch (error) {
            // Handle any errors and log an error message.
            console.log("Something went wrong in the repository (getAllBooks)");
            throw error;
        }
    }

    // Find a book based on specific data criteria.
    async findBy(data) {
        try {
            // Attempt to find a book based on the provided data criteria.
            const response = await Books.findOne({title:data.title});
            return response;
        } catch (error) {
            // Handle any errors and log an error message.
            console.log("Something went wrong in the repository (findBy)");
            throw error;
        }
    }
}

export default BookRepository;

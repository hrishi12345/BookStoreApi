
```markdown
# Book API

This is a simple RESTful API for managing a collection of books. It allows you to create, update, retrieve, and delete books. The API is built using Node.js, Express.js, and MongoDB.

## API Endpoints

### Create a New Book

- **Endpoint:** `POST /createBook`
- **Description:** Create a new book.
- **Request Body:**
  ```json
  {
    "title": "The Book Title",
    "author": "The Author's Name",
    "summary": "Summary of the book."
  }
  ```
- **Response:**
  - 201 Created: Book created successfully.
  - 409 Conflict: Book already exists.
  - 500 Internal Server Error: Something went wrong.

### Update a Book

- **Endpoint:** `PUT /updateBook/:id`
- **Description:** Update an existing book by ID.
- **Request Parameters:**
  - `id` (String): The ID of the book to update.
- **Request Body:**
  ```json
  {
    "title": "New Title",
    "author": "New Author",
    "summary": "Updated summary."
  }
  ```
- **Response:**
  - 200 OK: Book updated successfully.
  - 404 Not Found: Book does not exist.
  - 500 Internal Server Error: Something went wrong.

### Delete a Book

- **Endpoint:** `DELETE /deleteBook/:id`
- **Description:** Delete a book by ID.
- **Request Parameters:**
  - `id` (String): The ID of the book to delete.
- **Response:**
  - 200 OK: Book deleted successfully.
  - 404 Not Found: Book does not exist.
  - 500 Internal Server Error: Something went wrong.

### Get a Book by ID

- **Endpoint:** `GET /getBook/:id`
- **Description:** Retrieve a book by its ID.
- **Request Parameters:**
  - `id` (String): The ID of the book to retrieve.
- **Response:**
  - 200 OK: Book retrieved successfully.
  - 404 Not Found: Book does not exist.
  - 500 Internal Server Error: Something went wrong.

### Get All Books

- **Endpoint:** `GET /getAllBooks`
- **Description:** Retrieve all books.
- **Response:**
  - 200 OK: All books retrieved successfully.
  - 500 Internal Server Error: Something went wrong.

## Setting Up and Running Locally

To run this application locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd book-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure your environment variables:
   - Create a `.env` file in the root directory.
   - Define the following environment variables in the `.env` file:
     - `DB_USERNAME`: Your MongoDB username
     - `DB_PASSWORD`: Your MongoDB password

4. Start the server:
   ```sh
   npm start
   ```

The API will be available at [http://localhost:3000](http://localhost:3000).

## Assumptions and Decisions

- The API uses the Express.js framework to create routes and handle HTTP requests.
- The MongoDB database is used to store book data. MongoDB is chosen for its flexibility and scalability.
- The API returns appropriate HTTP status codes for different scenarios to provide meaningful responses to clients.
- Input validation is not explicitly covered in this README, but it's important to validate and sanitize user inputs in a real-world application.
- Error handling is included for potential issues during database operations or API requests.


import express from "express";
import bodyParser from "body-parser";
import UserRoutes from './router/userRoutes.js'; // Import user routes
import Connection from "./config/database.js"; // Import database connection function
import dotenv from 'dotenv';
import BookRoutes from './router/bookRoutes.js'; // Import book routes

dotenv.config();

const app = express();

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Uncomment to use user routes
// app.use('/api', UserRoutes);

// Use book routes under the '/api' path
app.use('/api', BookRoutes);

app.listen(3004, async () => {
    console.log('Server started');

    // Establish a connection to the database
    await Connection();
    console.log('MongoDB connected');
});

// Import Express.js: the fast, unopinionated, minimalist web framework for node.
const express = require('express');

// Import dotenv module: load environment variables from '.env'.
const dotenv = require('dotenv').config();

// Import database configurations
const connectDB = require('./config/db');

// Create an Express application. The express() function is a top-level function exported by the express module.
const app = express();

// Connect Database
connectDB();

// Load the routes module in the app.
app.use('/api', require('./routes'));

/** Create a constant reference to port declared on environment variables
 * or set the port of remote server to 3333.  */
const PORT = process.env.PORT || 3333;

// Bind and listen for connections on the specified port.
app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));

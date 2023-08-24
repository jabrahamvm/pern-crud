const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json()); // req.body

// ROUTES
// 1. Create a todo

// 2. Get all todos

// 3. Get a todo

// 4. Update a todo

// 5. Delete a todo

app.listen(5000, () => {
    console.log("Server has started on port 5000")
})
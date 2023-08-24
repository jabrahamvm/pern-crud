const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

// middleware
app.use(cors());
app.use(express.json()); // req.body

// ROUTES
// 1. Create a todo

app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        // RETURNING * will return the data that was just inserted
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);
        // newTodo.rows[0] will be the data that was just inserted
        res.json(newTodo.rows[0]);
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
});

// 2. Get all todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows).status(200);
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
});
// 3. Get a todo
app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT todo_id, description FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]).status(200);

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Server Error")
    }
});
// 4. Update a todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const newDescription = req.body.description;
        const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [newDescription, id]);
        res.json("Todo was updated").status(200);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});
// 5. Delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted").status(200);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});

// Start the server
app.listen(5000, () => {
    console.log("Server has started on port 5000")
})
// This file will configure how we're connecting to the Postgres database
// First we'll load the pg module and env variables
const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();

// Create a new Pool instance
const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 5432,
    database: process.env.DB_NAME
});

module.exports = pool;
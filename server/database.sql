CREATE DATABASE perntodo;
-- This is a comment

CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY, -- SERIAL is auto incrementing, PRIMARY KEY is unique
    description VARCHAR(255) NOT NULL -- VARCHAR is a string with a max length of 255
);
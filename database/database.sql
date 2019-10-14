CREATE DATABASE nodeapi;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email text
);

INSERT INTO users (name, email) VALUES
    ('Julio', 'julio_denis@cinder.com'),
    ('Fernanda', 'fer@cinder.com');

SELECT * FROM users;
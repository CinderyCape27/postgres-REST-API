// Controlador para Postgres
const { Pool } = require('pg');


//  Conección a la base de datos
const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: '',
    database: 'nodeapi',
    port: '5432'
});

// Funcion para métodos GET
const getUser = async (req, res) => {
   const response = await pool.query('SELECT * FROM users');
   console.log(response.rows);
   res.status(200).json(response.rows)
};

const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    res.json(response.rows);
};

// Función para métodos POST
const createUser = async (req, res) => {
    const { name, email } = req.body;

    const response = await pool.query(`INSERT INTO users (name, email) VALUES ($1, $2)`, [name, email]);
    console.log(response);

    res.json({
        message: 'User added succesfully',
        body: {
            user: {name, email}
        }
    });

};
// Función para metodos DELETE
const deleteUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
    console.log(response);
    res.json(`User ${id} has been deleted`)
};

// Función para métodos UPDATE
const editUser = async (req, res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [
        name,
        email,
        id,
    ]);
    console.log(response);
    res.json('User Updated')

};

module.exports = {
    getUser,
    createUser,
    editUser,
    getUserById,
    deleteUserById
}
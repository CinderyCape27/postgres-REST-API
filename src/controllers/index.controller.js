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


// Función para métodos POST
const createUser = async (req, res) => {
    const { name, email } = req.body;

    const response = await pool.query(`INSERT INTO users (name, email) VALUES ($1, $2)`, [name, email]);
    console.log(response);

    res.send('User created');

};
// Función para metodos DELETE
const deleteUser = async (req, res) => {
    console.log(req.body);
    const { name, email } = req.body;
    const response =  await pool.query('DELETE FROM users WHERE name = $1', [name])
    console.log(response);


    res.send('User deleted')
};

// Función para métodos UPDATE
const editUser = async (req, res) => {
    console.log(req.body);
    


    res.send('User updated')

};

module.exports = {
    getUser,
    createUser,
    deleteUser,
    editUser
}
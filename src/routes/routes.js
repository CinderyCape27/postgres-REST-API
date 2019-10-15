// Configuración de las rutas
const { Router } = require('express');
const router = Router()
const { getUser, createUser, getUserById, editUser, deleteUserById} = require('../controllers/index.controller');


// Rutas con el método GET
router.get('/users', getUser);
router.get('/users/:id', getUserById)

// Rutas con el método POST
router.post('/users', createUser);

// Rutas con el método DELETE
router.delete('/users/:id', deleteUserById)

// Rutas con el método UPDATE
router.put('/users/:id', editUser);

module.exports = router;


// Configuración de las rutas
const { Router } = require('express');
const router = Router()
const { getUser, createUser, deleteUser, editUser} = require('../controllers/index.controller');


// Rutas con el método GET
router.get('/users', getUser);

// Rutas con el método POST
router.post('/users', createUser);

// Rutas con el método DELETE
router.delete('/users', deleteUser)

// Rutas con el método UPDATE
router.put('/users', editUser);

module.exports = router;


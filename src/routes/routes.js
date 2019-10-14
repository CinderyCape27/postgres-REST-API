// Configuración de las rutas
const { Router } = require('express');
const router = Router()
const { getUser, createUser, deleteUser} = require('../controllers/index.controller');


// Rutas con el método GET
router.get('/users', getUser);

// Rutas con el método POST
router.post('/users', createUser);

// Rotas con el método DELETE
router.delete('/users', deleteUser)

module.exports = router;


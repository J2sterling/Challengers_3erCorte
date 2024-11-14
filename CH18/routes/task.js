const express = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/task');

const router = express.Router();

// Middleware para validar JWT en todas las rutas de tareas
router.use(validarJWT);

// Rutas para tareas
router.post('/', createTask);          // Crear tarea
router.get('/', getTasks);             // Obtener tareas del usuario
router.put('/:id', updateTask);        // Actualizar tarea
router.delete('/:id', deleteTask);     // Eliminar tarea

module.exports = router;

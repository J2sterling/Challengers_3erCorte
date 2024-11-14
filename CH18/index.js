const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');
const cors = require('cors');

// Crear el servidor de Express
const app = express();

// Base de datos
dbConnection();

// CORS
app.use(cors());

// Lectura y parseo del body
app.use(express.json());

//Servir archivos estaticos 
app.use(express.static('public'));
// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/task', require('./routes/task'));
// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

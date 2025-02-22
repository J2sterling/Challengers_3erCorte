const express = require('express');
require('dotenv').config();

const app = express();

app.use(express.json());
//Servir archivos estaticos 
app.use(express.static('public'));
// Rutas
app.use('/api/auth', require('./routes/auth'));

// Escuchar en el puerto definido
app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

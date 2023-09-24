const express = require('express');
const app = express();
const db = require('./datasources/db');
const petController = require('./controllers/PetController');

app.use(express.json());

// Rutas relacionadas con las mascotas
app.use('/api', petController);

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});

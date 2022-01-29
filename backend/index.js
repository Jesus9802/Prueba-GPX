const express = require('express');
const conectarDB =require('./config/db');
const cors = require('cors'); 

//Creación del servidor

const app = express();


//Conexión a la DB
conectarDB();
app.use(cors());

app.use(express.json());

app.use('/api/personas', require('./routes/persona'));

app.listen(3000, ()=> {
    console.log('Servidor iniciado')
})
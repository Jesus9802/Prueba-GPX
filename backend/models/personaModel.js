const mongoose = require('mongoose');

const personaSchema = mongoose.Schema({
    nombre:{ type: String, required: true },
    apaterno:{ type: String, required: true },
    amaterno:{ type: String, required: true },
    direccion:{ type: String, required: true },
    telefono:{ type: Number, required: true }
});


module.exports = mongoose.model('Persona', personaSchema); 
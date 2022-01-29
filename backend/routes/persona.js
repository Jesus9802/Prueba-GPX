const express = require('express');
const router =express.Router();
const personaController = require('../controllers/personaController');


//ruta api/persona
router.post('/',personaController.agregarPersona);
router.get('/', personaController.obtenerPersonas );
router.put('/:id', personaController.modificarPersona);
router.get('/:id', personaController.obtenerPersona);
router.delete('/:id', personaController.eliminarPersona);


module.exports = router;
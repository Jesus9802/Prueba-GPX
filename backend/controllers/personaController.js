const personaModel = require("../models/personaModel");




//Agregar persona
exports.agregarPersona= async (req, res) =>{
    
    try{

        let persona;

        //Agregando persona
        persona = new personaModel(req.body);

        await persona.save();
        res.send(persona);

    } catch(error){
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }
}



//Consultar a las personas de la DB
exports.obtenerPersonas = async (req, res) =>{

    try {

        const personas = await personaModel.find();
        res.json(personas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }

}



//Modificar persona
exports.modificarPersona = async (req, res) =>{

    try {

        const { nombre, apaterno, amaterno, direccion, telefono } = req.body;
        let persona = await personaModel.findById(req.params.id);

        if(!persona) {
            res.status(404).json({ msg:'La persona no existe' })
        }

        persona.nombre = nombre;
        persona.apaterno = apaterno;
        persona.amaterno = amaterno;
        persona.direccion = direccion;
        persona.telefono = telefono;

        persona = await personaModel.findByIdAndUpdate({ _id: req.params.id }, persona, { new: true })
        res.json(persona);
        
    } catch (error) {

        console.log(error);
        res.status(500).send('Ocurrio un error');
        
    }

}

//Obtener una sola persona
exports.obtenerPersona = async (req, res) => {

    try {

        let persona = await personaModel.findById(req.params.id);

        if(!persona) {
            res.status(404).json({ msg:'La persona no existe' })
        }

        res.json(persona);
        
    } catch (error) { 

        console.log(error);
        res.status(500).send('Ocurrio un error');
        
    }

}


//Eliminar persona
exports.eliminarPersona = async (req, res) =>{

    try {
        
        let persona = await personaModel.findById(req.params.id);

        if(!persona) {
            res.status(404).json({ msg:'La persona no existe' })
        }

        await personaModel.findOneAndRemove({_id: req.params.id});

        res.json({msg: 'Persona eliminada exitosamente'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Ocurrio un error');
    }

}

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: {
        type: 'String',
        required: true,
    },
    email:{
        type: 'String',
        required: true,
    },
    telefono:{
        type: 'String',
        required: true,
    },
    dni:{
        type: 'String',
        required: true,
    },
    comentario:{
        type: 'String',
        required: true,
    },
    timestamp:{
        type: 'Date',
        default: new Date(),
    }
});

const Persona = mongoose.model('persona', schema);

module.exports = Persona;



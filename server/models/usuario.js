const mongoose = require('mongoose');
const { Schema  } = mongoose;

const UsuarioSchema = new Schema({
    nombre: { type: String, required: true },
    usuario: { type: String, required: true },
    email: { type: String, required: true },
    pass: { type: String, required: true },
    edad: { type: Number, required: true }
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
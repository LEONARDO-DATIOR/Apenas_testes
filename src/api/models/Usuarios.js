const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    idade: {type: Number}
})

const UsuarioModel = mongoose.model('Usuario', usuarioSchema)


module.exports = UsuarioModel;
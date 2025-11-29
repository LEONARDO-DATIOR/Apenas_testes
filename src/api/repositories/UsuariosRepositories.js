const UsuarioModel = require("../models/Usuarios.js")

class UsuarioRepositorie {

    async buscarTodos() {
        return await UsuarioModel.find({});
    }

    async criar(usuarioJson) {
        const novoUsuario = await UsuarioModel.create(usuarioJson);
        return novoUsuario
    }

}


module.exports = new UsuarioRepositorie();
const UserModel = require("../models/Usuarios.js")

let usuarios = [];
let currentId = 1;

class UsuarioRepositorie {

    buscarTodos() {
        return usuarios;
    }

    buscarPorId(id) {
        return usuarios.find(user => user.id == id)
    }

    criar(nome, idade) {
        const novo = new UserModel(currentId++, nome, idade);
        usuarios.push(novo);
        return novo;
    }

    atualizar(id, nome, idade) {
        const usuario = this.buscarPorId(id)
        if (!usuario) return null;

        usuario.nome = nome;
        usuario.idade = idade;
        return usuario;
    }

    deletar(id) {
        const anterior = usuarios.length;
        usuarios = usuarios.filter(u => u.id !== id);
        return usuarios.length < anterior; // true = deletou
    }


}


module.exports = new UsuarioRepositorie();
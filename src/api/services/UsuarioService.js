const UsuarioRepositorie = require('../repositories/UsuariosRepositories.js')

class UsuarioService {

    buscarTodos() {
        return UsuarioRepositorie.buscarTodos();
    }

    buscarPorId(id) {
        const usuario = UsuarioRepositorie.buscarPorId(id)
        if (!usuario) throw new Error("Usuario não encontrado!")
        return usuario;
    }

    criarUsuario(nome, idade) {
        if (!nome) throw new Error("Nome é obrigatorio")
        if (!idade) throw new Error("idade é obrigatorio")

        return UsuarioRepositorie.criar(nome, idade)
    }

    atualizarUsuario(id, nome, idade) {
        const usuario = UsuarioRepositorie.atualizar(id, nome, idade)
        if (!usuario) throw new Error("Não foi possivel atualizar!")
        return usuario
    }

    deletarUsuario(id) {
        const ok = UsuarioRepositorie.deletar(id)
        if (!ok) throw new Error("Não foi possivel deletar!");
        return true
    }
}

module.exports = new UsuarioService();
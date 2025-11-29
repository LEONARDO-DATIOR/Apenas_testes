const UsuarioRepositorie = require('../repositories/UsuariosRepositories.js')

class UsuarioService {

    async buscarTodos() {
        return await UsuarioRepositorie.buscarTodos();
    }

    buscarPorId(id) {
        const usuario = UsuarioRepositorie.buscarPorId(id)
        if (!usuario) throw new Error("Usuario não encontrado!")
        return usuario;
    }

    async criarUsuario(usuarioJson) {
        if (!usuarioJson.nome) throw new Error("Nome é obrigatorio")
        return await UsuarioRepositorie.criar(usuarioJson)
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
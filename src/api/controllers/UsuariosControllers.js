const UsuarioService = require('../services/UsuarioService.js');
const UsarioService = require('../services/UsuarioService.js');

class UsuarioController {

    list(req, res) {
        const usuario = UsarioService.buscarTodos();
        return res.json(usuario)
    }

    get(req, res) {
        try {
            const id = Number(req.params.id);
            const usuario = UsarioService.buscarPorId(id);
            return res.json(usuario);            
        } catch(erro) {
            return res.status(400).json({erro: erro.message})
        }
    }

    create(req, res) {
        try {
            const { nome, idade } = req.body;
            const usuario = UsuarioService.criarUsuario(nome, idade);
            return res.status(201).json(usuario);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    update(req, res) {
        try {
            const id = Number(req.params.id);
            const { nome, idade } = req.body;
            const usuario = UsuarioService.atualizarUsuario(id, nome, idade);
            return res.json(usuario);
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }

    remove(req, res) {
        try {
            const id = Number(req.params.id);
            UsuarioService.deletarUsuario(id);
            return res.status(204).send();
        } catch (err) {
            return res.status(404).json({ error: err.message });
        }
    }
}

module.exports = new UsuarioController();
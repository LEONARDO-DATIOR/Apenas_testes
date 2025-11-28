const { Router } = require('express')
const UsuarioController = require('../controllers/UsuariosControllers.js')

const router = Router();

router.get("/", UsuarioController.list);
router.post("/", UsuarioController.create);


module.exports =  router;

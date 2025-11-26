const { Router } = require('express')

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send("Agora entrou em")
    // Chamar o controller no lugar de criar a função direto aqui
});


module.exports =  router;

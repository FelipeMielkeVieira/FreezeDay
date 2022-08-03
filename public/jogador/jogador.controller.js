const express = require("express");
const router = express.Router();

const jogadorHandler = require("./jogador.handler");

router.get("/", async (req, res) => {
    const jogadores = await jogadorHandler.buscarJogadores();
    res.json(jogadores);
});

router.get("/:id", async (req, res) => {
    res.json(await jogadorHandler.buscarJogador(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await jogadorHandler.criarJogador(req.body));
});

router.delete('/:id', async (req, res) => {
    res.json(await jogadorHandler.deletarJogador(req.params.id));
});

module.exports = router;
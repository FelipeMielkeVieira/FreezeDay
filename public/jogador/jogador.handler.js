const { criar, buscar, buscarPorId, deletar } = require('../crud/index');

async function criarJogador(jogador) {
    const novoJogador = await criar("jogadores", null, jogador);
    return novoJogador;
}

async function buscarJogadores() {
    const jogadores = await buscar("jogadores");
    return jogadores;
}

async function buscarJogador(id) {
    const jogador = await buscarPorId("jogadores", id);
    return jogador;
}

async function deletarJogador(id) {
    const jogadorDeletado = deletar('jogadores', id);
    return jogadorDeletado;
}

module.exports = {
    criarJogador,
    buscarJogadores,
    buscarJogador,
    deletarJogador
};
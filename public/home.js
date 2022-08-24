// const jogador = require("./jogador/jogador.handler");

// async function criarJogador(nomeJogador){
//     await fetch('http://localhost:3000/', {method:'POST', body:JSON.stringify({nome: nomeJogador}), headers: {'Content-Type': "application/json"}})
// }

async function jogar() {
    let nomeJogador = document.querySelector("#nomeUsuario").value;
    if (nomeJogador) {
        window.location.href = "http://localhost:3000/mundo1"
        localStorage.setItem("jogador", nomeJogador);
    } else {
        alert("Digite um nome de jogador!")
    }
}
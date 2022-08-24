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

function ranking(){
    window.location.href = "http://localhost:3000/rankings";
}

if(!localStorage.getItem("lista")) {
    localStorage.setItem("lista", JSON.stringify({lista:[{nome: "Vieira", tempo: 178}, {nome: "Matheus", tempo: 170}, {nome: "Kenzo", tempo: 180}]}))
}
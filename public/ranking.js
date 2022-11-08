let divPrincipal = document.querySelector('.containerRanking');
console.log(divPrincipal);

// localStorage.setItem("lista", '{"lista":[{"nome":"matheus","tempo":256}, {"nome":"kenzo","tempo":156}, {"nome":"aa","tempo":90}, {"nome":"eu","tempo":33}, {"nome":"aa","tempo":90}, {"nome":"eu","tempo":33}, {"nome":"aa","tempo":90}, {"nome":"eu","tempo":33}, {"nome":"aa","tempo":90}, {"nome":"eu","tempo":33}, {"nome":"aa","tempo":90}, {"nome":"eu","tempo":33}, {"nome":"aa","tempo":90}, {"nome":"eu","tempo":33}, {"nome":"aa","tempo":90}, {"nome":"eu","tempo":33}, {"nome":"aa","tempo":90}, {"nome":"eu","tempo":33}]}');

function criarTabela() {
    let tabelaAtual = document.querySelector('table');

    if (tabelaAtual) {
        tabelaAtual.remove();
    }

    const tabela = document.createElement('table');
    const linha = document.createElement('tr');
    const colunaPosicao = document.createElement('th');
    const colunaNome = document.createElement('th');
    const colunaTempo = document.createElement('th');

    colunaPosicao.className = "colunaPosicao";
    colunaNome.className = "colunaNome";
    colunaTempo.className = "colunaTempo";

    colunaPosicao.innerText = "Posição";
    colunaNome.innerText = "Nome";
    colunaTempo.innerText = "Tempo";

    tabela.appendChild(linha);
    linha.appendChild(colunaPosicao);
    linha.appendChild(colunaNome);
    linha.appendChild(colunaTempo);

    divPrincipal.appendChild(tabela);
}

criarTabela();

function ordenar(lista = []) {
    const novaLista = lista.sort((a, b) => a.tempo - b.tempo);
    return novaLista;
}

function inserirRegistro() {
    const lista = JSON.parse(localStorage.getItem("lista"));
    const tabela = document.querySelector("table");

    let contador = 1;

    const dados = ordenar(lista.lista);

    dados.forEach(e => {
        const linha = document.createElement('tr');
        const colunaPosicao = document.createElement('td');
        const colunaNome = document.createElement('td');
        const colunaTempo = document.createElement('td');

        colunaNome.innerText = e.nome;
        colunaTempo.innerText = e.tempo;
        colunaPosicao.innerText = contador;

        linha.appendChild(colunaPosicao);
        linha.appendChild(colunaNome);
        linha.appendChild(colunaTempo);
        tabela.appendChild(linha);
        contador++;
    });

}

inserirRegistro();


function botaoVoltar(){
    window.location = "http://localhost:3000/";
}




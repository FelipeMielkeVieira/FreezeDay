let divPrincipal = document.getElementsByClassName('principal');

let listaJogadores = [];

function criarTabela(){
    let tabelaAtual = document.querySelector('table');

    if(tabelaAtual){
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

    listaJogadores.forEach(function(e){
        const linhaTabela = dadosTabela(
            e.nome,
            e.tempo
        );

        tabela.appendChild(linhaTabela);

    });

    return tabela;
    
}

function dadosTabela(){
    const linha = document.createElement('tr');
    const colunaPosicao = document.createElement('td');
    const colunaNome = document.createElement('td');
    const colunaTempo = document.createElement('td');

    const botaoPesquisa = document.createElement('button');
}


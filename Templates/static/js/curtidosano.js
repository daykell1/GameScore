// Dados dos jogos mais curtidos do ano (exemplo)
const jogosMaisCurtidosAno = [
    {
        nome: "Jogo 1",
        imagem: "img/GameScore.jpg"
    },
    {
        nome: "Jogo 2",
        imagem: "img/GameScore.jpg"
    },
    // Adicione mais jogos conforme necessário
];

// Dados dos jogos favoritos da semana (exemplo)
const jogosFavoritosSemana = [
    {
        nome: "Jogo A",
        imagem: "img/GameScore.jpg"
    },
    {
        nome: "Jogo B",
        imagem: "img/GameScore.jpg"
    },
    // Adicione mais jogos conforme necessário
];

// Função para preencher a lista de jogos mais curtidos do ano
function preencherJogosMaisCurtidosAno() {
    const listaJogos = document.getElementById("jogos-curtidos-ano");

    jogosMaisCurtidosAno.forEach((jogo) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = jogo.imagem;
        img.alt = jogo.nome;

        li.appendChild(img);
        listaJogos.appendChild(li);
    });
}

// Função para preencher a lista de jogos favoritos da semana
function preencherJogosFavoritosSemana() {
    const listaJogos = document.getElementById("jogos-favoritos");

    jogosFavoritosSemana.forEach((jogo) => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = jogo.imagem;
        img.alt = jogo.nome;

        li.appendChild(img);
        listaJogos.appendChild(li);
    });
}

// Chame as funções para preencher as listas quando a página carregar
window.onload = function () {
    preencherJogosMaisCurtidosAno();
    preencherJogosFavoritosSemana();
};

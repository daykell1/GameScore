<script>
// Associando o botão e a lista de seleção a variáveis em JavaScript
const botaoEscolha = document.getElementById('botaoEscolha');
const opcoes = document.getElementById('opcoes');

// Adicionando um ouvinte de evento ao botão para lidar com o clique
botaoEscolha.addEventListener('click', function() {
    // Obtendo o valor selecionado na lista de seleção
    const opcaoSelecionada = opcoes.value;

    // Fazendo algo com a opção selecionada, por exemplo, exibindo-a em um alerta
    alert('Opção selecionada: ' + opcaoSelecionada);
});
</script>
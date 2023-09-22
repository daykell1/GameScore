// Importando a função forgotpassword do arquivo onde ela está definida
import { forgotpassword } from './';

// Selecionando o elemento de email e o botão (substitua com os seletores reais)
const emailInput = document.getElementById('email-input');
const forgotButton = document.getElementById('forgot-button');

// Adicionando um ouvinte de evento de clique ao botão de envio
forgotButton.addEventListener('click', () => {
    const email = emailInput.value;

    // Desabilitei o botão e altere o texto (opcional)
    forgotButton.setAttribute('disabled', 'disabled');
    forgotButton.innerText = 'Enviando...';

    // Chami a função forgotpassword com o email e o botão
    forgotpassword(email, forgotButton);
});


document.addEventListener("DOMContentLoaded", function () {
    const forgotPasswordButton = document.getElementById("forgotPasswordButton");

    // Adicionei um ouvinte de clique ao botão de recuperação de senha
    forgotPasswordButton.addEventListener("click", function () {
        // Simular o envio do formulário (você deve implementar a lógica real aqui)
        // Neste exemplo, exibiremos um alerta para representar o envio do formulário
        alert("Formulário de recuperação de senha enviado. Verifique seu e-mail.");
    });
});


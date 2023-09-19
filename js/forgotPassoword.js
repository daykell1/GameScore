// Importe a função forgotpassword do arquivo onde ela está definida
import { forgotpassword } from './caminho_para_o_arquivo_com_a_funcao';

// Selecione o elemento de email e o botão (substitua com os seletores reais)
const emailInput = document.getElementById('email-input');
const forgotButton = document.getElementById('forgot-button');

// Adicione um ouvinte de evento de clique ao botão de envio
forgotButton.addEventListener('click', () => {
    const email = emailInput.value;

    // Desabilite o botão e altere o texto (opcional)
    forgotButton.setAttribute('disabled', 'disabled');
    forgotButton.innerText = 'Enviando...';

    // Chame a função forgotpassword com o email e o botão
    forgotpassword(email, forgotButton);
});

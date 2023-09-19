// Obtém uma referência para o botão
const createButton = document.getElementById('createButton');


// Adiciona um ouvinte de evento de clique ao botão
createButton.addEventListener('click', function() {
    // Alterna a classe clicked quando o botão for clicado
    createButton.classList.toggle('clicked');
});


document.addEventListener('DOMContentLoaded', function() {
    // Gere um problema matemático simples para o CAPTCHA
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const captchaText = document.getElementById('captchaText');
    captchaText.textContent = `${num1} + ${num2} =`;

    const captchaInput = document.getElementById('captchaInput');
    const captchaResult = document.getElementById('captchaResult');

    const checkCaptcha = document.getElementById('checkCaptcha');
    checkCaptcha.addEventListener('click', function() {
        const userAnswer = parseInt(captchaInput.value);
        const correctAnswer = num1 + num2;

        if (userAnswer === correctAnswer) {
            captchaResult.textContent = 'CAPTCHA correto! Você é um humano.';
            captchaResult.style.color = 'green';
        } else {
            captchaResult.textContent = 'CAPTCHA incorreto. Tente novamente.';
            captchaResult.style.color = 'red';
            // Atualize o CAPTCHA
            num1 = Math.floor(Math.random() * 10);
            num2 = Math.floor(Math.random() * 10);
            captchaText.textContent = `${num1} + ${num2} =`;
            captchaInput.value = '';
        }
    });
});


// captcha 

// Função para gerar um código captcha aleatório
function generateCaptchaCode(length = 6) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captchaCode = '';
    for (let i = 0; i < length; i++) {
        captchaCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captchaCode;
}

// Função para exibir o captcha gerado
function displayCaptcha() {
    const captchaText = generateCaptchaCode();
    document.getElementById('captchaText').textContent = captchaText;
}

// Função para validar a entrada do usuário
function validateCaptcha() {
    const captchaText = document.getElementById('captchaText').textContent;
    const userInput = document.getElementById('userInput').value;
    const message = document.getElementById('message');

    if (userInput === captchaText) {
        message.textContent = 'Captcha válido! Você não é um robô.';
        message.style.color = 'green';
    } else {
        message.textContent = 'Captcha inválido. Tente novamente.';
        message.style.color = 'red';
        displayCaptcha(); // Gerar um novo captcha para tentativas subsequentes
    }
}

// Inicialize exibindo o captcha quando a página carregar
displayCaptcha();

    // Implemente a validação do captcha e a validação de outros campos aqui
    // Verifique o nome de usuário, o email, a senha, etc.
  
    if (validationPassed) {
      // Se a validação for bem-sucedida, envie os dados para o servidor
      const username = document.querySelector('.login-input[name="username"]').value;
      const email = document.querySelector('.login-input[name="email"]').value;
      const password = document.querySelector('.login-input[name="password"]').value;
  
      // Use a função fetch() ou outra biblioteca para enviar os dados ao servidor
      fetch('/criar-conta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Verifique a resposta do servidor e forneça feedback ao usuário
          if (data.success) {
            // Redirecione o usuário para a página de sucesso
            window.location.href = '/sucesso';
          } else {
            // Mostre uma mensagem de erro ao usuário
            document.querySelector('#message').textContent = data.message;
          }
        })
        .catch((error) => {
          console.error('Erro ao enviar dados para o servidor:', error);
        });
    }
  
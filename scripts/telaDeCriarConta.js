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

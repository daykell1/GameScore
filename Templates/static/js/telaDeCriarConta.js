document.addEventListener('DOMContentLoaded', function () {
    const createButton = document.getElementById('createButton');

    const express = require('express');
    const app = express();
    const Sequelize = require('sequelize');
    const bodyParser = require('body-parser');
    
    // Configurar Sequelize
    const sequelize = new Sequelize('GameScore', 'postgres', '2323',{
      host: 'localhost',
      dialect: 'postgres', // ou outro banco de dados
    });
    
    // Definir um modelo de usuário
    const User = sequelize.define('User', {
      username: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
    });
    
    // Configurar o Body Parser para lidar com dados do formulário
    app.use(bodyParser.urlencoded({ extended: true }));
    
    // Rota para receber os dados do formulário
    app.post('/cadastrar', async (req, res) => {
      const { username, email, password } = req.body;
    
      try {
        // Crie um novo usuário no banco de dados usando o modelo User
        const newUser = await User.create({ username, email, password });
        res.status(201).json(newUser);
      } catch (error) {
        console.error('Erro ao criar o usuário:', error);
        res.status(500).json({ error: 'Erro ao criar o usuário.' });
      }
    });
    
    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
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


document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const successParam = urlParams.get('success');

    const resultMessage = document.getElementById('result-message');

    if (successParam === 'true') {
        resultMessage.textContent = 'Usuário cadastrado com sucesso!';
        resultMessage.style.color = 'green';
    } else if (successParam === 'false') {
        resultMessage.textContent = 'Erro ao cadastrar o usuário. Tente novamente.';
        resultMessage.style.color = 'red';
    }
});


// Obtém uma referência para o botão "Create"
const createButton = document.getElementById('createButton');

// Adiciona um ouvinte de evento de clique ao botão
createButton.addEventListener('click', function() {
    // Adicione a classe "clicked" ao botão
    createButton.classList.add('clicked');

    // Use setTimeout para remover a classe após um breve atraso (por exemplo, 500ms)
    setTimeout(function() {
        createButton.classList.remove('clicked');
    }, 500); // 500ms (meio segundo) de atraso
});

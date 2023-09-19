document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {};
        
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Envie os dados do formulário para o servidor (Node.js) usando AJAX ou fetch.
        // O servidor deve lidar com a inserção no banco de dados PostgreSQL.

        // Exemplo de uso de fetch (substitua com a URL do seu servidor):
        fetch('https://seuserver.com/api/registro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            // Lidar com a resposta do servidor aqui (por exemplo, exibir uma mensagem de sucesso ou erro).
            console.log(data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // para Mostra a senha ou não
    const senhaInput = document.getElementById("password");
    const mostrarSenhaCheckbox = document.getElementById("mostrarSenha");

    mostrarSenhaCheckbox.addEventListener("change", function() {
        if (mostrarSenhaCheckbox.checked) {
            senhaInput.type = "text";
        } else {
            senhaInput.type = "password";
        }
    });

    // Botão de Log in 
    const loginButton = document.getElementById("myButton");

    loginButton.addEventListener("click", function() {
        loginButton.classList.toggle("clicked");
    });
});
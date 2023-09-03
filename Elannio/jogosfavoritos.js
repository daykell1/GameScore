$(document).ready(function() {
    // Configurações do carrossel
    var currentSlide = 0;
    var totalSlides = $(".banner").length;

    // Função para mostrar o próximo slide
    function showNextSlide() {
        $(".banner").eq(currentSlide).fadeOut();
        currentSlide = (currentSlide + 1) % totalSlides;
        $(".banner").eq(currentSlide).fadeIn();
    }

    // Inicializa o carrossel
    $(".banner").hide();
    $(".banner").eq(0).show();

    // Define o intervalo de tempo para trocar os slides (5 segundos neste exemplo)
    var interval = setInterval(showNextSlide, 5000);

    // Pausa o carrossel quando o mouse estiver sobre ele
    $(".carrossel").hover(function() {
        clearInterval(interval);
    }, function() {
        interval = setInterval(showNextSlide, 5000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Obtenha uma referência ao elemento de carrossel
    const carousel = document.getElementById("carousel");
  
    // Obtenha uma lista de todos os slides no carrossel
    const slides = carousel.querySelectorAll(".carousel-slide");
  
    // Inicialize o índice do slide atual
    let currentSlideIndex = 0;
  
    // Função para mostrar o próximo slide
    function nextSlide() {
      slides[currentSlideIndex].style.display = "none";
      currentSlideIndex = (currentSlideIndex + 1) % slides.length;
      slides[currentSlideIndex].style.display = "block";
    }
  
    // Função para mostrar o slide anterior
    function prevSlide() {
      slides[currentSlideIndex].style.display = "none";
      currentSlideIndex =
        (currentSlideIndex - 1 + slides.length) % slides.length;
      slides[currentSlideIndex].style.display = "block";
    }
  
    // Adicione eventos de clique às setas de navegação
    const prevButton = carousel.querySelector(".carousel-prev");
    const nextButton = carousel.querySelector(".carousel-next");
  
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  
    // Inicialize o carrossel mostrando o primeiro slide
    slides[currentSlideIndex].style.display = "block";
  });
  
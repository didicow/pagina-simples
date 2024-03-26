document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        console.log('Link clicado:', this.getAttribute('href')); // Log para verificar o valor do atributo href

        const targetId = this.getAttribute('href'); // Obtém o valor do atributo href
        console.log('ID alvo:', targetId); // Log para verificar o valor do ID alvo

        const targetElement = document.querySelector(targetId); // Seleciona o elemento correspondente

        console.log('Elemento alvo:', targetElement); // Log para verificar o elemento alvo selecionado

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// JS para mostrar imagens

const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev-slide');
const nextButton = document.querySelector('.next-slide');

let currentIndex = 0; // Índice do slide atual

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    }); 

    slides[index].style.display = 'block';
}

showSlide(currentIndex);

prevButton.addEventListener('click', function(){
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', function(){
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

//Definindo Variaveis e selecionando Elementos Html
const carouselCountainer = document.querySelector(".countainer");
const carouselSlide = document.querySelectorAll(".carousel-slide");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;
//criando funçoes
function atualizarCarousel() {
  carouselSlide.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add("active");
      indicators[index].classList.add("active");
    } else {
      slide.classList.remove("active");
      indicators[index].classList.remove("active");
    }
  });
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselSlide.length) {
    currentIndex = 0;
  }
  atualizarCarousel();
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselSlide.length = 1;
  }
  atualizarCarousel();
}

function autoSlide() {
  nextSlide();
}
//Criando Listener(Ouvintes) para os botoes

prevButton.addEventListener("click", prevSlide);

nextButton.addEventListener("click", nextSlide);

//iniciar slides automaticamente

setInterval(autoSlide, 7000);

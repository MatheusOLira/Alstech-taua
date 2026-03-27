// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Header muda ao rolar
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');

  if (window.scrollY > 50) {
    header.style.background = "rgba(15, 23, 42, 0.95)";
  } else {
    header.style.background = "rgba(15, 23, 42, 0.7)";
  }
});

const track = document.getElementById("carouselTrack");
const cards = document.querySelectorAll(".review");
const dotsContainer = document.getElementById("dots");

let index = 0;
let autoSlide;

// criar bolinhas
cards.forEach((_, i) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");

  if (i === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
    restartAutoSlide();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// atualizar carrossel
function updateCarousel() {
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// slide automático
function slide() {
  index++;

  if (index >= cards.length) {
    index = 0;
  }

  updateCarousel();
}

// autoplay
function startSlide() {
  autoSlide = setInterval(slide, 4000);
}

// reinicia ao clicar
function restartAutoSlide() {
  clearInterval(autoSlide);
  startSlide();
}

// pause no hover
track.addEventListener("mouseenter", () => clearInterval(autoSlide));
track.addEventListener("mouseleave", startSlide);

// iniciar
startSlide();
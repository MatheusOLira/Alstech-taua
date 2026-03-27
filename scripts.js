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
// carousel elements
const track = document.querySelector('.site-carousel-track');
const slides = track ? Array.from(track.children) : [];
let currentIndex = 0;

// update the visible slide
function updateSlide() {
  if (!track || slides.length === 0) return;

  const amountToMove = -currentIndex * 100;
  track.style.transform = `translateX(${amountToMove}%)`;
}

// move to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

// update the active navigation link
document.querySelectorAll('.navbar-home .nav-link[href]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.navbar-home .nav-link.active')?.classList.remove('active');
    link.classList.add('active');
  });
});

// start the carousel timer
if (slides.length > 1) {
  setInterval(nextSlide, 5000);
}

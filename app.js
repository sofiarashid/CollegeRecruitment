const track = document.querySelector('.site-carousel-track');
const slides = track ? Array.from(track.children) : [];
let currentIndex = 0;

function updateSlide() {
  if (!track || slides.length === 0) return;

  const amountToMove = -currentIndex * 100;
  track.style.transform = `translateX(${amountToMove}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide();
}

// carousel changes img every 5 seconds
if (slides.length > 1) {
  setInterval(nextSlide, 5000);
}

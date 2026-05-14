const inner = document.querySelector('.carousel-inner');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;

items.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
  inner.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

prevBtn.addEventListener('click', () => {
  currentIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
  updateCarousel();
});

setInterval(() => {
  currentIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
  updateCarousel();
}, 3000);

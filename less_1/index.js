const slides = document.querySelectorAll('.slide');
const bg = document.querySelector('img');

for (const slide of slides) {
  slide.addEventListener('click', () => {
    const bg_new = slide.style.backgroundImage.slice(5, -2);
    clearActiveClasses();
    slide.classList.add('active');
    bg.classList.add('img-change-animation');
    setTimeout(() => {
      bg.src = bg_new;
      bg.classList.add('visible');
    }, 300);
    setTimeout(() => {
      bg.classList.remove('img-change-animation', 'visible');
    }, 600);
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  })
}
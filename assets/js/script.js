let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelector('.slider-inner');
  const totalSlides = document.querySelectorAll('.slider-wrapper').length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

let headertext = document.getElementById('header-text1');
ScrollReveal().reveal('#header-text1', { 
  distance: '100px',
  duration: 600,
  easing: 'ease-in',
  origin: 'left',
  reset: true ,
});

let headertext2 = document.getElementById('header-text2');
ScrollReveal().reveal('#header-text2', { 
  distance: '100px',
  duration: 600,
  easing: 'ease-in',
  origin: 'right',
  Infinity : true,
  reset: true
});
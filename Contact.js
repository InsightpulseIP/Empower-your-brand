let currentIndex = 0;
const cards = document.querySelectorAll('.contact-card');
const slider = document.querySelector('.slider');
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; 
}

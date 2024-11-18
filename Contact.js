let currentIndex = 0;
const cards = document.querySelectorAll('.contact-card');
const slider = document.querySelector('.slider');
function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; 
}
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});
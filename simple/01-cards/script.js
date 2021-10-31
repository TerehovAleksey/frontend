const slides = document.querySelectorAll('.slide');
slides.forEach(slide => slide.addEventListener('click', () => {
    clearActiveClasses();
    slide.classList.add('active');
}));

const clearActiveClasses = () => {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
};

const active = Math.floor(Math.random() * 5);
slides[active].classList.add('active');

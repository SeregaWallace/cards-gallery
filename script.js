const slides = document.querySelectorAll('.slide');

const removeSlideActive = () => {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
};

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        removeSlideActive();
        
        slide.classList.add('active');
    });
});
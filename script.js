document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    let index = 0;
    const images = carousel.querySelectorAll('img');
    
    setInterval(() => {
        index = (index + 1) % images.length;
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 3000); // Change image every 3 seconds
});

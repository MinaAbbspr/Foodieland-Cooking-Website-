document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector('.sug-grid-wrapper');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    const cardWidth = 330; 

    nextBtn.addEventListener('click', () => {
        wrapper.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });

    prevBtn.addEventListener('click', () => {
        wrapper.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });
});
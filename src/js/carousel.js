/* ===========================================
   carousel.js — Slider Logic
   SMA Nusantara Cendekia
   =========================================== */

export function initCarousel() {
    const track = document.getElementById('testimonial-track');
    const dots = document.querySelectorAll('.slider-dot');

    if (!track || !dots.length) return;

    let currentSlide = 0;
    const totalSlides = dots.length;

    function moveSlider(index) {
        track.style.transform = `translateX(-${index * 100}%)`;

        // Update dots
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        currentSlide = index;
    }

    // Dot Click events
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveSlider(index);
        });
    });

    // Auto Play (optional)
    setInterval(() => {
        currentSlide = (currentSlide + 1) % totalSlides;
        moveSlider(currentSlide);
    }, 5000);
}

// Auto init
document.addEventListener('DOMContentLoaded', initCarousel);

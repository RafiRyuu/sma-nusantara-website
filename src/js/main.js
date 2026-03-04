/**
 * main.js — Core Logic & Navbar
 * SMA Nusantara Cendekia
 */

// Navbar logic
const header = document.querySelector('header')
const navbarToggle = document.getElementById('navbar-toggle')
const navbarMenu = document.getElementById('navbar-menu')

// Scroll event for header
if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled')
        } else {
            header.classList.remove('scrolled')
        }
    })
}

// Mobile menu toggle
if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('is-open')
        navbarToggle.classList.toggle('is-active')
    })
}

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    // Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons()
    }

    // 4. FAQ Accordion Toggle (W3F3)
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');

            // Close all other items (optional: remove for multiple open items)
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    // Active Link Highlighting (W4F1)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNav() {
        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 100;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(`#${sectionId}`)) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    console.log('✅ SMA Nusantara Cendekia — Website loaded successfully.')
})

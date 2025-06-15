document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    // --- Navigation Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('is-open');
            document.body.classList.toggle('nav-open');
        });
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('is-open');
                document.body.classList.remove('nav-open');
            });
        });
    }

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth' }); }
            } else {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // --- Sticky Header Shrink ---
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('shrink', window.scrollY > 60);
        });
    }

    // --- Contact Form Validation & Modal ---
    const form = document.getElementById('quoteForm');
    const modal = document.getElementById('thankYou');
    const modalClose = document.getElementById('modalClose');
    if (form && modal && modalClose) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            const name = form.elements['name'].value.trim();
            const phone = form.elements['phone'].value.trim();
            const details = form.elements['details'].value.trim();

            // Simple validation: ensure fields are not empty
            if (name && phone && details) {
                modal.classList.add('show');
                form.reset();
            } else {
                alert('Please fill out all fields to send your message.');
            }
        });
        const closeModal = () => modal.classList.remove('show');
        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) { closeModal(); }
        });
    }
});
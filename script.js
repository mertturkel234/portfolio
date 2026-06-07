// Update tasks 5-9 to in progress
// Wait, this is for writing script.js
document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal-scroll');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    
    // Header background blur on scroll
    const header = document.querySelector('.site-header');
    
    const toggleHeaderBackground = () => {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(10, 10, 12, 0.85)';
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(10, 10, 12, 0.7)';
            header.style.boxShadow = 'none';
        }
    };

    window.addEventListener('scroll', () => {
        revealOnScroll();
        toggleHeaderBackground();
    });
    
    // Trigger once on load
    revealOnScroll();
    toggleHeaderBackground();
});

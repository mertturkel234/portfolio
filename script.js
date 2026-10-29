document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal-scroll');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - 80) {
                element.classList.add('active');
            }
        });
    };

    // Header background blur on scroll
    const header = document.getElementById('site-header');
    const toggleHeaderBackground = () => {
        if (!header) return;
        if (window.scrollY > 50) {
            header.style.background = 'rgba(9, 9, 11, 0.9)';
            header.style.boxShadow = '0 6px 30px rgba(0, 0, 0, 0.35)';
        } else {
            header.style.background = 'rgba(9, 9, 11, 0.75)';
            header.style.boxShadow = 'none';
        }
    };

    // Project Category Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('[data-category]');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.getAttribute('data-filter');
            projectItems.forEach(item => {
                const categories = (item.getAttribute('data-category') || '').split(' ');
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    window.addEventListener('scroll', () => {
        revealOnScroll();
        toggleHeaderBackground();
    });

    revealOnScroll();
    toggleHeaderBackground();
});

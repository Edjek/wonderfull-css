const header = document.querySelector('.header');
const navbarToggle = document.querySelector('.navbar__toggle');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarLinks = document.querySelectorAll('.navbar__link');

let lastScroll = 0;
let ticking = false;

// Gestion du menu mobile
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Gestion de l'apparition/disparition de la navbar au scroll
const handleScroll = () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll && !header.classList.contains('hidden')) {
        header.classList.add('hidden');
    } else if (currentScroll < lastScroll && header.classList.contains('hidden')) {
        header.classList.remove('hidden');
    }

    lastScroll = currentScroll;
    ticking = false;
};

window.addEventListener(
    'scroll',
    () => {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    },
    { passive: true }
);

// Fermer le menu mobile lors du clic sur un lien
navbarLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    });
});

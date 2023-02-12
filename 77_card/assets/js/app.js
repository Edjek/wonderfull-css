const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        let cardRect = card.getBoundingClientRect();
        let x = e.offsetX;
        let y = e.offsetY;

        let angleX = (y - cardRect.height / 2) / 8;
        let angleY = -(x - cardRect.width / 2) / 6;

        let glowX = (x / cardRect.width) * 100;
        let glowY = (y / cardRect.height) * 100;

        card.children[0].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        card.children[1].style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
        card.children[1].style.backgroundImage = `radial-gradient(circle at ${glowX}% ${glowY}% , rgba(255, 255, 255, .3), transparent)`;
    });

    card.addEventListener('mouseleave', () => {
        card.children[0].style.transform = `rotateX(0) rotateY(0) scale(1)`;
        card.children[1].style.transform = `rotateX(0) rotateY(0) scale(1)`;

        card.children[1].style.backgroundImage = `radial-gradient(circle at 50% 0% , rgba(255, 255, 255, .3), transparent)`;
    });
});

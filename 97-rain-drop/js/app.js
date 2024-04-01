const card = document.querySelector('#weather');

for (let i = 0; i < 50; i++) {
    const drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.transform = `scale(${Math.random() * 0.2})`;
    drop.style.left = `${Math.random() * 500 - 100}px`;
    drop.style.animationDelay = `${Math.random() * 4}s`;

    card.append(drop);
}

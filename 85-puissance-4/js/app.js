const cases = document.querySelectorAll('.case');

cases.forEach((play) => {
    play.addEventListener('click', () => {
        play.classList.toggle('active');
    });
});


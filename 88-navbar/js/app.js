const menuToggle = document.querySelector('#menuToggle');

menuToggle.addEventListener('click', function () {
    if (window.innerWidth < 580) {
        menuToggle.classList.toggle('open');
    }
});
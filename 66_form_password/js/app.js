const show = document.getElementById('show');

show.addEventListener('click', () => {
    show.classList.toggle('bi-eye-slash');
    show.classList.toggle('bi-eye');
    const type = pswd.getAttribute('type') === 'password' ? 'text' : 'password';
    pswd.setAttribute('type', type);
});

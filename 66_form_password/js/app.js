const eye = document.getElementById('show');

eye.addEventListener('click', () => {
    eye.classList.toggle('bi-eye-slash');
    eye.classList.toggle('bi-eye');
    const type = pswd.getAttribute('type') === 'password' ? 'text' : 'password';
    pswd.setAttribute('type', type);
});

const toggle = document.querySelector('.toggle');

console.log(toggle);
toggle.addEventListener('click', (e) => {
    toggle.classList.toggle('active');
});

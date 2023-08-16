const toggle = document.querySelector('#toggle')
const moon = document.querySelector('#moon')

toggle.addEventListener('click', () => {
    moon.classList.toggle('active')
})
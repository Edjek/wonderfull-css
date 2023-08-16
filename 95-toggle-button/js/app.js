const body = document.querySelector('body')
const toggle = document.querySelector('#toggle')
const moon = document.querySelector('#moon')

toggle.addEventListener('click', () => {
    moon.classList.toggle('active')
    body.classList.toggle('active')
})
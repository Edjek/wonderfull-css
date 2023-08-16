const body = document.querySelector('body')
const toggle = document.querySelector('#toggle')
const moon = document.querySelector('#moon')
const checkbox = document.querySelector('#toggle input[type=checkbox]')


toggle.addEventListener('change', () => {
    moon.classList.toggle('active')
    body.classList.toggle('active')
    console.log(checkbox.checked);
})
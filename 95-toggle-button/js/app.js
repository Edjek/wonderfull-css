const body = document.querySelector('body')
const toggle = document.querySelector('#toggle')
const star = document.querySelector('#star')


toggle.addEventListener('change', () => {
    star.classList.toggle('active')
    body.classList.toggle('active')
})
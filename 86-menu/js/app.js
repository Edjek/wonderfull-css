const navList = document.querySelectorAll('nav li')

navList.forEach((links) => {
    links.addEventListener('mouseenter', function () {
        let delay = 0
        const link = this.querySelectorAll('div')
        link.forEach((span) => {
            span.style.transitionDelay = delay + 'ms'
            span.classList.add('active')
            delay = delay + 100
        })
    })
    links.addEventListener('mouseleave', function () {
        const link = this.querySelectorAll('div')
        let delay = 0
        link.forEach((span) => {
            span.style.transitionDelay = delay + 'ms'
            span.classList.remove('active')
            delay = delay + 100
        })
    })
})
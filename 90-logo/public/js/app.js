window.addEventListener('mousemove', (e) => {
    const logo = document.querySelector('.logo');
    const cloud = document.querySelectorAll('.cloud');
    console.log(logo);
    const logoX = logo.getBoundingClientRect().left;
    console.log(logoX);
    cloud.forEach((cloud) => {
        let x = e.offsetX;
        let y = e.offsetY;
        console.log(x, y);
        let logoRect = cloud.getBoundingClientRect();
        let positionX = (x / logoRect.width);
        let positionY = (x / logoRect.height);

        cloud.style.transform = `translate(${x}px, ${y}px)`;
    });

});
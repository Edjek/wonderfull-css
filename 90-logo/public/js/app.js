window.addEventListener('mousemove', (e) => {
    const cloud = document.querySelectorAll('.cloud');
    cloud.forEach((cloud) => {
        let x = e.offsetX;
        let y = e.offsetY;
        let logoRect = cloud.getBoundingClientRect();
        let positionX = (x / logoRect.width);
        let positionY = (x / logoRect.height);
        console.log(x, logoRect.width);

        cloud.style.transform = `translate(${x}px, ${y}px)`;
    });

});
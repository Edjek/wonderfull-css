const sliderLeft = document.getElementById('slider-left');
const sliderRight = document.getElementById('slider-right');
const carouselItem = document.querySelectorAll('.carousel-item');
const slider = carouselItem.length;
let count = 0;

console.log(slider);

sliderLeft.addEventListener('click', () => {
    carouselItem[count].classList.remove('active');

    if (count < slider - 1) {
        count++;
    } else {
        count = 0;
    }
    carouselItem[count].classList.add('active');
});

sliderRight.addEventListener('click', () => {
    carouselItem[count].classList.remove('active');

    if (count > 0) {
        count--;
    } else {
        count = slider - 1;
    }
    carouselItem[count].classList.add('active');
});

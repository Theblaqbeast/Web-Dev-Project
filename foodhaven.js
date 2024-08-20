window.onload = function () {
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;
const imageWidth = images[0].clientWidth;
function moveToNextImage() {
    if (currentIndex >= images.length - 1) {
        currentIndex = 0;
    }
    else{
        currentIndex++;
    }
    carouselImages.style.transform = `translateX(${-imageWidth * currentIndex}px)`;
}
setInterval(moveToNextImage, 3000);
};
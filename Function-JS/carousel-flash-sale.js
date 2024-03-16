const Flashsale_Carousel = document.querySelector('.li-flash-sale-container-ul');
const liCarousel = Flashsale_Carousel.querySelectorAll('li');
const prevButtonCarousel_flashsale = document.querySelector('.lf-ar-fls-container');
const nextButtonCarousel_flashsale = document.querySelector('.rt-ar-fls-container');
const originalCornate = '0px';

function carousel (direction,li){
    if(direction == 'left'){
        li.style.translate = '0%';
    }
    else if(direction == 'right'){
        li.style.translate = '-600%';
    }
}

prevButtonCarousel_flashsale.addEventListener("click", e => {
    liCarousel.forEach(li => {
        carousel('left',li);
    });
    nextButtonCarousel_flashsale.style.visibility = 'visible';
    prevButtonCarousel_flashsale.style.visibility = 'hidden';
});

nextButtonCarousel_flashsale.addEventListener("click", e => {
    liCarousel.forEach(li => {
        carousel('right',li);
    });
    prevButtonCarousel_flashsale.style.visibility = 'visible';
    nextButtonCarousel_flashsale.style.visibility = 'hidden';
});




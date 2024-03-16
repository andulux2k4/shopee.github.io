const Mall_Carousel = document.querySelector('.ul-mall-cl');
const liCarousel = Mall_Carousel.querySelectorAll('li');
const prevButtonCarousel_Mall = document.querySelector('.left-mall-cl-arrow');
const nextButtonCarousel_Mall = document.querySelector('.right-mall-cl-arrow');
const originalCornate = '0px';

function carousel (direction){
    if(direction == 'left'){
        Mall_Carousel.style.transform = "translateX(0%)";
    }
    else if(direction == 'right'){
        Mall_Carousel.style.transform = "translateX(-50%)";
    }
}


prevButtonCarousel_Mall.addEventListener("click", e => {
    carousel('left');
    nextButtonCarousel_Mall.style.visibility = 'visible';
    prevButtonCarousel_Mall.style.visibility = 'hidden';
});

nextButtonCarousel_Mall.addEventListener("click", e => {
    carousel('right');
    prevButtonCarousel_Mall.style.visibility = 'visible';
    nextButtonCarousel_Mall.style.visibility = 'hidden';
});


/******************* MALL-DOT **********************/


const DotCarousel_MALL = document.querySelector('.ul-dot-mall');
const DotCarousel_MALL_Li = DotCarousel_MALL.querySelectorAll('li');
const prevButtonCarousel_Mall_DOT = document.querySelector('.left-arrow-dot-mall');
const nextButtonCarousel_Mall_DOT = document.querySelector('.right-arrow-dot-mall');
const dotsNav = document.querySelector('.dot-ul');
const slides = Array.from(DotCarousel_MALL.children);
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


const setSlideDotPosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlideDotPosition);

const MoveDotSlide = (DotCarousel_MALL, currentSlide , targetSlide) => {
    DotCarousel_MALL.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('img-dot-mall-current');
    targetSlide.classList.add('img-dot-mall-current');
};

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-dot');
    targetDot.classList.add('current-dot');
}


prevButtonCarousel_Mall_DOT.addEventListener("click" , e => {
    const currentSlide = DotCarousel_MALL.querySelector('.img-dot-mall-current');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-dot');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide===prevSlide);
    if (prevIndex === -1) {
        DotCarousel_MALL.style.transform = 'translateX(-2730px)';
        currentSlide.classList.remove('img-dot-mall-current');
        slides[7].classList.add('img-dot-mall-current');
        currentDot.classList.remove('current-dot');
        dots[7].classList.add('current-dot');
        return;
    }


    MoveDotSlide(DotCarousel_MALL, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    
});

setInterval(() => {
    const currentSlide = DotCarousel_MALL.querySelector('.img-dot-mall-current');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-dot');
    const prevDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide===nextSlide);
    if (nextIndex === -1) {
        DotCarousel_MALL.style.transform = 'translateX(0)';
        currentSlide.classList.remove('img-dot-mall-current');
        slides[0].classList.add('img-dot-mall-current');
        currentDot.classList.remove('current-dot');
        dots[0].classList.add('current-dot');
        return;
    }

    MoveDotSlide(DotCarousel_MALL, currentSlide, nextSlide);
    updateDots(currentDot, prevDot);
}, 3000);


nextButtonCarousel_Mall_DOT.addEventListener("click" , e => {
    const currentSlide = DotCarousel_MALL.querySelector('.img-dot-mall-current');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-dot');
    const prevDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide===nextSlide);
    if (nextIndex === -1) {
        DotCarousel_MALL.style.transform = 'translateX(0)';
        currentSlide.classList.remove('img-dot-mall-current');
        slides[0].classList.add('img-dot-mall-current');
        currentDot.classList.remove('current-dot');
        dots[0].classList.add('current-dot');
        return;
    }

    MoveDotSlide(DotCarousel_MALL, currentSlide, nextSlide);
    updateDots(currentDot, prevDot);
    
});

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('li');
    if(!targetDot) return;

    const currentSlide = DotCarousel_MALL.querySelector('.img-dot-mall-current');
    const currentDot = dotsNav.querySelector('.current-dot');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];

    MoveDotSlide(DotCarousel_MALL,currentSlide,targetSlide);
    updateDots(currentDot, targetDot);
});


DotCarousel_MALL.addEventListener('mouseenter', () => {
    nextButtonCarousel_Mall_DOT.style.opacity = 1;
    prevButtonCarousel_Mall_DOT.style.opacity = 1;
 });
 
DotCarousel_MALL.addEventListener('mouseleave', () => {
    nextButtonCarousel_Mall_DOT.style.opacity = 0;
    prevButtonCarousel_Mall_DOT.style.opacity = 0;
 });
 
prevButtonCarousel_Mall_DOT.addEventListener('mouseenter', () => {
    prevButtonCarousel_Mall_DOT.style.opacity = 1;
    nextButtonCarousel_Mall_DOT.style.opacity = 1;
});

nextButtonCarousel_Mall_DOT.addEventListener('mouseenter', () => {
    nextButtonCarousel_Mall_DOT.style.opacity = 1;
    prevButtonCarousel_Mall_DOT.style.opacity = 1;
});
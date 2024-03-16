
const track = document.querySelector('.banner-move-container');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.button-container-right');
const prevButton = document.querySelector('.button-container-left');
const dotsNav = document.querySelector('.dot-nav');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-img');
    targetSlide.classList.add('current-img');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-img');
    targetDot.classList.add('current-img');
}

const hideShowArrows = (slides,prevButton,nextButton,targetIndex) => {
    if(targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }else if (targetIndex === slides.length - 1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}


//when i click left move sldie to the left 
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-img');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-img');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide===prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot,prevDot)
    hideShowArrows(slides,prevButton,nextButton,prevIndex)
})

//when i click right move slide to the right
nextButton.addEventListener ('click', e => {
    const currentSlide = track.querySelector('.current-img');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-img');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide===nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot,nextDot);
    hideShowArrows(slides,prevButton,nextButton,nextIndex)

})

//when i click the nav, move the slide

dotsNav.addEventListener('click', e => {
    //what dots was click on?
    const targetDot = e.target.closest('button');

    if (!targetDot) return;
    
    const currentSlide = track.querySelector('.current-img');
    const currentDot = dotsNav.querySelector('.current-img');
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex];

    moveToSlide(track,currentSlide,targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows(slides,prevButton,nextButton,targetIndex);
    
});



track.addEventListener('mouseenter', () => {
   nextButton.style.opacity = 1;
   prevButton.style.opacity = 1;
});

track.addEventListener('mouseleave', () => {
    nextButton.style.opacity = 0;
    prevButton.style.opacity = 0;
});


export {setSlidePosition, moveToSlide, hideShowArrows, updateDots};
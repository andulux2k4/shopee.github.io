
const moveCarousel = document.querySelector('.section-list-container');
const liHomeCatagory = moveCarousel.querySelectorAll('li');
const nextButtonCarousel = document.querySelector('.next-section-arrow');
const prevButtonCarousel = document.querySelector('.previous-section-arrow');
const preArrowImg = prevButtonCarousel.querySelector('img');
const nextArrowImg = nextButtonCarousel.querySelector('img');


function moveLi (direction, li) {
    if (direction === 'left') {
        li.style.translate = '0%';
        li.style.transition = 'all 500ms ease 0s';
    }else if (direction === 'right') {
        li.style.translate = '-110%';
        li.style.transition = 'all 500ms ease 0s';
    };
}

prevButtonCarousel.addEventListener('click', e => {
    liHomeCatagory.forEach(li => {
        moveLi('left' ,li);
    });
    prevButtonCarousel.style.visibility = 'hidden';
    nextButtonCarousel.style.visibility = 'visible';
    
});

nextButtonCarousel.addEventListener('click',e => {
    liHomeCatagory.forEach(li => {
        moveLi('right' ,li);
    });
    nextButtonCarousel.style.visibility = 'hidden';
    prevButtonCarousel.style.visibility = 'visible';
});



moveCarousel.addEventListener('mouseover', e => {
    prevButtonCarousel.style.width = '50px';
    prevButtonCarousel.style.height = '50px';
    prevButtonCarousel.style.left = '135px';
    prevButtonCarousel.style.top = '710px';
    preArrowImg.style.width = '20px';
    preArrowImg.style.height = '20px';
    
    nextButtonCarousel.style.width = '50px';
    nextButtonCarousel.style.height = '50px';
    nextButtonCarousel.style.left = '1330.200px';
    nextButtonCarousel.style.top = '710px';
    nextArrowImg.style.width = '20px';
    nextArrowImg.style.height = '20px';
});

moveCarousel.addEventListener('mouseout', e => {
    prevButtonCarousel.style.width = '25px';
    prevButtonCarousel.style.height = '25px';
    prevButtonCarousel.style.left = '150px';
    prevButtonCarousel.style.top = '723px';
    preArrowImg.style.width = '10px';
    preArrowImg.style.height = '10px';
    
    nextButtonCarousel.style.width = '25px';
    nextButtonCarousel.style.height = '25px';
    nextButtonCarousel.style.left = '1344.200px';
    nextButtonCarousel.style.top = '723px';
    nextArrowImg.style.width = '10px';
    nextArrowImg.style.height = '10px';
});

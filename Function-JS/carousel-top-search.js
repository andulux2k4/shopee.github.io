const track = document.querySelector(".ul-top-search-carousel");
const prevButton = document.querySelector(".left-top-search-arrow");
const nextButton = document.querySelector(".right-top-search-arrow");
const slides = Array.from(track.children);
let count = 0;
prevButton.style.visibility = 'hidden';

prevButton.addEventListener("click", e => {
    count--;
    console.log(count);
    if (count <= 3) {
        track.style.transform = `translateX(${count * -100}%)`;
        nextButton.style.visibility = 'visible';
        if (count < 1) {
            prevButton.style.visibility = 'hidden';
        }
    }
});


nextButton.addEventListener("click", e => {
    count++;
    console.log(count);
    if (count < 2) {
        track.style.transform = `translateX(${count * -100}%)`;
        if(count > 0){
            prevButton.style.visibility = 'visible';
        }
    }else if (count >=2){
        track.style.transform = `translateX(${count * -100}%)`;
        nextButton.style.visibility = 'hidden';
    }
});


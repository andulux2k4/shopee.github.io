const second1 = document.querySelector('.second-1');
const second2 = document.querySelector('.second-2');
const minutes1 = document.querySelector('.minutes-1');
const minutes2 = document.querySelector('.minutes-2');
const hours1 = document.querySelector('.hours-1');
const hours2 = document.querySelector('.hours-2');

// tạo bộ đếm số 
let startNum = 0;
let secondN1 = -500;
let minuteN2 = -100;
let minuteN1 = -500;
let hourN2 = -100;
let hourN1 = -500;

function moveClockS1(startNum) {
  second2.style.transform = `translateY(${startNum}%)`;
}

function countingSecond() {
  let i = 1;
  setInterval(() => {
    startNum -= 100;
    second2.style.transition = 'transform 0.5s ease-in-out'; // Add transition property
    moveClockS1(startNum);
    if (startNum === -1000) {
      startNum = 0;
      secondN1 -= 100;
    }
    if (secondN1 === -1000) {
        secondN1 = -500;
        minuteN2 -= 100;
        minutes2.style.transform = `translateY(${minuteN2}%)`;
        minutes2.style.transition = 'transform 0.5s ease-in-out';
    }
    if (minuteN2 === -1000){
        minuteN1 -= 100;
        minuteN2 = 0;
        minutes1.style.transform = `translateY(${minuteN1}%)`;
        minutes1.style.transition = 'transform 0.5s ease-in-out';
    }
    if(minuteN1 === -1000){
       hourN2.style.transform = `translateY(${-1000}%)`;
       hourN2.style.transition = 'transform 0.5s ease-in-out';
       stop;
    }

    i++;
    if (i > 10) {
        clearInterval();
        second1.style.transform = `translateY(${secondN1}%)`;
        second1.style.transition = 'transform 0.5s ease-in-out';
    }

  }, 1000);
}


countingSecond();

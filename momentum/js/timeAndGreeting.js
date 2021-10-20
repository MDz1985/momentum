const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.getElementsByTagName('body')[0];
const leftSlideButton = document.querySelector('.slide-prev');
const rightSlideButton = document.querySelector('.slide-next')


//time
function showTime(){
    const dat = new Date();
    time.textContent = String(dat.toLocaleTimeString('en-US', { hour12: false }));
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}
showTime();

//date
function showDate(){
    const dat = new Date();
    date.textContent = String(dat.toLocaleDateString('be-BY', {weekday: 'long', month: 'long', day: 'numeric'}));
}

//greeting

function showGreeting() {
    const dat = new Date();
    const hours = dat.getHours();

    const timeOfDay = getTimeOfDay(hours);
    greeting.textContent = `Good ${timeOfDay}`;
}
function getTimeOfDay(hours){
    switch (true){
        case(hours > 5 && hours < 12 ):
            return 'morning';
        case(hours > 11 && hours < 18 ):
            return 'afternoon';
        case(hours > 17 && hours < 24 ):
            return 'evening';
        case(hours >= 0 && hours < 6 ):
            return 'night';
    }
}

//name
function setLocalStorage() {
    localStorage.setItem('name', name.value);
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
}
window.addEventListener('load', getLocalStorage)


// SLIDER



//number of background image
function getRandomNum(max) {
    return Math.floor(Math.random() * max);
}
let bgNum = String(getRandomNum(20) + 1).padStart(2, '0');


setBg();
function setBg(){
    const dat =new Date()
    let timeOfDay = getTimeOfDay(dat.getHours());
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.addEventListener('load' , () => {
        // body.style.transition = '10s ease-in-out';
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;

    });
}
function getSlideNext(){
    return String(bgNum > 19 ? 1 : Number(bgNum) + 1).padStart(2, '0');
}

function getSlidePrev(){
    return String(bgNum < 2 ? 20 : Number(bgNum) - 1).padStart(2, '0');
}

leftSlideButton.addEventListener('click', () => {
    bgNum = getSlidePrev();
    setBg();
})
rightSlideButton.addEventListener('click', () => {
    bgNum = getSlideNext();
    setBg();
})
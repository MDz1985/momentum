const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.getElementsByTagName('body')[0];

const leftSlideButton = document.querySelector('.slide-prev');
const rightSlideButton = document.querySelector('.slide-next')

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const city = document.querySelector('.city');

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

const player = document.querySelector('.player');
const playButton = player.querySelector('.play');
const playPrevButton = player.querySelector('.play-prev');
const playNextButton = player.querySelector('.play-next');

const playListContainer = player.querySelector('.play-list');


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



//WEATHER

async function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city.value}&lang=ru&appid=cfe62a6645722176464f799a227a1ab5&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data.list[0].weather[0].description);

    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.list[0].weather[0].id}`);
    temperature.textContent = `${Math.round(data.list[0].main.temp * 10)/10}°C`;
    weatherDescription.textContent = data.list[0].weather[0].description;
}
getWeather();

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
// city.addEventListener('mouseover', () => {city.addEventListener('mouseout', setCity)});


//QUOTES
async function getQuotes() {
    const quotes = 'assets/quotes/data.json';
    const res = await fetch(quotes);
    const data = await res.json();

    const number = getRandomNum(data.length);
    quote.textContent = data[number].text;
    author.textContent = data[number].author;
    console.log(number);
}
getQuotes();

changeQuote.addEventListener('click', getQuotes);



//AUDIO-PLAYER
const audio = new Audio();
let playNum = 0;
// audio.src = playList[playNum].src;
// audio.src = 'assets/sounds/aqua caelestis.mp3';
audio.currentTime = 0;
let isPlay = false;
let audioTime = audio.currentTime;


function playAudio() {
    audio.src = playList[playNum].src;
    playListContainer.childNodes[playNum].style.color = 'gold';
    if (!isPlay){
        audio.play();
        isPlay = true;
        playButton.classList.add('pause'); // добавляет элементу класс;
    } else {
        audio.pause();
        isPlay = false;
        playButton.classList.remove('pause');
    }
}


function playPrevious(){
    playListContainer.childNodes[playNum].style.color = 'white';
    if (playNum === 0){
      playNum = playList.length - 1;
    }else {
        playNum -= 1;
    }
    isPlay = false;
    playAudio()
}
function playNext(){
    playListContainer.childNodes[playNum].style.color = 'white';
    if (playNum === playList.length - 1){
        playNum = 0;
    }else {
        playNum += 1;
    }
    isPlay = false;
    playAudio()
}
playButton.addEventListener('click', playAudio);
playPrevButton.addEventListener('click', playPrevious);
playNextButton.addEventListener('click', playNext);
audio.addEventListener("timeupdate", () => {
    if (audio.currentTime === audio.duration){
        playNext();
    }
})


//IMPORT PLAYLIST
import playList from './playList.js';
// console.log(playList[0].title);

playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('playlist-item');
    li.textContent = el.title;
    playListContainer.append(li);
})


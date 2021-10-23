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
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');

const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

const player = document.querySelector('.player');
const playButton = player.querySelector('.play');
const playPrevButton = player.querySelector('.play-prev');
const playNextButton = player.querySelector('.play-next');

const title = player.querySelector('.title');
const progressBar = player.querySelector('.progress-slider-filled');
const progress = player.querySelector('.progress-slider')
const currentTime = player.querySelector('.current-time');
const duration = player.querySelector('.duration');
const volumeBar = player.querySelector('.volume-slider-filled');
const volume = player.querySelector('.volume-slider');
const volumeButton = player.querySelector('.volume');


const playListContainer = player.querySelector('.play-list');


const lang = document.querySelector('.lang');

const menuButton = document.querySelector('.settings');
const settingsMenu = document.querySelector('.nav');

const offTime = document.getElementById('time');
const offDate = document.getElementById('date');
const offGreeting = document.getElementById('greeting');
const offQuotes = document.getElementById('quotes');
const offWeather = document.getElementById('weather');
const offPlayer = document.getElementById('player');





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
    let locales;
    if (lang.value === 'English'){
        locales = 'en-GB';
    }else{
        locales = 'ru-RU';
    }
    date.textContent = String(dat.toLocaleDateString(locales, {weekday: 'long', month: 'long', day: 'numeric'}));
}

//greeting

function showGreeting() {
    const dat = new Date();
    const hours = dat.getHours();

    const message = `Good ${getTimeOfDay(hours)}`;
    if (lang.value === 'English'){
        greeting.textContent = message;
    } else {
        for (let i = 0; i < greetingTranslation.en.length; i++){
            if (greetingTranslation.en[i] === message){
                greeting.textContent = greetingTranslation.ru[i];
            }
        }
    }

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
    localStorage.setItem('city', city.value);
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        setCity()
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
let weatherLang = 'en';
city.value = 'Minsk';
async function getWeather(language) {
    const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city.value}&lang=${language}&appid=cfe62a6645722176464f799a227a1ab5&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.cod === '400' || data.city.population === 0){
        if (language === 'en') {
            alert('Wrong city name or there is no information for this town!')
        } else {
            alert('Неверное название города, или нет информации о погоде в этом городе!');
        }
    }
    let ms;
    if (language === 'ru')  {
        ms = ' м/с';
        if (city.value === 'Minsk'){
            city.value = 'Минск';
        }
    } else {
        ms = ' m/s';
        if (city.value === 'Минск'){
            city.value = 'Minsk';
        }
    }
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.list[0].weather[0].id}`);
    temperature.textContent = `${Math.round(data.list[0].main.temp * 10)/10}°C`;
    weatherDescription.textContent = data.list[0].weather[0].description;
    wind.textContent = Math.round(data.list[0].wind.speed) + ms;
    humidity.textContent = data.list[0].main.humidity + ' %';
}



function setCity(event) {
    if (!event){
        getWeather(weatherLang).then();
        city.blur();
    } else if (event.code === 'Enter' || event.type === 'mouseleave') {
        getWeather(weatherLang).then();
        city.blur();
    }

}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('mouseenter', () => {city.addEventListener('mouseleave', setCity)});


//QUOTES
async function getQuotes() {
    const quotes = 'assets/quotes/data.json';
    const res = await fetch(quotes);
    const data = await res.json();

    const number = getRandomNum(data.length);
    quote.textContent = data[number].text;
    author.textContent = data[number].author;
}
getQuotes();

changeQuote.addEventListener('click', getQuotes);



//AUDIO-PLAYER
const audio = new Audio();
let playNum = 0;
let isPlay = false;
let audioTime = 0;


function playAudio() {
    audio.src = playList[playNum].src;
    duration.textContent = playList[playNum].duration;
    title.innerText = playList[playNum].title;
    playListContainer.childNodes[playNum].style.color = 'gold';
    if (!isPlay){
        audio.currentTime = audioTime;
        audio.play();
        isPlay = true;
        playButton.classList.add('pause'); // добавляет элементу класс;
    } else {
        console.log(audio.currentTime);
        audioTime = audio.currentTime;
        console.log(audioTime);
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
audio.addEventListener('timeupdate', () => {
    if (audio.currentTime === audio.duration){
        playNext();
    }

    progressFunc();
})
//PROGRESS

function audioCurrentTime(audioTime) {
    let time = new Date(audioTime * 1000);
    return {m: String(time.getMinutes()).padStart(2, '0'), s: String(time.getSeconds()).padStart(2, '0')};
}

function progressFunc() {
    progressBar.style.flexBasis = `${(audio.currentTime / audio.duration) * 100}%`;
    currentTime.textContent = `${audioCurrentTime(audio.currentTime).m}:${audioCurrentTime(audio.currentTime).s}`
}

function move(e) {
    progressBar.style.flexBasis = String(e.offsetX/progress.offsetWidth*100) + '%';
    audio.currentTime = (e.offsetX / progress.offsetWidth) * audio.duration;
}

progress.addEventListener("mousedown", function(e){
    console.log(e);
    move(e);
    this.addEventListener("mousemove", move);
});

progress.addEventListener("mouseup", function(e){
    this.removeEventListener("mousemove", move);
});


//VOLUME BUTTON

let volumeStatus = 'volume';
let prevVolume = 0.01;

function noVolume() {
    if (audio.volume > 0){
        prevVolume = audio.volume;
        audio.volume = 0;
        volumeBar.style.flexBasis = '0%';
        volumeButton.classList.add('mute');
            // .src = 'assets/svg/player/mute.svg';
        volumeStatus = 'mute';
    } else {
        volumeBar.style.flexBasis = String(prevVolume*100) + '%';
        audio.volume = prevVolume;
        volumeButton.classList.remove('mute');
        volumeStatus = 'volume';
        prevVolume = 0.01;
    }

}
volumeButton.addEventListener('click', noVolume)

//VOLUME
function moveVolume(e) {
    volumeBar.style.flexBasis = String(Math.floor(10000 * e.offsetX / volume.offsetWidth) / 100) + '%';
    if (Math.floor(100 * e.offsetX / volume.offsetWidth) / 100 < 0){
        audio.volume = 0;
    } else if (Math.floor(100 * e.offsetX / volume.offsetWidth) / 100 > 1){
        audio.volume = 1;
    } else{
        audio.volume = Math.floor(100 * e.offsetX / volume.offsetWidth) / 100;
    }
    if (audio.volume === 0) {
        volumeButton.classList.add('mute');
    } else {
        volumeButton.classList.remove('mute');
    }
}

volume.addEventListener("mousedown", function(e){
    moveVolume(e);
    this.addEventListener('mousemove', moveVolume);
});

volume.addEventListener("mouseup", function(e){
    this.removeEventListener('mousemove', moveVolume);
});

//IMPORT PLAYLIST
import playList from './playList.js';


playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('playlist-item');
    li.textContent = el.title;
    playListContainer.append(li);
})

//TRANSLATE
const greetingTranslation = {
    en: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    be: ['Добрай раніцы', 'Добры дзень', 'Добры вечар', 'Дабранач'],
    ru: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи']
};
lang.addEventListener('change', function (){
    if (lang.value === 'English'){
        weatherLang = 'en';

    }else {
        weatherLang = 'ru';
    }
    getWeather(weatherLang).then()
});

//MENU

let visible = false
function hideMenu(){
    console.log(3);
    if (!visible){
        visible = true;
        settingsMenu.style.opacity = '1';
    } else {
        visible = false;
        settingsMenu.style.opacity = '0';
    }
}
menuButton.addEventListener('click', hideMenu);

function hideItem(item){
    item.style.opacity = '0';
    item.style.userSelect = 'none';
}

offTime.addEventListener('change', () => {hideItem(time)});
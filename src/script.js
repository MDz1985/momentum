const time = document.querySelector('.time');
const date = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.getElementsByTagName('body')[0];

const leftSlideButton = document.querySelector('.slide-prev');
const rightSlideButton = document.querySelector('.slide-next')

const weather = document.querySelector('.weather');
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
// const playlistButton = player.querySelectorAll('.playlist-button');


const lang = document.querySelector('.lang');

const menuButton = document.querySelector('.settings');
const settingsMenu = document.querySelector('.nav');
const menuTitle = settingsMenu.getElementsByTagName('h2')[0];
const menuSecondTitle = settingsMenu.getElementsByTagName('h3')[0];
const settingNames = settingsMenu.getElementsByTagName('span');

// console.log(settingNames);
const quotes = document.querySelector('.quotes');

const offTime = document.getElementById('time');
const offDate = document.getElementById('date');
const offGreeting = document.getElementById('greeting');
const offQuotes = document.getElementById('quotes');
const offWeather = document.getElementById('weather');
const offPlayer = document.getElementById('player');
const offTodo = document.getElementById('todo');
const menuInputs = document.querySelectorAll('.inputs');

const todoContainer = document.querySelector('.todo-container');
const todo = document.querySelector('.todo');
const todoButton = document.querySelector('.todo-button');
const xButton = document.querySelectorAll('.x');
const checkDiv = document.querySelectorAll('.checkDiv')

const elementArray = [time,date,greeting,quotes,weather,player,todoContainer,name,changeQuote,todo];




//time
function showTime(){
    const dat = new Date();
    time.textContent = String(dat.toLocaleTimeString('en-US', { hour12: false }));
    showDate();
    showGreeting();
    if (dat.getHours() % 6 === 0 && dat.getMinutes() === 0 && dat.getSeconds() === 0){
        setBg();
    }

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
let todoCount = 0
function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city.value);
    if(!localStorage.getItem('todoCount')){
        localStorage.setItem('todoCount', todo.value)
    } else {
        localStorage.setItem('todoCount', localStorage.getItem('todoCount') + ',' + todo.value);
    }
    for (let i = 0; i < menuInputs.length; i++){
        localStorage.setItem(`${i}`, `yes${menuInputs[i].checked}`);
    }
}
window.addEventListener('beforeunload', setLocalStorage)
function getLocalStorage() {
    if(localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
    if(localStorage.getItem('city')) {
        city.value = localStorage.getItem('city');
        setCity()
    } else {
        city.value = 'Minsk';
    }
    if(localStorage.getItem('todoCount')){
        let array = localStorage.getItem('todoCount').split(',');
        for (let i = 0; i < array.length; i++){
            if (array[i] !== ''){
                reloadTodo(array[i]);
            }
        }
    }

    let id;
    for (let i = 0; i < menuInputs.length; i++){
        if(localStorage.getItem(`${i}`)) {
            if (localStorage.getItem(`${i}`) === 'yestrue'){
                menuInputs[i].checked = true;
                visibleItem(elementArray[i]);
                if (i === 6){
                    todoButton.style.visibility = 'visible';
                    todoButton.style.pointerEvents = 'all';
                }
            }else {
                menuInputs[i].checked = false;
                hideItem(elementArray[i]);
                if(i === 2){
                    hideItem(elementArray[7]);
                }
                if(i === 3){
                    hideItem(elementArray[8]);
                }
            }
        }
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
    img.src = `https://raw.githubusercontent.com/MDz1985/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.addEventListener('load' , () => {
        // body.style.transition = '10s ease-in-out';
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/MDz1985/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;

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
    if (data.cod === '404' || data.city.population === 0){
        if (language === 'en') {
            alert('Wrong city name or there is no information for this town!')
        } else {
            alert('Неверное название города, или нет информации о погоде в этом городе!');
        }
    }
    let ms;
    let windSpeed;
    let humidityValue;
    if (language === 'ru')  {
        ms = ' м/с';
        windSpeed = 'Скорость ветра ';
        humidityValue = 'Влажность ';
        if (city.value === 'Minsk'){
            city.value = 'Минск';
        }
    } else {
        ms = ' m/s';
        windSpeed = 'Wind speed ';
        humidityValue = 'Humidity ';
        if (city.value === 'Минск'){
            city.value = 'Minsk';
        }
    }
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.list[0].weather[0].id}`);
    temperature.textContent = `${Math.round(data.list[0].main.temp)}°C`;
    weatherDescription.textContent = data.list[0].weather[0].description;
    wind.textContent = windSpeed + Math.round(data.list[0].wind.speed) + ms;
    humidity.textContent = humidityValue + String(data.list[0].main.humidity) + ' %';
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
async function getQuotes(number) {
    let quotes;
    if (lang.value === 'English'){
        quotes = 'assets/quotes/quotesEn.json';
    }else {
        quotes = 'assets/quotes/quotesRu.json';
    }
    const res = await fetch(quotes);
    const data = await res.json();

    if (number === -1){
        number = getRandomNum(data.length);
    }
    localStorage.setItem('quoteNumber', number);

    quote.textContent = data[number].text;
    author.textContent = data[number].author;
}
//
// async function getQuotesEn() {
//
//     const quotes = 'assets/quotes/quotesEn.json';
//
//     const res = await fetch(quotes);
//     const data = await res.json();
//
//     const number = getRandomNum(data.length);
//
//     quote.textContent = data[number].text;
//     author.textContent = data[number].author;
// }
// getQuotesEn().then();
//
// async function getQuotesRu() {
//
//     const quotes = 'assets/quotes/quotesRu.json';
//
//     const res = await fetch(quotes);
//     const data = await res.json();
//
//     const number = getRandomNum(data.length);
//
//     quote.textContent = data[number].text;
//     author.textContent = data[number].author;
// }
//
function getQuotesRandom() {
    getQuotes(-1).then()
}

// function getQuotes() {
getQuotesRandom(-1);
changeQuote.addEventListener('click', getQuotesRandom);



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
        playlistButton[playNum].classList.add('pause');
    } else {
        // console.log(audio.currentTime);
        audioTime = audio.currentTime;
        // console.log(audioTime);
        audio.pause();
        isPlay = false;
        playButton.classList.remove('pause');
        playlistButton[playNum].classList.remove('pause');
    }
}


function playPrevious(){
    playListContainer.childNodes[playNum].style.color = 'white';
    playlistButton[playNum].classList.remove('pause');
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
    playlistButton[playNum].classList.remove('pause');
    if (playNum === playList.length - 1){
        playNum = 0;
    }else {
        playNum += 1;
    }
    isPlay = false;
    playAudio()
}
function playPlaylist(number){
    // for (let i = 0; i < playlistButton.length; i++){
        if (number !== playNum || isPlay !== true){
            isPlay = false;
        }








    for (let i = 0; i < playlistButton.length; i++){
        playListContainer.childNodes[i].style.color = 'white';
        playlistButton[i].classList.remove('pause');
    }
    playNum = number;
    playAudio();
}
// function pausePlaylist(number){
//     for (let i of playListContainer.childNodes){
//         i.style.color = 'white';
//     }
//     playNum = number;
//     playAudio();
// }


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
    // console.log(e);
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
    playListContainer.append(li);
    const button = document.createElement('button');
    button.classList.add('playlist-button');
    li.append(button);

    const spanTitle = document.createElement('span');
    spanTitle.textContent = el.title;
    li.append(spanTitle);
    const span = document.createElement('span');
    span.textContent = el.duration;
    li.append(span);

})
const playlistButton = player.querySelectorAll('.playlist-button');
for (let i = 0; i < playlistButton.length; i++){
    playlistButton[i].addEventListener('click', () => {
        // if (i === playNum && isPlay === true){
        //     pausePlaylist(i);
        // } else {
            playPlaylist(i);
        // }
    })
}


//TRANSLATE
const greetingTranslation = {
    en: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],
    be: ['Добрай раніцы', 'Добры дзень', 'Добры вечар', 'Дабранач'],
    ru: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи']
};
const menuTranslation = {
    en: ['Settings', 'Show', 'Time', 'Date', 'Greeting', 'Quotes', 'Weather', 'Player', 'Todo'],
    ru: ['Настройки', 'Отображать', 'Время', 'Дата', 'Приветствие', 'Цитаты', 'Погода', 'Плеер', 'Cписок дел']
}

lang.addEventListener('change', function (){
    if (lang.value === 'English'){
        weatherLang = 'en';
        menuTitle.innerText = menuTranslation.en[0];
        menuSecondTitle.innerText = menuTranslation.en[1];
        for (let i = 0; i < settingNames.length; i++){
            settingNames[i].textContent = menuTranslation.en[i+2];
        }


    }else {
        weatherLang = 'ru';
        menuTitle.innerText = menuTranslation.ru[0];
        menuSecondTitle.innerText = menuTranslation.ru[1];
        for (let i = 0; i < settingNames.length; i++){
            settingNames[i].textContent = menuTranslation.ru[i+2];
        }
    }
    getWeather(weatherLang).then();
    getQuotes(localStorage.getItem('quoteNumber')).then();
});
//
// if (lang.value === 'English') {
//     greeting.textContent = message;
// }
//MENU



let visibleL = false;
let visibleR = true;
function hideMenu(value, visible){
    console.log(value.style.opacity);
    if (!visible){
        visible = true;
        setTimeout(() => {value.style.opacity = '1';}, 200);
        value.style.display ='block';


    } else {
        visible = false;
        value.style.opacity = '0';
        setTimeout(() => {value.style.display ='none'}, 500);
    }
    return visible;
}
menuButton.addEventListener('click', () => {
    visibleL = hideMenu(settingsMenu, visibleL);
});

function hideItem(item){
    item.style.opacity = '0';
    item.style.pointerEvents = 'none';
}
function visibleItem(item){
    item.style.pointerEvents = 'all';
    item.style.opacity = '1';

}

function listener(button, element){
    button.addEventListener('change', () => {
        if (!button.checked) {hideItem(element);
        } else {
            visibleItem(element);
        }
    });
}

listener(offTime, time);
listener(offDate, date);
listener(offGreeting, greeting);
listener(offGreeting, name);
listener(offPlayer, player);
listener(offQuotes, quotes);
listener(offQuotes, changeQuote);
listener(offWeather, weather);
// listener(offTodo, todoButton);
listener(offTodo, todoContainer);

offTodo.addEventListener('change', () => {
    if (!offTodo.checked) {
        todoButton.style.visibility = 'hidden';
        todoButton.style.pointerEvents = 'none';
    } else{
        todoButton.style.visibility = 'visible';
        todoButton.style.pointerEvents = 'all';
    }
})

function setTodo(event) {

    if (event.code === 'Enter') {

        const div = document.createElement('div');
        div.classList.add('checkDiv');
        todo.before(div);
        const input = document.createElement('input');
        input.classList.add('check');
        input.setAttribute('type','checkbox');
        div.append(input);
        const span = document.createElement('span');
        // span.classList.add('check');
        span.innerText = todo.value;
        input.after(span);
        const spanX = document.createElement('span');
        spanX.classList.add('x');
        spanX.innerText = 'X';
        span.after(spanX);
        watch(spanX, div);

        setLocalStorage();
        todo.value = '';
    }
}

function reloadTodo (value) {

        const div = document.createElement('div');
        div.classList.add('checkDiv');
        todo.before(div);
        const input = document.createElement('input');
        input.classList.add('check');
        input.setAttribute('type','checkbox');
        div.append(input);
        const span = document.createElement('span');
        span.innerText = value;
        input.after(span);
        const spanX = document.createElement('span');
        spanX.classList.add('x');
        spanX.innerText = 'X';
        span.after(spanX);
        watch(spanX, div);

}


todo.addEventListener('keypress', setTodo);
todoButton.addEventListener('click', () => {
    visibleR = hideMenu(todoContainer, visibleR);
});



function removeTodo (removedItem){
    let storageItem = removedItem.firstChild.nextSibling.innerText;
    let n;
    let array = localStorage.getItem('todoCount').split(',');
    removedItem.parentNode.removeChild(removedItem);
    for (let i = 0; i < array.length; i++){
        if (array[i] === storageItem){
            array[i] = '';
            localStorage.setItem('todoCount', array.toString())
            return;
        }
    }
}
function watch (item, removedItem){
    item.addEventListener('click', () => {removeTodo(removedItem)})
}


console.log(`
Оценка: 144/150:
1) Часы и календарь +15
    выполнено всё
2) Приветствие +10
    выполнено всё
3)Смена фонового изображения +20
    выполнено всё
4)Виджет погоды +15
    выполнено всё
5)Аудиоплеер +15
    выполнено всё
6)Продвинутый аудиоплеер +20
    выполнено всё
7)Перевод приложения на два языка (en/ru или en/be) +15
    en/ru выполнено всё
8)Получение фонового изображения от API +0
    НЕ ВЫПОЛНЕНО
9)Настройки приложения +14
в настройках приложения можно указать язык приложения (en/ru или en/be) +3 
    решил вынести перевод приложения непосредственно на экран, т.к. с моим видом меню слабо согласуется. Если Вам принципиально - могу быстро переделать.
в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API +0 
    НЕ ВЫПОЛНЕНО
если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото +0 
    НЕ ВЫПОЛНЕНО
в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал +3
    выполнено
скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их +3
    выполнено
настройки приложения сохраняются при перезагрузке страницы +5
    выполнено
10)Дополнительный функционал на выбор +10
    ToDo List
    по умолчанию скрыт. Отображение включается соответствующей кнопкой меню. При этом отображается кнопка вызова списка дел (правый нижний угол) и сам список. Список можно скрыть нажатием на кнопку вызова.
    Если ввести данные в список, появляется чекбокс с введённым названием дела. Справа расположена кнопка для удаления дела. Список сохраняется при перезагрузке страницы с учётом удалённых/добавленных элементов.
    Если отметить чекбокс, название элемента перечеркивается.

`)
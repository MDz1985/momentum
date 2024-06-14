/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/playList.js":
/*!*************************!*\
  !*** ./src/playList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\nconst playList = [\n    {\n        title: 'Aqua Caelestis',\n        src: 'assets/sounds/Aqua Caelestis.mp3',\n        duration: '00:40'\n    },\n    {\n        title: 'River Flows In You',\n        src: 'assets/sounds/River Flows In You.mp3',\n        duration: '01:37'\n    },\n    {\n        title: 'Ennio Morricone',\n        src: 'assets/sounds/Ennio Morricone.mp3',\n        duration: '01:37'\n    },\n    {\n        title: 'Summer Wind',\n        src: 'assets/sounds/Summer Wind.mp3',\n        duration: '01:51'\n    }\n]\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playList);\n\n//# sourceURL=webpack://momentum/./src/playList.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _playList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playList.js */ \"./src/playList.js\");\nconst time = document.querySelector('.time');\nconst date = document.querySelector('.date');\nconst greeting = document.querySelector('.greeting');\nconst name = document.querySelector('.name');\nconst body = document.getElementsByTagName('body')[0];\n\nconst leftSlideButton = document.querySelector('.slide-prev');\nconst rightSlideButton = document.querySelector('.slide-next')\n\nconst weather = document.querySelector('.weather');\nconst weatherIcon = document.querySelector('.weather-icon');\nconst temperature = document.querySelector('.temperature');\nconst weatherDescription = document.querySelector('.weather-description');\nconst wind = document.querySelector('.wind');\nconst humidity = document.querySelector('.humidity');\nconst city = document.querySelector('.city');\n\nconst quote = document.querySelector('.quote');\nconst author = document.querySelector('.author');\nconst changeQuote = document.querySelector('.change-quote');\n\nconst player = document.querySelector('.player');\nconst playButton = player.querySelector('.play');\nconst playPrevButton = player.querySelector('.play-prev');\nconst playNextButton = player.querySelector('.play-next');\n\nconst title = player.querySelector('.title');\nconst progressBar = player.querySelector('.progress-slider-filled');\nconst progress = player.querySelector('.progress-slider')\nconst currentTime = player.querySelector('.current-time');\nconst duration = player.querySelector('.duration');\nconst volumeBar = player.querySelector('.volume-slider-filled');\nconst volume = player.querySelector('.volume-slider');\nconst volumeButton = player.querySelector('.volume');\n\n\nconst playListContainer = player.querySelector('.play-list');\n// const playlistButton = player.querySelectorAll('.playlist-button');\n\n\nconst lang = document.querySelector('.lang');\n\nconst menuButton = document.querySelector('.settings');\nconst settingsMenu = document.querySelector('.nav');\nconst menuTitle = settingsMenu.getElementsByTagName('h2')[0];\nconst menuSecondTitle = settingsMenu.getElementsByTagName('h3')[0];\nconst settingNames = settingsMenu.getElementsByTagName('span');\n\n// console.log(settingNames);\nconst quotes = document.querySelector('.quotes');\n\nconst offTime = document.getElementById('time');\nconst offDate = document.getElementById('date');\nconst offGreeting = document.getElementById('greeting');\nconst offQuotes = document.getElementById('quotes');\nconst offWeather = document.getElementById('weather');\nconst offPlayer = document.getElementById('player');\nconst offTodo = document.getElementById('todo');\nconst menuInputs = document.querySelectorAll('.inputs');\n\nconst todoContainer = document.querySelector('.todo-container');\nconst todo = document.querySelector('.todo');\nconst todoButton = document.querySelector('.todo-button');\nconst xButton = document.querySelectorAll('.x');\nconst checkDiv = document.querySelectorAll('.checkDiv')\n\nconst elementArray = [time,date,greeting,quotes,weather,player,todoContainer,name,changeQuote,todo];\n\n\n\n\n//time\nfunction showTime(){\n    const dat = new Date();\n    time.textContent = String(dat.toLocaleTimeString('en-US', { hour12: false }));\n    showDate();\n    showGreeting();\n    if (dat.getHours() % 6 === 0 && dat.getMinutes() === 0 && dat.getSeconds() === 0){\n        setBg();\n    }\n\n    setTimeout(showTime, 1000);\n}\nshowTime();\n\n//date\nfunction showDate(){\n    const dat = new Date();\n    let locales;\n    if (lang.value === 'English'){\n        locales = 'en-GB';\n    }else{\n        locales = 'ru-RU';\n    }\n    date.textContent = String(dat.toLocaleDateString(locales, {weekday: 'long', month: 'long', day: 'numeric'}));\n}\n\n//greeting\n\nfunction showGreeting() {\n    const dat = new Date();\n    const hours = dat.getHours();\n\n    const message = `Good ${getTimeOfDay(hours)}`;\n    if (lang.value === 'English'){\n        greeting.textContent = message;\n    } else {\n        for (let i = 0; i < greetingTranslation.en.length; i++){\n            if (greetingTranslation.en[i] === message){\n                greeting.textContent = greetingTranslation.ru[i];\n            }\n        }\n    }\n\n}\nfunction getTimeOfDay(hours){\n    switch (true){\n        case(hours > 5 && hours < 12 ):\n            return 'morning';\n        case(hours > 11 && hours < 18 ):\n            return 'afternoon';\n        case(hours > 17 && hours < 24 ):\n            return 'evening';\n        case(hours >= 0 && hours < 6 ):\n            return 'night';\n    }\n}\n\n//name\nlet todoCount = 0\nfunction setLocalStorage() {\n    localStorage.setItem('name', name.value);\n    localStorage.setItem('city', city.value);\n    if(!localStorage.getItem('todoCount')){\n        localStorage.setItem('todoCount', todo.value)\n    } else {\n        localStorage.setItem('todoCount', localStorage.getItem('todoCount') + ',' + todo.value);\n    }\n    for (let i = 0; i < menuInputs.length; i++){\n        localStorage.setItem(`${i}`, `yes${menuInputs[i].checked}`);\n    }\n}\nwindow.addEventListener('beforeunload', setLocalStorage)\nfunction getLocalStorage() {\n    if(localStorage.getItem('name')) {\n        name.value = localStorage.getItem('name');\n    }\n    if(localStorage.getItem('city')) {\n        city.value = localStorage.getItem('city');\n        setCity()\n    } else {\n        city.value = 'Minsk';\n    }\n    if(localStorage.getItem('todoCount')){\n        let array = localStorage.getItem('todoCount').split(',');\n        for (let i = 0; i < array.length; i++){\n            if (array[i] !== ''){\n                reloadTodo(array[i]);\n            }\n        }\n    }\n\n    let id;\n    for (let i = 0; i < menuInputs.length; i++){\n        if(localStorage.getItem(`${i}`)) {\n            if (localStorage.getItem(`${i}`) === 'yestrue'){\n                menuInputs[i].checked = true;\n                visibleItem(elementArray[i]);\n                if (i === 6){\n                    todoButton.style.visibility = 'visible';\n                    todoButton.style.pointerEvents = 'all';\n                }\n            }else {\n                menuInputs[i].checked = false;\n                hideItem(elementArray[i]);\n                if(i === 2){\n                    hideItem(elementArray[7]);\n                }\n                if(i === 3){\n                    hideItem(elementArray[8]);\n                }\n            }\n        }\n    }\n}\nwindow.addEventListener('load', getLocalStorage)\n\n\n// SLIDER\n\n\n\n//number of background image\nfunction getRandomNum(max) {\n    return Math.floor(Math.random() * max);\n}\nlet bgNum = String(getRandomNum(20) + 1).padStart(2, '0');\n\n\nsetBg();\nfunction setBg(){\n    const dat =new Date()\n    let timeOfDay = getTimeOfDay(dat.getHours());\n    const img = new Image();\n    img.src = `https://raw.githubusercontent.com/MDz1985/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;\n    img.addEventListener('load' , () => {\n        // body.style.transition = '10s ease-in-out';\n        body.style.backgroundImage = `url('https://raw.githubusercontent.com/MDz1985/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;\n\n    });\n}\nfunction getSlideNext(){\n    return String(bgNum > 19 ? 1 : Number(bgNum) + 1).padStart(2, '0');\n}\n\nfunction getSlidePrev(){\n    return String(bgNum < 2 ? 20 : Number(bgNum) - 1).padStart(2, '0');\n}\n\nleftSlideButton.addEventListener('click', () => {\n    bgNum = getSlidePrev();\n    setBg();\n})\nrightSlideButton.addEventListener('click', () => {\n    bgNum = getSlideNext();\n    setBg();\n})\n\n\n\n//WEATHER\nlet weatherLang = 'en';\ncity.value = 'Minsk';\nasync function getWeather(language) {\n    const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city.value}&lang=${language}&appid=cfe62a6645722176464f799a227a1ab5&units=metric`;\n    const res = await fetch(url);\n    const data = await res.json();\n    if (data.cod === '404' || data.city.population === 0){\n        if (language === 'en') {\n            alert('Wrong city name or there is no information for this town!')\n        } else {\n            alert('Неверное название города, или нет информации о погоде в этом городе!');\n        }\n    }\n    let ms;\n    let windSpeed;\n    let humidityValue;\n    if (language === 'ru')  {\n        ms = ' м/с';\n        windSpeed = 'Скорость ветра ';\n        humidityValue = 'Влажность ';\n        if (city.value === 'Minsk'){\n            city.value = 'Минск';\n        }\n    } else {\n        ms = ' m/s';\n        windSpeed = 'Wind speed ';\n        humidityValue = 'Humidity ';\n        if (city.value === 'Минск'){\n            city.value = 'Minsk';\n        }\n    }\n    weatherIcon.className = 'weather-icon owf';\n    weatherIcon.classList.add(`owf-${data.list[0].weather[0].id}`);\n    temperature.textContent = `${Math.round(data.list[0].main.temp)}°C`;\n    weatherDescription.textContent = data.list[0].weather[0].description;\n    wind.textContent = windSpeed + Math.round(data.list[0].wind.speed) + ms;\n    humidity.textContent = humidityValue + String(data.list[0].main.humidity) + ' %';\n}\n\n\n\nfunction setCity(event) {\n    if (!event){\n        getWeather(weatherLang).then();\n        city.blur();\n    } else if (event.code === 'Enter' || event.type === 'mouseleave') {\n        getWeather(weatherLang).then();\n        city.blur();\n    }\n\n}\n\ndocument.addEventListener('DOMContentLoaded', getWeather);\ncity.addEventListener('keypress', setCity);\ncity.addEventListener('mouseenter', () => {city.addEventListener('mouseleave', setCity)});\n\n\n//QUOTES\nasync function getQuotes(number) {\n    let quotes;\n    if (lang.value === 'English'){\n        quotes = 'assets/quotes/quotesEn.json';\n    }else {\n        quotes = 'assets/quotes/quotesRu.json';\n    }\n    const res = await fetch(quotes);\n    const data = await res.json();\n\n    if (number === -1){\n        number = getRandomNum(data.length);\n    }\n    localStorage.setItem('quoteNumber', number);\n\n    quote.textContent = data[number].text;\n    author.textContent = data[number].author;\n}\n//\n// async function getQuotesEn() {\n//\n//     const quotes = 'assets/quotes/quotesEn.json';\n//\n//     const res = await fetch(quotes);\n//     const data = await res.json();\n//\n//     const number = getRandomNum(data.length);\n//\n//     quote.textContent = data[number].text;\n//     author.textContent = data[number].author;\n// }\n// getQuotesEn().then();\n//\n// async function getQuotesRu() {\n//\n//     const quotes = 'assets/quotes/quotesRu.json';\n//\n//     const res = await fetch(quotes);\n//     const data = await res.json();\n//\n//     const number = getRandomNum(data.length);\n//\n//     quote.textContent = data[number].text;\n//     author.textContent = data[number].author;\n// }\n//\nfunction getQuotesRandom() {\n    getQuotes(-1).then()\n}\n\n// function getQuotes() {\ngetQuotesRandom(-1);\nchangeQuote.addEventListener('click', getQuotesRandom);\n\n\n\n//AUDIO-PLAYER\nconst audio = new Audio();\nlet playNum = 0;\nlet isPlay = false;\nlet audioTime = 0;\n\n\nfunction playAudio() {\n    audio.src = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][playNum].src;\n    duration.textContent = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][playNum].duration;\n    title.innerText = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][playNum].title;\n    playListContainer.childNodes[playNum].style.color = 'gold';\n    if (!isPlay){\n        audio.currentTime = audioTime;\n        audio.play();\n        isPlay = true;\n        playButton.classList.add('pause'); // добавляет элементу класс;\n        playlistButton[playNum].classList.add('pause');\n    } else {\n        // console.log(audio.currentTime);\n        audioTime = audio.currentTime;\n        // console.log(audioTime);\n        audio.pause();\n        isPlay = false;\n        playButton.classList.remove('pause');\n        playlistButton[playNum].classList.remove('pause');\n    }\n}\n\n\nfunction playPrevious(){\n    playListContainer.childNodes[playNum].style.color = 'white';\n    playlistButton[playNum].classList.remove('pause');\n    if (playNum === 0){\n        playNum = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length - 1;\n    }else {\n        playNum -= 1;\n    }\n    isPlay = false;\n    playAudio()\n}\nfunction playNext(){\n    playListContainer.childNodes[playNum].style.color = 'white';\n    playlistButton[playNum].classList.remove('pause');\n    if (playNum === _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length - 1){\n        playNum = 0;\n    }else {\n        playNum += 1;\n    }\n    isPlay = false;\n    playAudio()\n}\nfunction playPlaylist(number){\n    // for (let i = 0; i < playlistButton.length; i++){\n        if (number !== playNum || isPlay !== true){\n            isPlay = false;\n        }\n\n\n\n\n\n\n\n\n    for (let i = 0; i < playlistButton.length; i++){\n        playListContainer.childNodes[i].style.color = 'white';\n        playlistButton[i].classList.remove('pause');\n    }\n    playNum = number;\n    playAudio();\n}\n// function pausePlaylist(number){\n//     for (let i of playListContainer.childNodes){\n//         i.style.color = 'white';\n//     }\n//     playNum = number;\n//     playAudio();\n// }\n\n\nplayButton.addEventListener('click', playAudio);\nplayPrevButton.addEventListener('click', playPrevious);\nplayNextButton.addEventListener('click', playNext);\naudio.addEventListener('timeupdate', () => {\n    if (audio.currentTime === audio.duration){\n        playNext();\n    }\n\n    progressFunc();\n})\n//PROGRESS\n\nfunction audioCurrentTime(audioTime) {\n    let time = new Date(audioTime * 1000);\n    return {m: String(time.getMinutes()).padStart(2, '0'), s: String(time.getSeconds()).padStart(2, '0')};\n}\n\nfunction progressFunc() {\n    progressBar.style.flexBasis = `${(audio.currentTime / audio.duration) * 100}%`;\n    currentTime.textContent = `${audioCurrentTime(audio.currentTime).m}:${audioCurrentTime(audio.currentTime).s}`\n}\n\nfunction move(e) {\n    progressBar.style.flexBasis = String(e.offsetX/progress.offsetWidth*100) + '%';\n    audio.currentTime = (e.offsetX / progress.offsetWidth) * audio.duration;\n}\n\nprogress.addEventListener(\"mousedown\", function(e){\n    // console.log(e);\n    move(e);\n    this.addEventListener(\"mousemove\", move);\n});\n\nprogress.addEventListener(\"mouseup\", function(e){\n    this.removeEventListener(\"mousemove\", move);\n});\n\n\n//VOLUME BUTTON\n\nlet volumeStatus = 'volume';\nlet prevVolume = 0.01;\n\nfunction noVolume() {\n    if (audio.volume > 0){\n        prevVolume = audio.volume;\n        audio.volume = 0;\n        volumeBar.style.flexBasis = '0%';\n        volumeButton.classList.add('mute');\n            // .src = 'assets/svg/player/mute.svg';\n        volumeStatus = 'mute';\n    } else {\n        volumeBar.style.flexBasis = String(prevVolume*100) + '%';\n        audio.volume = prevVolume;\n        volumeButton.classList.remove('mute');\n        volumeStatus = 'volume';\n        prevVolume = 0.01;\n    }\n\n}\nvolumeButton.addEventListener('click', noVolume)\n\n//VOLUME\nfunction moveVolume(e) {\n    volumeBar.style.flexBasis = String(Math.floor(10000 * e.offsetX / volume.offsetWidth) / 100) + '%';\n    if (Math.floor(100 * e.offsetX / volume.offsetWidth) / 100 < 0){\n        audio.volume = 0;\n    } else if (Math.floor(100 * e.offsetX / volume.offsetWidth) / 100 > 1){\n        audio.volume = 1;\n    } else{\n        audio.volume = Math.floor(100 * e.offsetX / volume.offsetWidth) / 100;\n    }\n    if (audio.volume === 0) {\n        volumeButton.classList.add('mute');\n    } else {\n        volumeButton.classList.remove('mute');\n    }\n}\n\nvolume.addEventListener(\"mousedown\", function(e){\n    moveVolume(e);\n    this.addEventListener('mousemove', moveVolume);\n});\n\nvolume.addEventListener(\"mouseup\", function(e){\n    this.removeEventListener('mousemove', moveVolume);\n});\n\n//IMPORT PLAYLIST\n\n\n\n_playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(el => {\n    const li = document.createElement('li');\n    li.classList.add('playlist-item');\n    playListContainer.append(li);\n    const button = document.createElement('button');\n    button.classList.add('playlist-button');\n    li.append(button);\n\n    const spanTitle = document.createElement('span');\n    spanTitle.textContent = el.title;\n    li.append(spanTitle);\n    const span = document.createElement('span');\n    span.textContent = el.duration;\n    li.append(span);\n\n})\nconst playlistButton = player.querySelectorAll('.playlist-button');\nfor (let i = 0; i < playlistButton.length; i++){\n    playlistButton[i].addEventListener('click', () => {\n        // if (i === playNum && isPlay === true){\n        //     pausePlaylist(i);\n        // } else {\n            playPlaylist(i);\n        // }\n    })\n}\n\n\n//TRANSLATE\nconst greetingTranslation = {\n    en: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],\n    be: ['Добрай раніцы', 'Добры дзень', 'Добры вечар', 'Дабранач'],\n    ru: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи']\n};\nconst menuTranslation = {\n    en: ['Settings', 'Show', 'Time', 'Date', 'Greeting', 'Quotes', 'Weather', 'Player', 'Todo'],\n    ru: ['Настройки', 'Отображать', 'Время', 'Дата', 'Приветствие', 'Цитаты', 'Погода', 'Плеер', 'Cписок дел']\n}\n\nlang.addEventListener('change', function (){\n    if (lang.value === 'English'){\n        weatherLang = 'en';\n        menuTitle.innerText = menuTranslation.en[0];\n        menuSecondTitle.innerText = menuTranslation.en[1];\n        for (let i = 0; i < settingNames.length; i++){\n            settingNames[i].textContent = menuTranslation.en[i+2];\n        }\n\n\n    }else {\n        weatherLang = 'ru';\n        menuTitle.innerText = menuTranslation.ru[0];\n        menuSecondTitle.innerText = menuTranslation.ru[1];\n        for (let i = 0; i < settingNames.length; i++){\n            settingNames[i].textContent = menuTranslation.ru[i+2];\n        }\n    }\n    getWeather(weatherLang).then();\n    getQuotes(localStorage.getItem('quoteNumber')).then();\n});\n//\n// if (lang.value === 'English') {\n//     greeting.textContent = message;\n// }\n//MENU\n\n\n\nlet visibleL = false;\nlet visibleR = true;\nfunction hideMenu(value, visible){\n    console.log(value.style.opacity);\n    if (!visible){\n        visible = true;\n        setTimeout(() => {value.style.opacity = '1';}, 200);\n        value.style.display ='block';\n\n\n    } else {\n        visible = false;\n        value.style.opacity = '0';\n        setTimeout(() => {value.style.display ='none'}, 500);\n    }\n    return visible;\n}\nmenuButton.addEventListener('click', () => {\n    visibleL = hideMenu(settingsMenu, visibleL);\n});\n\nfunction hideItem(item){\n    item.style.opacity = '0';\n    item.style.pointerEvents = 'none';\n}\nfunction visibleItem(item){\n    item.style.pointerEvents = 'all';\n    item.style.opacity = '1';\n\n}\n\nfunction listener(button, element){\n    button.addEventListener('change', () => {\n        if (!button.checked) {hideItem(element);\n        } else {\n            visibleItem(element);\n        }\n    });\n}\n\nlistener(offTime, time);\nlistener(offDate, date);\nlistener(offGreeting, greeting);\nlistener(offGreeting, name);\nlistener(offPlayer, player);\nlistener(offQuotes, quotes);\nlistener(offQuotes, changeQuote);\nlistener(offWeather, weather);\n// listener(offTodo, todoButton);\nlistener(offTodo, todoContainer);\n\noffTodo.addEventListener('change', () => {\n    if (!offTodo.checked) {\n        todoButton.style.visibility = 'hidden';\n        todoButton.style.pointerEvents = 'none';\n    } else{\n        todoButton.style.visibility = 'visible';\n        todoButton.style.pointerEvents = 'all';\n    }\n})\n\nfunction setTodo(event) {\n\n    if (event.code === 'Enter') {\n\n        const div = document.createElement('div');\n        div.classList.add('checkDiv');\n        todo.before(div);\n        const input = document.createElement('input');\n        input.classList.add('check');\n        input.setAttribute('type','checkbox');\n        div.append(input);\n        const span = document.createElement('span');\n        // span.classList.add('check');\n        span.innerText = todo.value;\n        input.after(span);\n        const spanX = document.createElement('span');\n        spanX.classList.add('x');\n        spanX.innerText = 'X';\n        span.after(spanX);\n        watch(spanX, div);\n\n        setLocalStorage();\n        todo.value = '';\n    }\n}\n\nfunction reloadTodo (value) {\n\n        const div = document.createElement('div');\n        div.classList.add('checkDiv');\n        todo.before(div);\n        const input = document.createElement('input');\n        input.classList.add('check');\n        input.setAttribute('type','checkbox');\n        div.append(input);\n        const span = document.createElement('span');\n        span.innerText = value;\n        input.after(span);\n        const spanX = document.createElement('span');\n        spanX.classList.add('x');\n        spanX.innerText = 'X';\n        span.after(spanX);\n        watch(spanX, div);\n\n}\n\n\ntodo.addEventListener('keypress', setTodo);\ntodoButton.addEventListener('click', () => {\n    visibleR = hideMenu(todoContainer, visibleR);\n});\n\n\n\nfunction removeTodo (removedItem){\n    let storageItem = removedItem.firstChild.nextSibling.innerText;\n    let n;\n    let array = localStorage.getItem('todoCount').split(',');\n    removedItem.parentNode.removeChild(removedItem);\n    for (let i = 0; i < array.length; i++){\n        if (array[i] === storageItem){\n            array[i] = '';\n            localStorage.setItem('todoCount', array.toString())\n            return;\n        }\n    }\n}\nfunction watch (item, removedItem){\n    item.addEventListener('click', () => {removeTodo(removedItem)})\n}\n\n\nconsole.log(`\nОценка: 144/150:\n1) Часы и календарь +15\n    выполнено всё\n2) Приветствие +10\n    выполнено всё\n3)Смена фонового изображения +20\n    выполнено всё\n4)Виджет погоды +15\n    выполнено всё\n5)Аудиоплеер +15\n    выполнено всё\n6)Продвинутый аудиоплеер +20\n    выполнено всё\n7)Перевод приложения на два языка (en/ru или en/be) +15\n    en/ru выполнено всё\n8)Получение фонового изображения от API +0\n    НЕ ВЫПОЛНЕНО\n9)Настройки приложения +14\nв настройках приложения можно указать язык приложения (en/ru или en/be) +3 \n    решил вынести перевод приложения непосредственно на экран, т.к. с моим видом меню слабо согласуется. Если Вам принципиально - могу быстро переделать.\nв настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API +0 \n    НЕ ВЫПОЛНЕНО\nесли источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото +0 \n    НЕ ВЫПОЛНЕНО\nв настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал +3\n    выполнено\nскрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их +3\n    выполнено\nнастройки приложения сохраняются при перезагрузке страницы +5\n    выполнено\n10)Дополнительный функционал на выбор +10\n    ToDo List\n    по умолчанию скрыт. Отображение включается соответствующей кнопкой меню. При этом отображается кнопка вызова списка дел (правый нижний угол) и сам список. Список можно скрыть нажатием на кнопку вызова.\n    Если ввести данные в список, появляется чекбокс с введённым названием дела. Справа расположена кнопка для удаления дела. Список сохраняется при перезагрузке страницы с учётом удалённых/добавленных элементов.\n    Если отметить чекбокс, название элемента перечеркивается.\n\n`)\n\n//# sourceURL=webpack://momentum/./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _playList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playList.js */ \"./src/playList.js\");\nconst time = document.querySelector('.time');\nconst date = document.querySelector('.date');\nconst greeting = document.querySelector('.greeting');\nconst name = document.querySelector('.name');\nconst body = document.getElementsByTagName('body')[0];\n\nconst leftSlideButton = document.querySelector('.slide-prev');\nconst rightSlideButton = document.querySelector('.slide-next')\n\nconst weatherIcon = document.querySelector('.weather-icon');\nconst temperature = document.querySelector('.temperature');\nconst weatherDescription = document.querySelector('.weather-description');\nconst wind = document.querySelector('.wind');\nconst humidity = document.querySelector('.humidity');\nconst city = document.querySelector('.city');\n\nconst quote = document.querySelector('.quote');\nconst author = document.querySelector('.author');\nconst changeQuote = document.querySelector('.change-quote');\n\nconst player = document.querySelector('.player');\nconst playButton = player.querySelector('.play');\nconst playPrevButton = player.querySelector('.play-prev');\nconst playNextButton = player.querySelector('.play-next');\n\nconst title = player.querySelector('.title');\nconst progressBar = player.querySelector('.progress-slider-filled');\nconst progress = player.querySelector('.progress-slider')\nconst currentTime = player.querySelector('.current-time');\nconst duration = player.querySelector('.duration');\nconst volumeBar = player.querySelector('.volume-slider-filled');\nconst volume = player.querySelector('.volume-slider');\nconst volumeButton = player.querySelector('.volume');\n\n\nconst playListContainer = player.querySelector('.play-list');\n\n\nconst lang = document.querySelector('.lang');\n\nconst menuButton = document.querySelector('.settings');\nconst settingsMenu = document.querySelector('.nav');\n\nconst offTime = document.getElementById('time');\nconst offDate = document.getElementById('date');\nconst offGreeting = document.getElementById('greeting');\nconst offQuotes = document.getElementById('quotes');\nconst offWeather = document.getElementById('weather');\nconst offPlayer = document.getElementById('player');\n\n\n\n\n\n//time\nfunction showTime(){\n    const dat = new Date();\n    time.textContent = String(dat.toLocaleTimeString('en-US', { hour12: false }));\n    showDate();\n    showGreeting();\n    setTimeout(showTime, 1000);\n}\nshowTime();\n\n//date\nfunction showDate(){\n    const dat = new Date();\n    let locales;\n    if (lang.value === 'English'){\n        locales = 'en-GB';\n    }else{\n        locales = 'ru-RU';\n    }\n    date.textContent = String(dat.toLocaleDateString(locales, {weekday: 'long', month: 'long', day: 'numeric'}));\n}\n\n//greeting\n\nfunction showGreeting() {\n    const dat = new Date();\n    const hours = dat.getHours();\n\n    const message = `Good ${getTimeOfDay(hours)}`;\n    if (lang.value === 'English'){\n        greeting.textContent = message;\n    } else {\n        for (let i = 0; i < greetingTranslation.en.length; i++){\n            if (greetingTranslation.en[i] === message){\n                greeting.textContent = greetingTranslation.ru[i];\n            }\n        }\n    }\n\n}\nfunction getTimeOfDay(hours){\n    switch (true){\n        case(hours > 5 && hours < 12 ):\n            return 'morning';\n        case(hours > 11 && hours < 18 ):\n            return 'afternoon';\n        case(hours > 17 && hours < 24 ):\n            return 'evening';\n        case(hours >= 0 && hours < 6 ):\n            return 'night';\n    }\n}\n\n//name\n\nfunction setLocalStorage() {\n    localStorage.setItem('name', name.value);\n    localStorage.setItem('city', city.value);\n}\nwindow.addEventListener('beforeunload', setLocalStorage)\nfunction getLocalStorage() {\n    if(localStorage.getItem('name')) {\n        name.value = localStorage.getItem('name');\n    }\n    if(localStorage.getItem('city')) {\n        city.value = localStorage.getItem('city');\n        setCity()\n    }\n}\nwindow.addEventListener('load', getLocalStorage)\n\n\n// SLIDER\n\n\n\n//number of background image\nfunction getRandomNum(max) {\n    return Math.floor(Math.random() * max);\n}\nlet bgNum = String(getRandomNum(20) + 1).padStart(2, '0');\n\n\nsetBg();\nfunction setBg(){\n    const dat =new Date()\n    let timeOfDay = getTimeOfDay(dat.getHours());\n    const img = new Image();\n    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;\n    img.addEventListener('load' , () => {\n        // body.style.transition = '10s ease-in-out';\n        body.style.backgroundImage = `url('https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg')`;\n\n    });\n}\nfunction getSlideNext(){\n    return String(bgNum > 19 ? 1 : Number(bgNum) + 1).padStart(2, '0');\n}\n\nfunction getSlidePrev(){\n    return String(bgNum < 2 ? 20 : Number(bgNum) - 1).padStart(2, '0');\n}\n\nleftSlideButton.addEventListener('click', () => {\n    bgNum = getSlidePrev();\n    setBg();\n})\nrightSlideButton.addEventListener('click', () => {\n    bgNum = getSlideNext();\n    setBg();\n})\n\n\n\n//WEATHER\nlet weatherLang = 'en';\ncity.value = 'Minsk';\nasync function getWeather(language) {\n    const url = `https://api.openweathermap.org/data/2.5/forecast?id=524901&q=${city.value}&lang=${language}&appid=cfe62a6645722176464f799a227a1ab5&units=metric`;\n    const res = await fetch(url);\n    const data = await res.json();\n    if (data.cod === '400' || data.city.population === 0){\n        if (language === 'en') {\n            alert('Wrong city name or there is no information for this town!')\n        } else {\n            alert('Неверное название города, или нет информации о погоде в этом городе!');\n        }\n    }\n    let ms;\n    if (language === 'ru')  {\n        ms = ' м/с';\n        if (city.value === 'Minsk'){\n            city.value = 'Минск';\n        }\n    } else {\n        ms = ' m/s';\n        if (city.value === 'Минск'){\n            city.value = 'Minsk';\n        }\n    }\n    weatherIcon.className = 'weather-icon owf';\n    weatherIcon.classList.add(`owf-${data.list[0].weather[0].id}`);\n    temperature.textContent = `${Math.round(data.list[0].main.temp * 10)/10}°C`;\n    weatherDescription.textContent = data.list[0].weather[0].description;\n    wind.textContent = Math.round(data.list[0].wind.speed) + ms;\n    humidity.textContent = data.list[0].main.humidity + ' %';\n}\n\n\n\nfunction setCity(event) {\n    if (!event){\n        getWeather(weatherLang).then();\n        city.blur();\n    } else if (event.code === 'Enter' || event.type === 'mouseleave') {\n        getWeather(weatherLang).then();\n        city.blur();\n    }\n\n}\n\ndocument.addEventListener('DOMContentLoaded', getWeather);\ncity.addEventListener('keypress', setCity);\ncity.addEventListener('mouseenter', () => {city.addEventListener('mouseleave', setCity)});\n\n\n//QUOTES\nasync function getQuotes() {\n    const quotes = 'assets/quotes/data.json';\n    const res = await fetch(quotes);\n    const data = await res.json();\n\n    const number = getRandomNum(data.length);\n    quote.textContent = data[number].text;\n    author.textContent = data[number].author;\n}\ngetQuotes();\n\nchangeQuote.addEventListener('click', getQuotes);\n\n\n\n//AUDIO-PLAYER\nconst audio = new Audio();\nlet playNum = 0;\nlet isPlay = false;\nlet audioTime = 0;\n\n\nfunction playAudio() {\n    audio.src = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][playNum].src;\n    duration.textContent = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][playNum].duration;\n    title.innerText = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][playNum].title;\n    playListContainer.childNodes[playNum].style.color = 'gold';\n    if (!isPlay){\n        audio.currentTime = audioTime;\n        audio.play();\n        isPlay = true;\n        playButton.classList.add('pause'); // добавляет элементу класс;\n    } else {\n        console.log(audio.currentTime);\n        audioTime = audio.currentTime;\n        console.log(audioTime);\n        audio.pause();\n        isPlay = false;\n        playButton.classList.remove('pause');\n    }\n}\n\n\nfunction playPrevious(){\n    playListContainer.childNodes[playNum].style.color = 'white';\n    if (playNum === 0){\n        playNum = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length - 1;\n    }else {\n        playNum -= 1;\n    }\n    isPlay = false;\n    playAudio()\n}\nfunction playNext(){\n    playListContainer.childNodes[playNum].style.color = 'white';\n    if (playNum === _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length - 1){\n        playNum = 0;\n    }else {\n        playNum += 1;\n    }\n    isPlay = false;\n    playAudio()\n}\nplayButton.addEventListener('click', playAudio);\nplayPrevButton.addEventListener('click', playPrevious);\nplayNextButton.addEventListener('click', playNext);\naudio.addEventListener('timeupdate', () => {\n    if (audio.currentTime === audio.duration){\n        playNext();\n    }\n\n    progressFunc();\n})\n//PROGRESS\n\nfunction audioCurrentTime(audioTime) {\n    let time = new Date(audioTime * 1000);\n    return {m: String(time.getMinutes()).padStart(2, '0'), s: String(time.getSeconds()).padStart(2, '0')};\n}\n\nfunction progressFunc() {\n    progressBar.style.flexBasis = `${(audio.currentTime / audio.duration) * 100}%`;\n    currentTime.textContent = `${audioCurrentTime(audio.currentTime).m}:${audioCurrentTime(audio.currentTime).s}`\n}\n\nfunction move(e) {\n    progressBar.style.flexBasis = String(e.offsetX/progress.offsetWidth*100) + '%';\n    audio.currentTime = (e.offsetX / progress.offsetWidth) * audio.duration;\n}\n\nprogress.addEventListener(\"mousedown\", function(e){\n    console.log(e);\n    move(e);\n    this.addEventListener(\"mousemove\", move);\n});\n\nprogress.addEventListener(\"mouseup\", function(e){\n    this.removeEventListener(\"mousemove\", move);\n});\n\n\n//VOLUME BUTTON\n\nlet volumeStatus = 'volume';\nlet prevVolume = 0.01;\n\nfunction noVolume() {\n    if (audio.volume > 0){\n        prevVolume = audio.volume;\n        audio.volume = 0;\n        volumeBar.style.flexBasis = '0%';\n        volumeButton.classList.add('mute');\n            // .src = 'assets/svg/player/mute.svg';\n        volumeStatus = 'mute';\n    } else {\n        volumeBar.style.flexBasis = String(prevVolume*100) + '%';\n        audio.volume = prevVolume;\n        volumeButton.classList.remove('mute');\n        volumeStatus = 'volume';\n        prevVolume = 0.01;\n    }\n\n}\nvolumeButton.addEventListener('click', noVolume)\n\n//VOLUME\nfunction moveVolume(e) {\n    volumeBar.style.flexBasis = String(Math.floor(10000 * e.offsetX / volume.offsetWidth) / 100) + '%';\n    if (Math.floor(100 * e.offsetX / volume.offsetWidth) / 100 < 0){\n        audio.volume = 0;\n    } else if (Math.floor(100 * e.offsetX / volume.offsetWidth) / 100 > 1){\n        audio.volume = 1;\n    } else{\n        audio.volume = Math.floor(100 * e.offsetX / volume.offsetWidth) / 100;\n    }\n    if (audio.volume === 0) {\n        volumeButton.classList.add('mute');\n    } else {\n        volumeButton.classList.remove('mute');\n    }\n}\n\nvolume.addEventListener(\"mousedown\", function(e){\n    moveVolume(e);\n    this.addEventListener('mousemove', moveVolume);\n});\n\nvolume.addEventListener(\"mouseup\", function(e){\n    this.removeEventListener('mousemove', moveVolume);\n});\n\n//IMPORT PLAYLIST\n\n\n\n_playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach(el => {\n    const li = document.createElement('li');\n    li.classList.add('playlist-item');\n    li.textContent = el.title;\n    playListContainer.append(li);\n})\n\n//TRANSLATE\nconst greetingTranslation = {\n    en: ['Good morning', 'Good afternoon', 'Good evening', 'Good night'],\n    be: ['Добрай раніцы', 'Добры дзень', 'Добры вечар', 'Дабранач'],\n    ru: ['Доброе утро', 'Добрый день', 'Добрый вечер', 'Доброй ночи']\n};\nlang.addEventListener('change', function (){\n    if (lang.value === 'English'){\n        weatherLang = 'en';\n\n    }else {\n        weatherLang = 'ru';\n    }\n    getWeather(weatherLang).then()\n});\n\n//MENU\n\nlet visible = false\nfunction hideMenu(){\n    console.log(3);\n    if (!visible){\n        visible = true;\n        settingsMenu.style.opacity = '1';\n    } else {\n        visible = false;\n        settingsMenu.style.opacity = '0';\n    }\n}\nmenuButton.addEventListener('click', hideMenu);\n\nfunction hideItem(item){\n    item.style.opacity = '0';\n    item.style.userSelect = 'none';\n}\n\noffTime.addEventListener('change', () => {hideItem(time)});\n\n//# sourceURL=webpack://momentum/./src/script.js?");

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
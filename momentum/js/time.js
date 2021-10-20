const time = document.querySelector('.time');
const date = document.querySelector('.date');

function showTime(){
    const dat = new Date();
    time.textContent = String(dat.toLocaleTimeString('en-US', { hour12: false }));
    showDate()
    setTimeout(showTime, 1000);
}
showTime();

function showDate(){
    const dat = new Date();
    date.textContent = String(dat.toLocaleDateString('be-BY', {weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', timeZone: 'UTC'}));
}




const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

let timerTime;
let endTime = 0;

const startFunc = () => {
    if (start.classList.contains('active') === true ) {
        const startTime = new Date();
        const timerFunc = () => {
         const now = new Date();
         timerTime = now - startTime + endTime;
         const ms = String(timerTime % 1000).padStart(3, '0');
         const s = String(Math.floor(timerTime / 1000) % 60).padStart(2, '0');
         const m = String(Math.floor(Math.floor(timerTime / 1000) / 60)).padStart(2, '0');
         timer.textContent = `${m}:${s}:${ms}`;
        }
        start.classList.remove('active');
        reset.classList.remove('active');
        stop.classList.add('active');
        return  setIntervalId = setInterval(timerFunc, 10);
    }
}

const stopFunc = () => {
    if (stop.classList.contains('active') === true) {
      clearInterval(setIntervalId);
      endTime = timerTime;
      stop.classList.remove('active');
      start.classList.add('active');
      reset.classList.add('active');
    }
}

const resetFunc = () => {
    if (reset.classList.contains('active') === true ) {
      timer.textContent = '00:00:000';
      endTime = 0;
      reset.classList.remove('active');
      start.classList.add('active');
    }
}

start.addEventListener('click', startFunc);
stop.addEventListener('click', stopFunc);
reset.addEventListener('click', resetFunc);
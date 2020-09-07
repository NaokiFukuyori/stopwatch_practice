const start = document.getElementById('start');
const timer = document.getElementById('timer');

const startFunc = () => {
 const startTime = new Date();

 const timerFunc = () => {
  const now = new Date();
  const timerTime = now - startTime;
  const mm = String(timerTime % 1000).padStart(3, '0');
  const s = String(Math.floor(timerTime / 1000) % 60).padStart(2, '0');
  const m = String(Math.floor(Math.floor(timerTime / 1000) / 60)).padStart(2, '0');
  timer.textContent = `${m}:${s}:${mm}`;
 }

 setInterval(timerFunc, 10);
}

start.addEventListener('click', startFunc);
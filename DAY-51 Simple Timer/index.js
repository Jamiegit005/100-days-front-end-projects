const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

let interval = null;
let hours = 0, minutes = 0, seconds = 0;

function pad(val) {
  return String(val).padStart(2, '0');
}

function updateDisplay() {
  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function tick() {
  seconds++;
  if (seconds === 60) { seconds = 0; minutes++; }
  if (minutes === 60) { minutes = 0; hours++; }
  updateDisplay();
}

startBtn.addEventListener('click', () => {
  if (interval) return;
  interval = setInterval(tick, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  hours = 0; minutes = 0; seconds = 0;
  updateDisplay();
});

const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const speedTitle = document.getElementById('speed-title');

const fullText = 'We Love Programming...';
let idx = 0;
let interval;

function typeText() {
  clearInterval(interval);

  const speed = 300 / speedEl.value;

  interval = setInterval(() => {
    if (idx < fullText.length) {
      textEl.textContent += fullText[idx];
      idx++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

speedEl.addEventListener('input', () => {
  speedTitle.textContent = speedEl.value;
  idx = 0;
  textEl.textContent = '';
  typeText();
});

typeText();

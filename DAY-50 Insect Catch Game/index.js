const startScreen = document.getElementById('start-screen');
const gameScreen  = document.getElementById('game-screen');
const endScreen   = document.getElementById('end-screen');
const gameArea    = document.getElementById('game-area');
const scoreEl     = document.getElementById('score');
const timerEl     = document.getElementById('timer');
const finalScore  = document.getElementById('final-score');
const chosenEl    = document.getElementById('chosen-insect');
const restartBtn  = document.getElementById('restart');

let score = 0;
let timeLeft = 30;
let chosenInsect = '';
let spawnInterval, countdown;

document.querySelectorAll('.choice').forEach(btn => {
  btn.addEventListener('click', () => {
    chosenInsect = btn.dataset.insect;
    chosenEl.textContent = chosenInsect;
    startScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
    startGame();
  });
});

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreEl.textContent = 0;
  timerEl.textContent = 30;
  gameArea.innerHTML = '';

  spawnInterval = setInterval(spawnInsect, 800);

  countdown = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 0) endGame();
  }, 1000);
}

function spawnInsect() {
  const insect = document.createElement('div');
  insect.classList.add('insect');
  insect.textContent = chosenInsect;

  const x = Math.random() * (gameArea.offsetWidth - 60);
  const y = Math.random() * (gameArea.offsetHeight - 60);
  insect.style.left = x + 'px';
  insect.style.top  = y + 'px';

  insect.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score;
    insect.remove();
  });

  gameArea.appendChild(insect);

  setTimeout(() => insect.remove(), 3000);
}

function endGame() {
  clearInterval(spawnInterval);
  clearInterval(countdown);
  gameScreen.style.display = 'none';
  endScreen.style.display = 'flex';
  finalScore.textContent = score;
}

restartBtn.addEventListener('click', () => {
  endScreen.style.display = 'none';
  startScreen.style.display = 'flex';
});

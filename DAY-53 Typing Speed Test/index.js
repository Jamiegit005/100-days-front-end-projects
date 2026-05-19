const quotes = [
  'The quick brown fox jumps over the lazy dog near the riverbank.',
  'Practice makes perfect and consistency builds real skill over time.',
  'Frontend development is the art of turning code into experiences.',
  'Every great developer was once a beginner who refused to give up.',
  'Clean code is not written by following rules but by caring about craft.',
  'The best way to learn programming is to build things every single day.',
  'JavaScript is the language of the web and the gateway to the internet.',
  'Small steps taken every day will compound into something truly remarkable.',
  'A good programmer looks both ways before crossing a one way street.',
  'First solve the problem then write the code as simply as possible.',
];

const quoteEl   = document.getElementById('quote');
const inputEl   = document.getElementById('input');
const timerEl   = document.getElementById('timer');
const wpmEl     = document.getElementById('wpm');
const accuracyEl = document.getElementById('accuracy');
const restartBtn = document.getElementById('restart');

let currentQuote = '';
let timeLeft = 60;
let interval = null;
let started = false;
let totalTyped = 0;
let correctTyped = 0;

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function renderQuote(quote) {
  quoteEl.innerHTML = quote
    .split('')
    .map((char, i) => `<span data-index="${i}">${char}</span>`)
    .join('');
  // highlight first character
  quoteEl.querySelector('span').classList.add('current');
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;
    if (timeLeft <= 10) timerEl.classList.add('danger');
    if (timeLeft <= 0) endTest();
  }, 1000);
}

function calcWPM() {
  const elapsed = (60 - timeLeft) || 1;
  const words = correctTyped / 5;
  return Math.round((words / elapsed) * 60);
}

function calcAccuracy() {
  if (totalTyped === 0) return 100;
  return Math.round((correctTyped / totalTyped) * 100);
}

function endTest() {
  clearInterval(interval);
  inputEl.disabled = true;
  wpmEl.textContent = calcWPM();
  accuracyEl.textContent = calcAccuracy();
}

function init() {
  clearInterval(interval);
  timeLeft = 60;
  started = false;
  totalTyped = 0;
  correctTyped = 0;

  timerEl.textContent = 60;
  timerEl.classList.remove('danger');
  wpmEl.textContent = 0;
  accuracyEl.textContent = 100;

  inputEl.value = '';
  inputEl.disabled = false;
  inputEl.focus();

  currentQuote = getRandomQuote();
  renderQuote(currentQuote);
}

inputEl.addEventListener('input', () => {
  if (!started) {
    started = true;
    startTimer();
  }

  const typed = inputEl.value;
  const spans = quoteEl.querySelectorAll('span');

  totalTyped = typed.length;
  correctTyped = 0;

  spans.forEach((span, i) => {
    span.classList.remove('correct', 'wrong', 'current');
    if (i < typed.length) {
      if (typed[i] === currentQuote[i]) {
        span.classList.add('correct');
        correctTyped++;
      } else {
        span.classList.add('wrong');
      }
    } else if (i === typed.length) {
      span.classList.add('current');
    }
  });

  wpmEl.textContent = calcWPM();
  accuracyEl.textContent = calcAccuracy();

  // auto load next quote when current is completed correctly
  if (typed === currentQuote) {
    currentQuote = getRandomQuote();
    renderQuote(currentQuote);
    inputEl.value = '';
    totalTyped = 0;
    correctTyped = 0;
  }
});

restartBtn.addEventListener('click', init);

init();

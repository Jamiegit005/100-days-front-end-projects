const questions = [
  { question: 'What does HTML stand for?', answers: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyper Transfer Markup Language', 'None of the above'], correct: 0 },
  { question: 'Which CSS property controls text size?', answers: ['font-weight', 'text-size', 'font-size', 'text-style'], correct: 2 },
  { question: 'Which keyword declares a variable in JS (ES6)?', answers: ['var', 'let', 'const', 'Both let and const'], correct: 3 },
  { question: 'What does the DOM stand for?', answers: ['Document Object Model', 'Data Object Management', 'Display Object Mode', 'Document Oriented Model'], correct: 0 },
  { question: 'Which method adds an element to the end of an array?', answers: ['push()', 'pop()', 'shift()', 'splice()'], correct: 0 },
];

let currentIndex = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next');
const quiz = document.getElementById('quiz');
const result = document.getElementById('result');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');
const restartBtn = document.getElementById('restart');

function loadQuestion() {
  answered = false;
  const q = questions[currentIndex];
  questionEl.textContent = `Q${currentIndex + 1}: ${q.question}`;
  answersEl.innerHTML = '';

  q.answers.forEach((ans, i) => {
    const btn = document.createElement('button');
    btn.classList.add('answer');
    btn.textContent = ans;
    btn.addEventListener('click', () => selectAnswer(btn, i));
    answersEl.appendChild(btn);
  });
}

function selectAnswer(btn, index) {
  if (answered) return;
  answered = true;

  const correct = questions[currentIndex].correct;
  const allBtns = document.querySelectorAll('.answer');

  allBtns[correct].classList.add('correct');
  if (index !== correct) btn.classList.add('wrong');
  else score++;
}

nextBtn.addEventListener('click', () => {
  if (!answered) return;
  currentIndex++;
  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    quiz.style.display = 'none';
    result.style.display = 'flex';
    scoreEl.textContent = score;
    totalEl.textContent = questions.length;
  }
});

restartBtn.addEventListener('click', () => {
  currentIndex = 0;
  score = 0;
  quiz.style.display = 'flex';
  result.style.display = 'none';
  loadQuestion();
});

loadQuestion();

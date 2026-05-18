const diceContainer = document.getElementById('dice-container');
const totalSpan = document.querySelector('#total span');
const rollBtn = document.getElementById('roll');
const diceCountInput = document.getElementById('dice-count');
const historyList = document.getElementById('history');

const faces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

function buildDice(count) {
  diceContainer.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const dice = document.createElement('div');
    dice.classList.add('dice');
    dice.innerHTML = `<div class="face">⚀</div>`;
    diceContainer.appendChild(dice);
  }
}

function rollDice() {
  const count = Math.min(Math.max(parseInt(diceCountInput.value) || 1, 1), 6);
  diceCountInput.value = count;
  buildDice(count);

  const allDice = document.querySelectorAll('.dice');
  const results = [];

  allDice.forEach(dice => {
    dice.classList.remove('rolling');
    void dice.offsetWidth;
    dice.classList.add('rolling');

    const roll = Math.floor(Math.random() * 6);
    results.push(roll + 1);
    dice.querySelector('.face').textContent = faces[roll];
  });

  const total = results.reduce((a, b) => a + b, 0);
  totalSpan.textContent = total;

  addHistory(results, total);
}

function addHistory(results, total) {
  const li = document.createElement('li');
  li.innerHTML = `Rolled: ${results.join(', ')} &nbsp;|&nbsp; Total: <span>${total}</span>`;
  historyList.insertBefore(li, historyList.firstChild);

  if (historyList.children.length > 10) {
    historyList.removeChild(historyList.lastChild);
  }
}

rollBtn.addEventListener('click', rollDice);

buildDice(2);

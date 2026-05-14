const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const clipboardBtn = document.getElementById('clipboard');

const chars = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?'
};

function generatePassword() {
  let charset = '';

  if (uppercaseEl.checked) charset += chars.uppercase;
  if (lowercaseEl.checked) charset += chars.lowercase;
  if (numbersEl.checked)   charset += chars.numbers;
  if (symbolsEl.checked)   charset += chars.symbols;

  if (!charset) {
    resultEl.textContent = 'Select at least one option';
    return;
  }

  const length = +lengthEl.value;
  let password = '';

  for (let i = 0; i < length; i++) {
    password += charset[Math.floor(Math.random() * charset.length)];
  }

  resultEl.textContent = password;
}

generateBtn.addEventListener('click', generatePassword);

clipboardBtn.addEventListener('click', () => {
  const password = resultEl.textContent;
  if (!password || password === 'Select at least one option') return;

  navigator.clipboard.writeText(password).then(() => {
    clipboardBtn.textContent = '✅';
    setTimeout(() => (clipboardBtn.textContent = '📋'), 1500);
  });
});

generatePassword();

const input = document.getElementById('password');
const bars = document.querySelectorAll('.bar');
const strengthText = document.getElementById('strength-text');

const levels = [
  { color: '#e74c3c', text: 'Weak',      bg: '#c0392b' },
  { color: '#e67e22', text: 'Fair',      bg: '#d35400' },
  { color: '#f1c40f', text: 'Good',      bg: '#b7950b' },
  { color: '#2ecc71', text: 'Strong',    bg: '#1a7a45' },
];

function getStrength(password) {
  let score = 0;
  if (password.length >= 8)              score++;
  if (/[A-Z]/.test(password))           score++;
  if (/[0-9]/.test(password))           score++;
  if (/[^A-Za-z0-9]/.test(password))    score++;
  return score;
}

input.addEventListener('input', () => {
  const val = input.value;

  if (!val) {
    bars.forEach(b => b.style.background = '');
    strengthText.textContent = '';
    document.body.style.background = '#1a1a2e';
    return;
  }

  const score = getStrength(val);

  bars.forEach((bar, i) => {
    bar.style.background = i < score ? levels[score - 1].color : 'rgba(255,255,255,0.2)';
  });

  strengthText.textContent = levels[score - 1].text;
  document.body.style.background = levels[score - 1].bg;
});

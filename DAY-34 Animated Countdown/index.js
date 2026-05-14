const numEl = document.getElementById('num');
const countdown = document.getElementById('countdown');
const final = document.getElementById('final');
const replay = document.getElementById('replay');

const sequence = [3, 2, 1];

function runAnimation() {
  // reset
  final.classList.remove('show');
  countdown.style.display = 'flex';
  let index = 0;

  numEl.textContent = sequence[0];
  numEl.style.animation = 'none';
  void numEl.offsetWidth;
  numEl.style.animation = 'popIn 0.4s ease';

  const interval = setInterval(() => {
    index++;

    if (index >= sequence.length) {
      clearInterval(interval);
      countdown.style.display = 'none';
      final.classList.add('show');
      return;
    }

    numEl.textContent = sequence[index];
    numEl.style.animation = 'none';
    void numEl.offsetWidth;
    numEl.style.animation = 'popIn 0.4s ease';
  }, 1000);
}

replay.addEventListener('click', runAnimation);

runAnimation();

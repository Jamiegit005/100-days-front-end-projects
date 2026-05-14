const ratings = document.querySelectorAll('.rating');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');
const thanks = document.getElementById('thanks');
const chosen = document.getElementById('chosen');

let selected = null;

ratings.forEach(btn => {
  btn.addEventListener('click', () => {
    ratings.forEach(r => r.classList.remove('active'));
    btn.classList.add('active');
    selected = btn.dataset.rating;
  });
});

sendBtn.addEventListener('click', () => {
  if (!selected) return;
  const labels = { 1: 'Terrible 😡', 2: 'Bad 😦', 3: 'Okay 😐', 4: 'Good 😊', 5: 'Amazing 🤩' };
  chosen.textContent = labels[selected];
  panel.style.display = 'none';
  thanks.style.display = 'flex';
});

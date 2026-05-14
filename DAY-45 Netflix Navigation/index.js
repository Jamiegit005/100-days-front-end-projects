const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

menuBtn.addEventListener('click', () => overlay.classList.add('open'));
closeBtn.addEventListener('click', () => overlay.classList.remove('open'));

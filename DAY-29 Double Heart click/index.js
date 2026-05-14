const container = document.querySelector('.container');
const heart = document.querySelector('.container i');
const likesCount = document.querySelector('#likes-count span');

let likes = 0;

container.addEventListener('dblclick', () => {
  heart.classList.remove('show');

  void heart.offsetWidth;

  heart.classList.add('show');

  likes++;
  likesCount.textContent = likes;
});

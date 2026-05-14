const grid = document.getElementById('grid');
const refresh = document.getElementById('refresh');

const rows = 3;
const cols = 3;

function generateFeed() {
  grid.innerHTML = '';
  for (let i = 0; i < rows * cols; i++) {
    const img = document.createElement('img');
    img.src = `https://picsum.photos/300/200?random=${Math.floor(Math.random() * 1000)}`;
    img.alt = 'Random Image';
    grid.appendChild(img);
  }
}

refresh.addEventListener('click', generateFeed);
generateFeed();

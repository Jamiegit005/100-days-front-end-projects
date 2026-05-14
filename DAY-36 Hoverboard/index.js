const container = document.getElementById('container');

const colors = ['#e74c3c','#e67e22','#f1c40f','#2ecc71','#1abc9c','#3498db','#9b59b6','#e91e63','#00bcd4','#ff5722'];

for (let i = 0; i < 500; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    square.style.background = color;
    square.style.boxShadow = `0 0 8px ${color}, 0 0 20px ${color}`;
  });

  square.addEventListener('mouseleave', () => {
    square.style.background = '';
    square.style.boxShadow = '';
  });

  container.appendChild(square);
}

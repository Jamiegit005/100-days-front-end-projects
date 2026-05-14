const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const colorBox = document.getElementById('color-box');
const hexVal = document.getElementById('hex-val');

function toHex(val) {
  return parseInt(val).toString(16).padStart(2, '0');
}

function updateColor() {
  const r = red.value, g = green.value, b = blue.value;
  document.getElementById('red-val').textContent = r;
  document.getElementById('green-val').textContent = g;
  document.getElementById('blue-val').textContent = b;

  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;

  colorBox.style.background = rgb;
  colorBox.style.boxShadow = `0 0 30px ${rgb}`;
  hexVal.textContent = hex.toUpperCase();
}

[red, green, blue].forEach(slider => slider.addEventListener('input', updateColor));

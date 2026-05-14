const inputs = document.querySelectorAll('.inputs input');

inputs[0].focus();

inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length > 1) input.value = input.value.slice(0, 1);
    if (input.value && index < inputs.length - 1) inputs[index + 1].focus();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && !input.value && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

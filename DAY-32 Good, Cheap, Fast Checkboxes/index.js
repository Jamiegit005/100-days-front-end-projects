const checkboxes = document.querySelectorAll('.list input[type="checkbox"]');

checkboxes.forEach(cb => cb.addEventListener('change', () => {
  const checked = [...checkboxes].filter(c => c.checked);

  checkboxes.forEach(c => {
    c.disabled = checked.length === 2 && !c.checked;
  });
}));

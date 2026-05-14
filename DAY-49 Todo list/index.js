const form = document.getElementById('form');
const input = document.getElementById('input');
const todoList = document.getElementById('todo-list');

function saveTodos() {
  const todos = [...todoList.querySelectorAll('li')].map(li => ({
    text: li.querySelector('span').textContent,
    done: li.classList.contains('done')
  }));
  localStorage.setItem('todos', JSON.stringify(todos));
}

function createTodo(text, done = false) {
  const li = document.createElement('li');
  if (done) li.classList.add('done');

  li.innerHTML = `
    <span>${text}</span>
    <button class="delete"><i class="fas fa-trash"></i></button>
  `;

  li.querySelector('span').addEventListener('click', () => {
    li.classList.toggle('done');
    saveTodos();
  });

  li.querySelector('.delete').addEventListener('click', () => {
    li.remove();
    saveTodos();
  });

  todoList.appendChild(li);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  createTodo(text);
  saveTodos();
  input.value = '';
});

const saved = JSON.parse(localStorage.getItem('todos') || '[]');
saved.forEach(t => createTodo(t.text, t.done));

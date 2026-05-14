const addBtn = document.getElementById('add');
const notesContainer = document.getElementById('notes-container');

function createNote(text = '') {
  const note = document.createElement('div');
  note.classList.add('note');

  note.innerHTML = `
    <div class="note-toolbar">
      <button class="delete"><i class="fas fa-trash"></i></button>
    </div>
    <textarea placeholder="Write your note here...">${text}</textarea>
  `;

  note.querySelector('.delete').addEventListener('click', () => {
    note.remove();
    saveNotes();
  });

  note.querySelector('textarea').addEventListener('input', saveNotes);

  notesContainer.appendChild(note);
}

function saveNotes() {
  const notes = [...document.querySelectorAll('.note textarea')].map(t => t.value);
  localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
  const saved = JSON.parse(localStorage.getItem('notes') || '[]');
  saved.length ? saved.forEach(createNote) : createNote();
}

addBtn.addEventListener('click', () => createNote());

loadNotes();

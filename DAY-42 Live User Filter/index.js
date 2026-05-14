const userList = document.getElementById('user-list');
const search = document.getElementById('search');

async function fetchUsers() {
  const res = await fetch('https://randomuser.me/api/?results=50');
  const data = await res.json();
  data.results.forEach(user => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${user.picture.medium}" alt="${user.name.first}" />
      <div class="info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
    `;
    userList.appendChild(li);
  });
}

search.addEventListener('input', () => {
  const term = search.value.toLowerCase();
  document.querySelectorAll('#user-list li').forEach(li => {
    const text = li.textContent.toLowerCase();
    li.classList.toggle('hide', !text.includes(term));
  });
});

fetchUsers();

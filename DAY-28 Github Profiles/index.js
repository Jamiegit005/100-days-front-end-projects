const APIURL = 'https://api.github.com/users/';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

async function getUser(username) {
  try {
    const res = await fetch(APIURL + username);
    if (!res.ok) throw new Error('No profile with this username');
    const data = await res.json();
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    showError(err.message);
  }
}

async function getRepos(username) {
  try {
    const res = await fetch(APIURL + username + '/repos?sort=created&per_page=10');
    const repos = await res.json();
    addReposToCard(repos);
  } catch (err) {
    showError('Problem fetching repos');
  }
}

function createUserCard(user) {
  main.innerHTML = `
    <div class="card">
      <img src="${user.avatar_url}" alt="${user.name}" />
      <div class="card-info">
        <h2>${user.name || user.login}</h2>
        <p>${user.bio || ''}</p>
        <a href="${user.html_url}" target="_blank">${user.html_url}</a>
        <div class="stats">
          <span>Followers: ${user.followers}</span>
          <span>Following: ${user.following}</span>
          <span>Repos: ${user.public_repos}</span>
        </div>
        <div id="repos"></div>
      </div>
    </div>
  `;
}

function addReposToCard(repos) {
  const reposEl = document.getElementById('repos');
  reposEl.classList.add('repos');
  repos.forEach(repo => {
    const a = document.createElement('a');
    a.classList.add('repo');
    a.href = repo.html_url;
    a.target = '_blank';
    a.textContent = repo.name;
    reposEl.appendChild(a);
  });
}

function showError(message) {
  main.innerHTML = `<p class="error-msg">${message}</p>`;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const username = search.value.trim();
  if (username) {
    getUser(username);
    search.value = '';
  }
});

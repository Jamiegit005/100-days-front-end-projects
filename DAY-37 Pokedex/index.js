const POKE_API = 'https://pokeapi.co/api/v2/pokemon/';
const container = document.getElementById('poke-container');
const LIMIT = 150;

async function getPokemon(id) {
  const res = await fetch(POKE_API + id);
  const data = await res.json();
  createCard(data);
}

function createCard(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemon');

  card.innerHTML = `
    <p class="id">#${String(pokemon.id).padStart(3, '0')}</p>
    <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
    <p class="name">${pokemon.name}</p>
    <div class="types">
      ${pokemon.types.map(t => `<span class="type ${t.type.name}">${t.type.name}</span>`).join('')}
    </div>
  `;

  container.appendChild(card);
}

for (let i = 1; i <= LIMIT; i++) getPokemon(i);

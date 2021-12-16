import PokemonCard from "./components/pokemon-card.js";

export function renderResourceCard(resourceURL, resourceType) {
  if (resourceType === 'pokemon') {
    const pokemon = new PokemonCard(resourceURL);
    pokemon.render();
  }

  if (resourceType === 'berry') renderBerryCard(resourceURL);
  if (resourceType === 'item') renderItemCard(resourceURL);
  if (resourceType === 'move') renderMoveCard(resourceURL);
}

function renderBerryCard(resourceURL) {
  const $cardPropertiesList = document.getElementById('card-properties');
  renderCardImage('./img/psyduck.png');
  $cardPropertiesList.innerHTML = '<p>CONTENT CURRENTLY UNAVAILABLE</p>';
  console.log(resourceURL.name);
}

function renderItemCard(resourceURL) {
  const $cardPropertiesList = document.getElementById('card-properties');
  renderCardImage('./img/psyduck.png');
  $cardPropertiesList.innerHTML = '<p>CONTENT CURRENTLY UNAVAILABLE</p>';
  console.log(resourceURL.name);
}

function renderMoveCard(resourceURL) {
  const $cardPropertiesList = document.getElementById('card-properties');
  renderCardImage('./img/psyduck.png');
  $cardPropertiesList.innerHTML = '<p>CONTENT CURRENTLY UNAVAILABLE</p>';
  console.log(resourceURL.name);
}

function renderCardImage(imgURL) {
  const $cardImage = document.querySelector('.img');
  $cardImage.src = `${imgURL}`;
  $cardImage.classList.remove('hidden');
}

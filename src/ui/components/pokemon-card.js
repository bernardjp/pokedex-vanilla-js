class PokemonCard {
  constructor(resourceURL) {
    this.imageURL = resourceURL.sprites.front_default;
    this.name = resourceURL.name.toUpperCase();
    this.pokeID = resourceURL.id;
    this.type = resourceURL.types[0].type.name.toUpperCase();
    this.firstAppearance = resourceURL.game_indices[0].version.name.toUpperCase();
    this.size = { height: resourceURL.height, weight: resourceURL.weight };
    this.stats = {
      hp: resourceURL.stats[0].base_stat,
      attack: resourceURL.stats[1].base_stat,
      defense: resourceURL.stats[2].base_stat,
      specialAttack: resourceURL.stats[3].base_stat,
      specialDefense: resourceURL.stats[4].base_stat,
      speed: resourceURL.stats[5].base_stat,
    };
    this.abilities = {
      a: resourceURL.abilities[0].ability.name.toUpperCase(),
      b: resourceURL.abilities[1].ability.name.toUpperCase(),
    };
  }

  render() {
    this.renderCardImage();

    const container = document.getElementById('card-properties');
    container.innerHTML = `
      <li>Name: <strong>${this.name}</strong></li>
      <li>Poké-ID: <strong>${this.pokeID}</strong></li>
      <li>Type: <strong>${this.type}</strong></li>
      <li>First Appearance: <strong>POKÉMON ${this.firstAppearance}</strong></li>
      <li>Height: <strong>${this.size.height}'</strong></li>
      <li>Weight: <strong>${this.size.weight}lb</strong></li>
      <hr>
      <p>Combat Stats</p>
      <li>Hit Points: <strong>${this.stats.hp}</strong></li>
      <li>Attack: <strong>${this.stats.attack}</strong></li>
      <li>Defense: <strong>${this.stats.defense}</strong></li>
      <li>Special Attack: <strong>${this.stats.specialAttack}</strong></li>
      <li>Special Defense: <strong>${this.stats.specialDefense}</strong></li>
      <li>Speed: <strong>${this.stats.speed}</strong></li>
      <hr>
      <p>Abilities</p>
      <li>Ability A: <strong>${this.abilities.a}</strong></li>
      <li>Ability B: <strong>${this.abilities.b}</strong></li>
    `;
  }

  renderCardImage() {
    const $cardImage = document.querySelector('.img');
    $cardImage.src = `${this.imageURL}`;
    $cardImage.classList.remove('hidden');
  }
}

export default PokemonCard;

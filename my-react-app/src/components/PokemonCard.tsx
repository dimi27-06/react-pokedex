function PokemonCard() {
  return (
    <div className="pokemon-card">
      <figure>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Bulbasaur"
        />
      </figure>
      <figcaption>
        <h1>Bulbisard</h1>
      </figcaption>
    </div>
  );
}

export default PokemonCard;
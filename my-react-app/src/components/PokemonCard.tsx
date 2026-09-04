const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

function PokemonCard() {

  const pokemon = pokemonList[0];

  return (
    <div className="pokemon-card">
      <figure>
        {pokemon.imgSrc !== undefined ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
      </figure>
      <figcaption>
        <h1>{pokemon.name}</h1>
      </figcaption>
    </div>
  );
}

export default PokemonCard;
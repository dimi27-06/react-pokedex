function PokemonCard({ pokemon }) {

  return (
    <div className="pokemon-card">
      <figure>
        {pokemon.imgSrc !== undefined ? (
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        ) : (
          <p>???</p>
        )}
      
      <figcaption>
        <h1>{pokemon.name}</h1>
      </figcaption>
      </figure>
    </div>
  );
}

export default PokemonCard;
const pokemonNames = [
  "pikachu",
  "charmander",
  "squirtle",
  "bulbasaur",
  "eevee",
  "snorlax",
  "jigglypuff",
  "meowth",
  "psyduck",
  "gengar",
  "charizard",
  "mewtwo"
];

function toShuffled(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

async function getPokemon(name) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );

  const data = await response.json();

  const pokemon = {
    name: data.name,
    image: data.sprites.other["official-artwork"].front_default
  };

  return pokemon;
}

export async function getPokemons() {
    return await Promise.all(
        pokemonNames.map(pokemon => {
            return getPokemon(pokemon);
        })
    )
}  


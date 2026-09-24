import { useEffect, useState } from 'react'
import { getPokemons } from './API/pokemonAPI';
import { Card } from './components/Card';
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function getCards() {
      const pokemons = await getPokemons();
       
      setPokemons(pokemons);
    }

    getCards();
  }, [])

  

  return (
    <>
      {pokemons.map(pokemon => {
        return <Card 
        key={pokemon.name} 
        pokemon={pokemon} 
        />
      })}
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import { getPokemons } from './API/pokemonAPI';
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

  console.log(pokemons);

  return (
    <>
      
    </>
  )
}

export default App

import { useEffect, useState } from 'react'
import { getPokemons } from './API/pokemonAPI';
import { CardGrid } from './components/CardGrid';
import './App.css'

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCards() {
      const cards = await getPokemons();
       
      setCards(cards);
    }

    getCards();
  }, [])
  

  return (
    <>
      <CardGrid cards={cards} />
    </>
  )
}

export default App

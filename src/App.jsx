import { useEffect, useState } from 'react'
import { getPokemons } from './API/pokemonAPI';
import { CardGrid } from './components/CardGrid';
import { Header } from './components/Header';
import './App.css'

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    async function getCards() {
      const cards = await getPokemons();
       
      setCards(cards);
    }

    getCards();
  }, [])
  

  return (
    <>
      <Header score={score} bestScore={bestScore} />
      <CardGrid cards={cards} />
    </>
  )
}

export default App

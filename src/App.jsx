
import { useEffect, useState } from 'react';
import { getPokemons } from './API/pokemonAPI';
import { CardGrid } from './components/CardGrid';
import { Header } from './components/Header';
import './App.css';
import { toShuffled } from './utils/shuffle';
import { GameOver } from './components/GameOver';

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [gameIsOver, setGameIsOver] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    async function getCards() {
      const cards = await getPokemons();
      setCards(toShuffled(cards));
    }

    getCards();
  }, []);

  function updateScore() {
    const newScore = score + 1;

    setScore(previousScore => previousScore + 1);

    if (newScore > bestScore) {
      setBestScore(newScore);
    }
  }

  function handleCardClick(card) {
    console.log(
      `${Math.floor(Math.random() * 1000)} Selected card is ${card.name}`
    );

    if (gameIsOver || isAnimating) return;

    if (clickedCards.includes(card.name)) {
      setGameIsOver(true);
      return;
    }

    setClickedCards(previousClickedCards => [
      ...previousClickedCards,
      card.name
    ]);

    updateScore();

    if (score === cards.length - 1) {
      setGameIsOver(true);
    }

    setIsAnimating(true);
    setIsFlipped(true);

    setTimeout(() => {
      setCards(previousCards => toShuffled(previousCards));

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsFlipped(false);
          setIsAnimating(false);
        });
      });
    }, 500);
  }

  function handlePlayAgain() {
    setCards(toShuffled(cards));
    setScore(0);
    setClickedCards([]);
    setGameIsOver(false);
  }

  return (
    <>
      <Header score={score} bestScore={bestScore} />

      <CardGrid
        cards={cards}
        onClick={handleCardClick}
        isFlipped={isFlipped}
      />

      {gameIsOver && (
        <GameOver
          score={score}
          totalCards={cards.length}
          onClick={handlePlayAgain}
        />
      )}
    </>
  );
}

export default App;

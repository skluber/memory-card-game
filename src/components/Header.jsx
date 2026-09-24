export function Header({ score, bestScore }) {
  return (
    <header>
      <div className="game-title">
        <h1>MEMORY CARD</h1>
      </div>

      <div className="score-board">
        <div className="score">
          <span className="score-title">Score</span>
          <span className="score-number">{score}</span>
        </div>

        <div className="bestScore">
          <span className="score-title">Best</span>
          <span className="score-number">{bestScore}</span>
        </div>
      </div>
    </header>
  )
}
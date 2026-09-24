export function GameOver({ score, totalCards, onClick }) {
  const hasWon = score === totalCards;

  return (
    <div className={`modal ${hasWon ? "modal-win" : "modal-lose"}`}>
      <div className="modal-content">
        <div className="game-over-icon">
          {hasWon ? "🏆" : "↻"}
        </div>

        <div className="game-over-message">
          {hasWon ? (
            <>
              <span>Congratulations!</span>
              <span>You remembered them all!</span>
            </>
          ) : (
            <>
              <span>Game over</span>
              <span>You clicked the same card</span>
            </>
          )}
        </div>

        <div className="game-over-container">
          <span className="score-label">Your score</span>
          <span className="score-value">{score}</span>
        </div>

        <button onClick={onClick}>Play Again</button>
      </div>
    </div>
  );
}
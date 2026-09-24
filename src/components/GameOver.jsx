export function GameOver({ score, totalCards, onClick }) {

    const message = score === totalCards
    ? <>Congrats!<br />You win this time!</>
    : <>Ohh! Game over<br />You clicked the same card</>;
    
    return (
            <div className="modal">
                <div className="modal-content">
                    <div className="game-over-message">{message}</div>

                    <div className="game-over-container">
                        <span className="score-label">Score:</span>
                        <span className="score-value">{score}</span>
                    </div>

                    <button onClick={onClick}>Play Again</button>
                </div>
            </div>
        )
}